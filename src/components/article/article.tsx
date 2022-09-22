import { component$ } from "@builder.io/qwik";
import { formatDate } from "~/common/date-utils";
import { ArticleData } from "~/model/article-data";
import { ArticleTagsList } from "../article-tags-list/article-tags-list";
import "./article.css";

export const Article = component$((props: { article: ArticleData }) => {
  const { article } = props;
  const dateString = formatDate(article.createdAt);
  return (
    <div class="article-container">
      <div class="article-meta">
        <div class="article-info">
          <img
            src={article.author.imageUrl}
            alt={article.author.username}
          ></img>
          <div>
            <a class="author" href="">
              {" "}
              {article.author.username}
            </a>
            <span class="date">{dateString}</span>
          </div>
        </div>
        <button class="article-favorites">
          <i class="ion-heart"></i> {article.favoritesCount}
        </button>
      </div>
      <div class="article-title">
        <a href={`/article/${article.slug}`}> {article.title}</a>
      </div>
      <div class="description">{article.description}</div>
      <div class="read-more">Read mode...</div>
      <ArticleTagsList tagsList={article.tagList}></ArticleTagsList>
    </div>
  );
});
