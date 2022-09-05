import Layout from '../components/Layout'
import '../styles/globals.css'
import Header from './Header/Header'


function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component  {...pageProps} />)
  }
  return (

<Component {...pageProps} />  

    

  )
}

export default MyApp
