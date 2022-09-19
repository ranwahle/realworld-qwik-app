import {
  useStore,
  component$,
  useWatch$,
  useClientEffect$,
} from "@builder.io/qwik";
import { Header } from "../../components/header/header";
import axios from "axios";
import { Tags } from "../../components/tags/tags";
import "./home.css";
import { FeedNavigation } from "../../components/feed-navigation/feed-navigation";
import { NavItem } from "../../components/feed-navigation/nav-item";
import ArticlesList from "../../components/articles-list/articles-list";
export const getTags = async () => {
  try {
    const response = await axios.get("https://api.realworld.io/api/tags");
    return response.data.tags;
  } catch (err) {
    console.error("error getting tags", err);
    return [];
  }
};

export const getGeneralArticles = async (tagName: string = "") => {
  const articleUrl = `https://api.realworld.io/api/articles?limit=10&offset=0`;
  const response = await axios.get<{ articles: any }>(
    tagName ? `${articleUrl}&tag=${tagName}` : articleUrl
  );
  return response.data.articles.map((item: any) => ({
    ...item,
    author: { ...item.author, imageUrl: item.author.image },
  }));
};

export const onFeedNavigationChange = async (feed: NavItem) => {
  const data = await getGeneralArticles();
  console.log("articles", data);
};

export const onTagSelectedChange = async (tagName: string) => {
  return getGeneralArticles(tagName);
};

export const Home = component$(async () => {
  const state = useStore(
    {
      counter: { count: 0 },
      tags: useStore([]),
      articles: useStore([]),
      selectedTag: "",
    },
    { recursive: true, reactive: true }
  );

  const tags = await getTags();
  state.tags = tags;

  state.articles = await getGeneralArticles();
  return (
    <div class="my-app p-20">
      <div className="banner">
        <h1>Qwik</h1>
        <p>A place to share your knowledge about Qwik</p>
      </div>
      <button onClick$={() => state.counter.count++}>
        {" "}
        {state.counter.count}
      </button>

      {state.articles.length}
      <div className="content-container">
        <div className="feed">
          <div>
            <FeedNavigation
              tabs={[
                { label: "Your Feed" },
                { label: "Global Feed" },
                { label: state.selectedTag || "None" },
              ]}
              navigationChange$={(tab) => onFeedNavigationChange(tab)}
            ></FeedNavigation>
          </div>
          <ArticlesList articles={state.articles}></ArticlesList>
        </div>
        <div className="side-bar">
          <Tags
            tags={state.tags}
            tagSelected$={(tag) => (state.selectedTag = tag)}
          >
            {" "}
          </Tags>
        </div>
      </div>
    </div>
  );
});
