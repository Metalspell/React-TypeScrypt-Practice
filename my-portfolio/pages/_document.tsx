import Document, { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;300;400;500;600;700;800;900&family=Diplomata+SC&display=swap"
            rel="stylesheet">
          </link>
          <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        </Head>
        <body className="overflow-x-hidden bg-fixed bg-contain bg-clear-sky dark:bg-dark-theme dark:text-white">
          <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-repeat bg-400 bg-light-theme dark:bg-contain dark:bg-stars dark:bg-repeat dark:bg-black"></div>
          <img className="hidden w-4/12 lg:absolute lg:dark:block h-4/12 right-4" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="img" />
          <div className="fixed top-0 bottom-0 left-0 right-0 bg-transparent bg-repeat h-150 bg-3000 animate-cloudsMove bg-light-clouds w-10000 dark:animate-cloudsMove dark:bg-1000 dark:bg-clouds "></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
