import { $, QRL } from "@builder.io/qwik";
import axios from "axios";
import { getAuthToken } from "~/auth/auth";
import { BASE_URL } from "~/common/api";
import { ArticleData } from "~/model/article-data";
import { Article } from "../article/article";

export default (props: {
  articles: any[];
  authenticated: boolean;
  showFollowUser?: boolean;
  articlesStateChanged?: QRL<() => void>;
}) => {
  const markAsFavorite = $(async (article: ArticleData) => {
    const url = `${BASE_URL}/articles/${article.slug}/favorite`;
    const options = { headers: { authorization: getAuthToken()! } };
    const response = !article.favorited
      ? await axios.post(url, {}, options)
      : await axios.delete(url, options);
    const { favoritesCount } = response.data.article;
    article.favoritesCount = favoritesCount;
    article.favorited = !article.favorited;
    if (props.articlesStateChanged) {
      props.articlesStateChanged();
    }
  });
  return (
    <div class="articles-list">
      {!props.articles.length
        ? "No articles here... yet"
        : props.articles.map((article) => (
            <Article
              article={article}
              markAsFavorite={markAsFavorite}
              showFollowUser={props.showFollowUser}
              authenticated={props.authenticated}
            ></Article>
          ))}
    </div>
  );
};
