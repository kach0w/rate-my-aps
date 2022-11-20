import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script';

import Main from '../components/Main';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>kach0w</title>
        <meta name="description" content="kach0w's website"></meta>
        <link rel="icon" href="/favicon.png"/>  
        <Script src="https://kit.fontawesome.com/a191de05ec.js" crossorigin="anonymous" /> 
      </Head>
      {/* Navbar */}
      <Navbar />
      {/* Main */}
      <Main />
      {/* About */}
      {/* Projects */}
      {/* Blog */}
      {/* Footer */}
    </div>
  )
}
