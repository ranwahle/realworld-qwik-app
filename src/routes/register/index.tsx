import { component$, useStore } from "@builder.io/qwik";
import axios from "axios";
import { storeToken } from "~/auth/auth";
import { BASE_URL } from "~/common/api";

import "./index.css";

export const signUp = () => {
  const username = document.querySelector<HTMLInputElement>(
    'input[name="username"]'
  )?.value;
  const password = document.querySelector<HTMLInputElement>(
    'input[name="password"]'
  )?.value;
  const email = document.querySelector<HTMLInputElement>(
    'input[name="email"]'
  )?.value;

  const credentials = { username, email, password };
  const signupPromise = axios.post(`${BASE_URL}/users`, {
    user: credentials,
  });
  signupPromise.then((res) => {
    const token = res.data.user.token;
    storeToken(token);
    if (token) {
      window.location.href = "/";
    }
  });
  return false;
};
export default component$(() => {
  const state = useStore({ username: "", passowrd: "", email: "" });
  return (
    <form onSubmit$={() => signUp()}>
      <div class="container">
        <h1>Sign Up</h1>
        <fieldset class="form-group">
          <input
            name="username"
            placeholder="username"
            value={state.username}
          ></input>
          <input
            placeholder="email"
            name="email"
            type="email"
            value={state.email}
          ></input>
          <input
            placeholder="password"
            name="password"
            type="password"
            value={state.passowrd}
          ></input>
        </fieldset>
        <button onClick$={() => signUp()}>Sign Up</button>
      </div>
    </form>
  );
});
