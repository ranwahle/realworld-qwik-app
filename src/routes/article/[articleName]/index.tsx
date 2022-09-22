import { component$, Resource, useResource$, useStore } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import axios from "axios";
import { CommentData } from "~/model/article-data";
import { Comment } from "./comment/comment";
import { ArticleHeader } from "./article-header/article-header";
import "./index.css";
import { ArticleTagsList } from "~/components/article-tags-list/article-tags-list";

export default component$(() => {
  const location = useLocation();
  const state = useStore({ name: location.params.articleName });

  const articleResource = useResource$(async ({ track, cleanup }) => {
    track(state, "name");
    const controller = new AbortController();
    cleanup(() => controller.abort());

    const articleResponse = await axios.get(
      `https://api.realworld.io/api/articles/${state.name}`
    );
    const article = await articleResponse.data.article;
    const commentsResponse = await axios.get(
      `https://api.realworld.io/api/articles/${state.name}/comments`
    );
    article.comments = commentsResponse.data.comments.map((comment: any) => ({
      ...comment,
      author: { ...comment.author, imageUrl: comment.author.image },
    }));
    return article;
  });

  return (
    <>
      <Resource
        value={articleResource}
        onResolved={(article: any) => (
          <div>
            <ArticleHeader {...article}></ArticleHeader>

            <p>{article.description}</p>
            <p>{article.body}</p>

            <ArticleTagsList tagsList={article.tagList}></ArticleTagsList>
            <div class="container">
              {article.comments.map((comment: CommentData) => {
                return <Comment {...comment}></Comment>;
              })}
            </div>
          </div>
        )}
      ></Resource>
    </>
  );
});
