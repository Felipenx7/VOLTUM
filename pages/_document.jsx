import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style>{`
          @import url('https://rsms.me/inter/inter.css');
          @tailwind base;
          @tailwind components;
          @tailwind utilities;
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
