/** @type {import('tailwindcss').Config} */
module.exports = {
  // here in this content array we are giving instruction that in which type of files we can use Tailwind i.e it can be with html file,js file or any other file that is being specified here.
  content: [ "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

