import '@/styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {AuthProvider} from '@/context/index'
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
