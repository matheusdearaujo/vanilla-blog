import { routes } from "./routes.js";
import { parseRequestURL } from "./utils/index.js";

async function main() {
  const app = document.getElementById("root") || null;

  const request = parseRequestURL();

  const parsedURL =
    (request.resource ? "/" + request.resource : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? "/" + request.verb : "");

  const page = routes[parsedURL] || routes[404];

  app.innerHTML = await page.render();

  await page.afterRender();
}

window.addEventListener("hashchange", main);
window.addEventListener("load", main);
