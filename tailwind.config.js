/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        base: {
          "primary": "#7289da",
          "base-100": "#282b30",

          "--btn-text-case": "normal",
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}
