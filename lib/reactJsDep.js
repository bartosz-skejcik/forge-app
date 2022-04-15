const colors = require('colors');

const react = ['react', 'react-dom', 'react-scripts'];
const reactAddons = ['@testing-library/jest-dom', '@testing-library/react', '@testing-library/user-event']

const reactApp = `function App() {
    return (
        <section className="App">
            <h1>React.js</h1>
            <p>
                React.js is a JavaScript library for building user interfaces.
            </p>
        </section>
    );
}
  
export default App;`
const reactIndex = `import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`
const reactHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using web-gen"
    />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`
const reactManifest = `{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
      {
          "src": "favicon.ico",
          "sizes": "64x64 32x32 24x24 16x16",
          "type": "image/x-icon"
      },
      {
          "src": "logo192.png",
          "type": "image/png",
          "sizes": "192x192"
      },
      {
          "src": "logo512.png",
          "type": "image/png",
          "sizes": "512x512"
      }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}`

const tailwindDeps = ['tailwindcss', 'postcss', 'autoprefixer']
const tailwindConfig = `module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`
const tailwindCSS = `@tailwind base;
@tailwind components;
@tailwind utilities;`


const postInstallMessage = (pwd) => { console.log(`
Inside that directory, you can run several commands:

  `+`npm start`.brightBlue+`
    Starts the development server.

  `+`npm run build`.brightBlue+`
    Bundles the app into static files for production.

  `+`npm test`.brightBlue+`
    Starts the test runner.

  `+`npm run eject`.brightBlue+`
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

I suggest that you begin by typing:

  `+`cd`.brightBlue+` ${pwd}
  `+`npm run dev`.brightBlue+`

Happy hacking!`)}

module.exports = { react, reactApp, reactIndex, reactAddons, reactHtml, reactManifest, tailwindDeps, tailwindConfig, tailwindCSS, postInstallMessage }