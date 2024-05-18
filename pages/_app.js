import "@/styles/globals.css";
import {MobileProvider} from "@/util/screenSizeContext.js";

export default function App({ Component, pageProps }) {
  return (
    <MobileProvider>
      <Component {...pageProps} />;
    </MobileProvider>
  );
}
