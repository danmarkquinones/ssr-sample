import Navbar from '../src/shareable/navbar'
import '../styles/globals.css'
import Router from "next/router";
import React ,{ useState , useEffect} from 'react'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);


  return (
    <>
      <Navbar/>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}

export default MyApp
