import { formatDate } from "~/common/date-utils";
import { ArticleData } from "~/model/article-data";
import "~/global.css";
import "./article-meta.css";
import { FollowUser } from "~/components/follow-user/follow-user";
import { FavoriteArtice } from "~/components/favorite-article/favorite-article";
import { QRL } from "@builder.io/qwik";

export const ArticleMeta = (props: {
  article: ArticleData;
  authenticated?: boolean;
  showFollowUser?: boolean;
  showFavoriteText?: boolean;
  markAsFavorite: QRL<(article: ArticleData) => void>;
}) => {
  const { article, showFavoriteText } = props;
  const { author } = article;
  return (
    <div class="article-meta">
      <a href={`/profile/${author.username}`}>
        <img src={author.image} alt={author.username}></img>
      </a>
      <div>
        <div>
          <a class="author" href={`/profile/${article.author.username}`}>
            {" "}
            {article.author.username}
          </a>
        </div>
        <div>
          <span class="date">{formatDate(article.createdAt)}</span>
        </div>
      </div>
      {props.authenticated ? (
        <>
          {props.showFollowUser ? (
            <FollowUser
              user={article.author}
              following={article.author.following}
            ></FollowUser>
          ) : (
            <></>
          )}
          <FavoriteArtice
            article={article}
            showText={showFavoriteText}
            markAsFavorite={props.markAsFavorite}
          ></FavoriteArtice>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
