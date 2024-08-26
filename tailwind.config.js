module.exports = {
  theme: {
    extend: {
      // Hier kannst du benutzerdefinierte Stile und Utilities hinzufügen
      boxShadow: {
        'xl': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  plugins: [],
}
