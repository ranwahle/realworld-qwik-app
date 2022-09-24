import {
  component$,
  Resource,
  useClientEffect$,
  useResource$,
  useStore,
} from "@builder.io/qwik";
import "./side-menu.css";
import { getUser } from "../../auth/auth";

export const SideMenu = component$(() => {
  const state = useStore({ user: {} });

  useClientEffect$(async () => {
    const user = await getUser();
    console.log("user", user);
    state.user = user;
  });

  return (
    <div className="menu">
      <div className="menu-item">
        <a href="/">Home</a>
      </div>

      <div className="menu-item">
        <a href="/register">{state.user?.username || "Sign up"}</a>
      </div>
      <div className="menu-item">
        <a>Log in</a>
      </div>
    </div>
  );
});
