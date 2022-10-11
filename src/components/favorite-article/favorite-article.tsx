import { QRL, $ } from "@builder.io/qwik";
import { ArticleData } from "~/model/article-data";
import "./favorite-article.css";
export const favoriteText = (article: ArticleData) => {
  return <>{article.favorited ? "Unfavorite Article" : "Favorite Article"} </>;
};

export const favoriteCount = (count: number, withBraces: boolean) => {
  return withBraces ? `(${count})` : count;
};

export const FavoriteArtice = (props: {
  article: ArticleData;
  showText?: boolean;
  markAsFavorite: QRL<(article: ArticleData) => Promise<void>>;
}) => {
  const { article, showText, markAsFavorite } = props;
  return (
    <button
      class="btn btn-sm btn-outline-primary"
      onClick$={async () => await markAsFavorite(article)}
    >
      <i class="ion-heart"></i>
      {showText ? <>{favoriteText(article)}</> : <></>}
      <span class="counter">
        {favoriteCount(article.favoritesCount, !!showText)}
      </span>
    </button>
  );
};
