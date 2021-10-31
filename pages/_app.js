import "../styles/globals.css";
import Nav from "../efi/nav";
import "../styles/nav.css";
import "../styles/init.css";
import NextNProgress from "nextjs-progressbar";
import "../styles/prompt.css";
import Kuysonteen from "../efi/footer"
import "../styles/zuckmydick.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <NextNProgress
        color="#FFF"
        startPosition={0.3}
        stopDelayMs={200}
        height={1}
        showOnShallow={true}
      />

      <Component {...pageProps} />
      <Kuysonteen />
    </>
  );
}

export default MyApp;
