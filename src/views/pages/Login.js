import Button from "../components/Button.js";

const Login = {
  render: async () => {
    return `
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img class="w-8 h-8 mr-2" src="/public/images/icon.jpg" alt="logo">
            Vanilla Blog
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" id="loginForm">
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="email" id="emailInput" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com">
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="passInput" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                ${await Button.render({
                  style: ["w-full text-center"],
                  html: `
                    Sign in
                  `,
                })}
              </form>
            </div>
          </div>
        </div>
      </section>
    `;
  },
  afterRender: async () => {
    document.querySelector("#loginForm").addEventListener("submit", event => {
      event.preventDefault();

      const email = document.querySelector("#emailInput");
      const pass = document.querySelector("#passInput");

      if (!email.value || !pass.value) {
        alert(`The fields cannot be empty! Please try again.`);
        return;
      }

      alert(`User with email ${email.value} was successfully submitted!`);

      location.replace("/");
    });
  },
};

export default Login;
