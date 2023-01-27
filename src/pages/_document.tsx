import {Head, Main, Html, NextScript} from "next/document";

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
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0&display=swap&family=Kaushan+Script"
          rel="stylesheet"
        />
      </Head>
      <body className="flex flex-col">
        <Main />

        <footer className="w-full mt-auto px-5 py-5 flex flex-col flex-1 gap-4 border-t border-t-neutral-200 text-sm dark:border-t-gray-600">
          <p className="text-justify">
            Copyright &copy; {new Date().getFullYear()} Plump Albert
          </p>
          <a
            className="self-center w-fit flex flex-1 items-center"
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
  );
}
