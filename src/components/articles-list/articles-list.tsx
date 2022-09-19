import { component$ } from "@builder.io/qwik";
import { Article } from "../article/article";

export default component$((props: { articles: any[] }) => {
  return (
    <div class="articles-list">
      {props.articles.map((article) => (
        <Article article={article}></Article>
      ))}
    </div>
  );
});
