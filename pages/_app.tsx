import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Believe Support Services</title>
      </Head>
      <Appbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
