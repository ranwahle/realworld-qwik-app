import { component$, QRL } from "@builder.io/qwik";
import "./article-tags-list.css";

export const ArticleTagsList = component$(
  (props: { tagsList: string[]; onDelete$?: QRL<(tag: string) => void> }) => {
    const { onDelete$ } = props;
    return (
      <ul class="tag-list">
        {props.tagsList.map((tag) => (
          <li class="tag-list-item">
            {onDelete$ ? (
              <i
                class="ion-close-round tag-delete-icon"
                onClick$={() => onDelete$(tag)}
              ></i>
            ) : null}
            {tag}
          </li>
        ))}
      </ul>
    );
  }
);
