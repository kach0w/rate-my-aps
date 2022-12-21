import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script';

import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='bg-[#141414] '>
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
      <div id="about">
        <About />
      </div>
      {/* Projects */}
      <div id="projects">
      <Projects />
      </div>
      {/* Blog */}
      <div id="blog">
      <Blog />
      </div>
      {/* Footer */}
      <Footer />
    </div>
    
  )
}
