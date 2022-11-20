import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Main from '../components/Main';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>kach0w</title>
        <meta name="description" content="kach0w's website"></meta>
        <link rel="icon" href="/favicon.png"/>  
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Proxima+Nova:wght@400;600;700;900" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>     
        <link href="https://fonts.googleapis.com/css2?family=Proxima+Nova:wght@400;600;700;900" rel="stylesheet" />
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
