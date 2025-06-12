/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    // If you're using Shadcn UI, ensure its components are included
    "./node_modules/@shadcn/vue/**/*.{js,vue,ts}", // Or your specific path to Shadcn components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
