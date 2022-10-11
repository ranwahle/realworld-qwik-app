import { component$ } from "@builder.io/qwik";
import "./tags.css";

export const Tags = component$(
  (props: {
    tags: string[];
    tagSelected$: (name: string) => Promise<void>;
  }) => {
    const { tagSelected$ } = props;
    return (
      <div className="tags-container">
        <p>Popular tags</p>
        <div>
          {props.tags.map((tag) => (
            <a
              href="javascript:void(0)"
              onClick$={() => tagSelected$(tag)}
              className="tag-chip"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    );
  }
);
