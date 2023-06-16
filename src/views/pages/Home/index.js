import { TopContent } from "./components/TopContent.js";
import { useFetch } from "../../../utils/index.js";

const Home = {
  render: async () => {
    const { data: posts } = await useFetch(
      "https://5bb634f6695f8d001496c082.mockapi.io/api/posts",
      { method: "GET" },
    );

    return `
      <div>
        ${await TopContent.render()}
        <ul>
          ${posts.map(
            post => `
              <div class="pb-4 px-10 flex flex-col justify-center gap-6 md:flex-row">
                <div class="w-full lg:flex container mx-auto">
                  <div class="w-full border border-gray-400 lg:border-gray-400 bg-white rounded-b lg:rounded-b-none rounded p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-4">
                      <a
                        href="#/post/${post.id}"
                        class="text-gray-900 font-bold text-xl hover:underline"
                      >
                        ${post.title}
                      </a>
                    </div>
                    <div class="flex items-center">
                      <div class="text-sm">
                        <a
                          class="text-gray-900 leading-none hover:underline"
                        >
                          ${post.name}
                        </a>
                        <p class="text-gray-600">${new Date(
                          post.createdAt,
                        ).toDateString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `,
          )}
        </ul>
      </div>
    `;
  },
  afterRender: async () => {},
};

export default Home;
