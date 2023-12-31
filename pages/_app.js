import "../public/global.css";
import RootLayout from "./../components/layout";

export default function MyApp({ Component, pageProps }) {
  return (
  <RootLayout>
    <Component {...pageProps} />
  </RootLayout>
  )
}
