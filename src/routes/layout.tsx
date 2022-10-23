import { component$, Slot } from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";
import { getCookies, getUser, saveTempCookie, UserData } from "~/auth/auth";
import { Header } from "../components/header/header";
export let user: UserData;

interface RequestHandlerObj {
  request: {
    headers: any;
  };
  url: any;
  params: any;
  platform: any;
  next: () => void;
  abort: () => void;
}
export const onGet: RequestHandler<any> = async (args: RequestHandlerObj) => {
  const { request } = args;
  const cookiesObj = getCookies(request.headers.get("cookie"));
  const token = cookiesObj.token;
  saveTempCookie(token);
  user = await getUser();
};

export const Layout = component$(() => {
  return (
    <>
      <Header user={user} />
      <main>
        <Slot />
      </main>
    </>
  );
});

export default Layout;
