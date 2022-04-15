const colors = require("colors");

const next = ['react', 'react-dom', 'next']
const nextDev = ['eslint', 'eslint-config-next']
const _app = `import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
`;
const nextIndex = `import Head from 'next/head'
export default function Home() {
    return (
        <>
            <Head>
                <title>Next.js</title>
            </Head>
            <div>
                <h1>Next.js</h1>
                <p>
                    Next.js is a minimalistic framework for server-side rendering.
                </p>
            </div>
        </>
    )
}
`
const nextConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
`

const react = ['react', 'react-dom']
const reactDev = ['eslint-config-react', 'eslint']


const tailwindCSS = `@tailwind base;
@tailwind components;
@tailwind utilities;
`
const tailwindConfig = `module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
`
const tailwindDeps = ['tailwindcss', 'postcss', 'autoprefixer']
const postCssConfig = `module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
}
`

const postInstallMessage = (pwd) => { console.log(`
Inside that directory, you can run several commands:

  `+`npm run dev`.brightBlue+`
    Starts the development server.

  `+`npm run build`.brightBlue+`
    Builds the app for production.

  `+`npm run start`.brightBlue+`
    Runs the built app in production mode.

I suggest that you begin by typing:

  `+`cd`.brightBlue+` ${pwd}
  `+`npm run dev`.brightBlue+`
`)}

module.exports = { next, nextDev, _app, nextIndex, nextConfig, tailwindCSS, tailwindConfig, tailwindDeps, postCssConfig, postInstallMessage }