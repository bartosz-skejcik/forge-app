const colors = require("colors");

const next = ['react', 'react-dom', 'next']
const nextts = ['react', 'react-dom', 'next']

const nextDev = ['eslint', 'eslint-config-next']
const nextTsDev = [
  'typescript',
  '@types/react',
  '@types/node',
]

const prettierDeps = [
  'prettier'
]

const ESLintDeps = [
  'eslint-plugin-react@latest',
  'eslint-config-google@latest',
  'eslint'
]

const ESLintTsDeps = [
  'eslint',
  'eslint-plugin-react@latest',
  '@typescript-eslint/eslint-plugin@latest',
  'eslint-config-google@latest',
  '@typescript-eslint/parser@latest'
]

const _app = `import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
`;

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const _appts = `import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
`

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

const tsConfig = `{
  "compilerOptions": {
    "allowJs": true,
    "allowUnreachableCode": false,
    "allowUnusedLabels": false,
    "declaration": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "lib": ["dom", "dom.iterable", "esnext"],
    "module": "esnext",
    "moduleResolution": "node",
    "noEmit": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitReturns": true,
    "pretty": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": true,
    "target": "es2018"
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}`

const ESLintConfig = `module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
};`

const ESLintTsDepsWithPrettier = [
  ...ESLintTsDeps,
  ...prettierDeps
]

const ESLintDepsWithPrettier = [
  ...ESLintDeps,
  ...prettierDeps
]

const ESLintConfigWithPrettier = `module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
    'prettier'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
};`

const prettierConfig = `{
  "endOfLine": "lf",
  "printWidth": 80,
  "tabWidth": 4,
  "useTabs": true,
  "trailingComma": "es5"
}`

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

const postInstallMessage = (pwd) => {
  console.log(`
Inside that directory, you can run several commands:

  `+ `npm run dev`.brightBlue + `
    Starts the development server.

  `+ `npm run build`.brightBlue + `
    Builds the app for production.

  `+ `npm run start`.brightBlue + `
    Runs the built app in production mode.

I suggest that you begin by typing:

  `+ `cd`.brightBlue + ` ${pwd}
  `+ `npm run dev`.brightBlue + `
`)
}

module.exports = { next, nextts, nextDev, nextTsDev, _app, _appts, tsConfig, ESLintConfig, ESLintDeps, ESLintTsDeps, ESLintConfigWithPrettier, prettierConfig, ESLintTsDepsWithPrettier, ESLintDepsWithPrettier, prettierDeps, nextIndex, nextConfig, tailwindCSS, tailwindConfig, tailwindDeps, postCssConfig, postInstallMessage }