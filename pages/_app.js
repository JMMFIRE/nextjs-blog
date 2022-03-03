import '../styles/global.css'

// App component is the top-level component which will be common across all pages 
// Useful for keeping state while navigating between pages 
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}