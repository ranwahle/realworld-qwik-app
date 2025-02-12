import {
  useStore,
  component$,
  useResource$,
  Resource,
  $,
} from "@builder.io/qwik";
import axios from "axios";
import { Tags } from "../../components/tags/tags";
import { FeedNavigation } from "../../components/feed-navigation/feed-navigation";
import { NavItem } from "../../components/feed-navigation/nav-item";
import ArticlesList from "../../components/articles-list/articles-list";

import "~/global.css";
import "./home.css";
import { BASE_URL } from "~/common/api";
import { getAuthToken } from "~/auth/auth";
import { ArticleData } from "~/model/article-data";

export const getTags: () => Promise<string[]> = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tags`);
    return response.data.tags;
  } catch (err) {
    console.error("Error getting tags");
    return [];
  }
};

export const getFeed: () => Promise<ArticleData[]> = async () => {
  const feedUrl = `${BASE_URL}articles/feed`;
  try {
    const response = await axios.get(feedUrl, {
      headers: { authorization: getAuthToken()! },
    });
    return response.data.articles.map((item: any) => ({
      ...item,
      author: { ...item.author, imageUrl: item.author.image },
    }));
  } catch {
    return [];
  }
};

export const getGeneralArticles = async (tagName: string = "") => {
  const articleUrl = `${BASE_URL}/articles?limit=10&offset=0`;
  const response = await axios.get<{ articles: any }>(
    tagName ? `${articleUrl}&tag=${tagName}` : articleUrl,
    {
      headers: {
        authorization: getAuthToken()!,
      },
    }
  );
  return response.data.articles.map((item: any) => ({
    ...item,
    author: { ...item.author, imageUrl: item.author.image },
  }));
};

export const onFeedNavigationChange = (
  feed: string,
  state: {
    tabs: NavItem[];
    activeTab: NavItem | undefined;
    selectedTag: string;
    personalFeed: any;
  }
) => {
  const tagCandidate = feed.startsWith("#") ? feed.substring(1) : "";
  state.activeTab = state.tabs.find((tab) => tab.label === feed);
  getFeed().then((feed) => {
    state.personalFeed = feed;
  });
  state.selectedTag = tagCandidate;
};

export const onSelectedTagChange = async (tagName: string, state: any) => {
  state.selectedTag = tagName;
  state.tabs[2].label = `#${tagName}`;
  state.activeTab = state.tabs[2];
};

export const Home = component$(() => {
  const tabs = [
    { label: "Your Feed" },
    { label: "Global Feed" },
    { label: "" },
  ];

  const authenticated = !!getAuthToken();
  const state = useStore(
    {
      count: 0,
      tags: [],
      articles: [],
      personalFeed: [],
      selectedTag: "",
      tabs,
      activeTab: tabs[1],
    },
    { recursive: true }
  );

  const articlesStateChanged = $(() => {
    state.count++;
  });

  const tagsResource = useResource$<string[]>(({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());
    return getTags();
  });

  const personalFeedResource = useResource$<ArticleData[]>(
    ({ cleanup, track }) => {
      const controller = new AbortController();
      track(() => ({ count: state.count, selectedTag: state.selectedTag }));
      cleanup(() => controller.abort());
      return getFeed();
    }
  );

  const articlesResource = useResource$<ArticleData[]>(({ track, cleanup }) => {
    const controller = new AbortController();
    track(() => ({ count: state.count, selectedTag: state.selectedTag }));
    cleanup(() => controller.abort());
    return getGeneralArticles(state.selectedTag);
  });

  return (
    <div class="my-app p-20">
      <div class="banner">
        <h1>Qwik</h1>
        <p>A place to share your knowledge about Qwik</p>
      </div>

      <div class="content-container">
        <div class="feed">
          <div>
            <FeedNavigation
              tabs={state.tabs.map((tab) => tab.label)}
              navigationChange$={(tab) => onFeedNavigationChange(tab, state)}
              activeTab={state.activeTab}
            ></FeedNavigation>
          </div>
          {state.activeTab?.label !== "Your Feed" ? (
            <Resource
              value={articlesResource}
              onResolved={(articles: any[]) => (
                <ArticlesList
                  articles={articles}
                  authenticated={authenticated}
                  articlesStateChanged={articlesStateChanged}
                ></ArticlesList>
              )}
            ></Resource>
          ) : (
            <Resource
              value={personalFeedResource}
              onResolved={(articles: any[]) => (
                <ArticlesList
                  articles={articles}
                  authenticated={authenticated}
                  articlesStateChanged={articlesStateChanged}
                ></ArticlesList>
              )}
            ></Resource>
          )}
        </div>
        <Resource
          value={tagsResource}
          onRejected={(error) => (
            <>
              Error: {error.message} {error.stackTrace}
            </>
          )}
          onResolved={(tags: string[]) => (
            <Tags
              tags={tags}
              tagSelected$={(tag) => onSelectedTagChange(tag, state)}
            ></Tags>
          )}
        ></Resource>
      </div>
    </div>
  );
});
