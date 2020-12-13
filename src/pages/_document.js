import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html style={{ background: "#F8FAFC" }}>
        <script
          dangerouslySetInnerHTML={{
            __html: `if (!document.cookie || document.cookie.indexOf('auth') === -1) { if (location.pathname !== '/login') location.replace('/login'); }`,
          }}
        />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
