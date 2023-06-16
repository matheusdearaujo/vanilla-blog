import Error404 from "./views/pages/errors/Error404.js";
import Login from "./views/pages/Login.js";
import Home from "./views/pages/Home.js";
import Post from "./views/pages/Post.js";

export const routes = {
  404: Error404,
  "/": Home,
  "/post/:id": Post,
  "/login": Login,
};
