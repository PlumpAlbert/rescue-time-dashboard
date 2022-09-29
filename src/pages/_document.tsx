import { Head, Main, Html, NextScript } from "next/document"
import Image from "next/image"

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="flex flex-col">
        <Main />

        <footer className="w-full flex flex-1 py-6 border-t border-t-neutral-200 justify-center items-center dark:border-t-gray-600">
          <a
            className="flex flex-1 justify-center items-center"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className="ml-2">
              <picture>
                <source srcSet="/vercel.svg" type="image/svg" />
                <img
                  className="h-4 dark:invert"
                  src="/vercel.svg"
                  alt="Vercel Logo"
                />
              </picture>
            </span>
          </a>
        </footer>
        <NextScript />
      </body>
    </Html>
  )
}
