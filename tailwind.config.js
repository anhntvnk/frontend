module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}', // Thêm đường dẫn đến thư mục app
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1b1d21',
        secondary: '#212529',
        accent: '#00BCFF',
        success: '#6ada7d',
        warning: '#f7b84b',
        info: '#58caea',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
