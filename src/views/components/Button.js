const Button = {
  render: async ({ html, style }) => {
    return `
      <button
        class="${
          style ? style : ""
        } bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border-b-4 border-gray-500 hover:border-gray-500 rounded shadow"
      >
        ${html}
      </button>
    `;
  },
  afterRender: async () => {},
};

export default Button;
