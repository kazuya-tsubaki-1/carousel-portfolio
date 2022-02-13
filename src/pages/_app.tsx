import Head from 'next/head'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/tailwind.css';
import '../styles/main.css'

const App = ({Component, pageProps}) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Please describe your site settings */}
      <title></title>
      <meta name="description" content="" />

      <meta name="robots" content="noindex" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
      {/* favicon */}
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />      
    </Head>
    <Component {...pageProps} />
  </>
)

export default App