import { parseRequestURL, useFetch } from "../../utils/index.js";

const Post = {
  render: async () => {
    const { id: postId } = parseRequestURL();

    const { data: post } = await useFetch(
      `https://5bb634f6695f8d001496c082.mockapi.io/api/posts/${postId}`,
      { method: "GET" },
    );

    return `
      <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header class="mb-4 lg:mb-6 not-format">
              <address class="flex mb-6 not-italic md:flex-row flex-col">
                <div class="mb-4 md:mb-0 inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <div>
                    <p class="text-xl font-bold text-gray-900 dark:text-white">
                      ${post.name || "Autor Desconhecido"}
                    </p>
                    <p class="text-base font-light text-gray-500 dark:text-gray-400"></p>
                  </div>
                </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                ${post.title}
              </h1>
            </header>

            <div class="overflow-hidden">
              ${post.content}
            </div>

            <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
          </article>
        </div>
      </main>
    `;
  },
  afterRender: async () => {},
};

export default Post;
