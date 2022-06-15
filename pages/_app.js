import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      {/* SINGLETON PATTERN -> Access to react hooks -> use them to make a connection to your backend */}
      <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}

export default MyApp;
