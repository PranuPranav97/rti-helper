import { Html, Head, Main, NextScript } from "next/document";
import nextConfig from "../../next.config";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta
          name="description"
          content="RTI-Helper. Use this free tool to fill RTI Applications."
        />
        <link
          rel="icon"
          type="image/png"
          href={`${nextConfig.basePath}/logo.png`}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
