import { component$, QRL } from "@builder.io/qwik";
import { ArticleData } from "~/model/article-data";
import { ArticleMeta } from "~/routes/article/[articleName]/article-meta/article-meta";
import { ArticleTagsList } from "../article-tags-list/article-tags-list";
import "./article.css";

export const Article = component$(
  (props: {
    article: ArticleData;
    authenticated: boolean;
    showFollowUser?: boolean;
    markAsFavorite: QRL<(article: ArticleData) => Promise<void>>;
  }) => {
    const { article, authenticated, showFollowUser, markAsFavorite } = props;
    return (
      <div>
        <div class="article-container">
          <ArticleMeta
            markAsFavorite={markAsFavorite}
            showFollowUser={showFollowUser}
            article={article}
            authenticated={authenticated}
          ></ArticleMeta>

          <div class="article-title">
            <a href={`/article/${article.slug}`}> {article.title}</a>
          </div>
          <div class="description">{article.description}</div>
          <div class="read-more">Read mode...</div>
          <ArticleTagsList tagsList={article.tagList}></ArticleTagsList>
        </div>
      </div>
    );
  }
);
