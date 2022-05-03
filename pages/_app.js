import { React,  useEffect  } from "react";


import '../styles/globals.css'
import '../styles/Main.scss'
import 'react-phone-number-input/style.css'

// aos 
import AOS from "aos";
import "aos/dist/aos.css";
// import "../scss/style.scss";

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// recoil
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return(
  <RecoilRoot>
   <Component {...pageProps} />

  </RecoilRoot>
  )
}

export default MyApp
