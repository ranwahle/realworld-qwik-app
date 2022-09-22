import { component$ } from "@builder.io/qwik";
import { formatDate } from "~/common/date-utils";
import { ArticleData } from "~/model/article-data";

import "./article-header.css";

export const ArticleHeader = component$((article: ArticleData) => {
  return (
    <div class="banner">
      <h1>{article.title}</h1>
      <div class="article-meta">
        <a href="">
          <img src={article.author.image} alt={article.author.username}></img>
        </a>
        <div>
          <a class="author" href="">
            {" "}
            {article.author.username}
          </a>
          <span class="date">{formatDate(article.createdAt)}</span>
        </div>
        <button class="btn btn-sm action-btn btn-outline-secondary">
          <i class="ion-plus-round"></i> &nbsp; Follow {article.author.username}
        </button>
        <button class="btn btn-sm btn-outline-primary">
          <i class="ion-heart"></i> Favorite Article{" "}
          <span class="counter">({article.favoritesCount})</span>
        </button>
      </div>
    </div>
  );
});
