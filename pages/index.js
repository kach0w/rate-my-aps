import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import boy from '../assets/index/boy-studying.png'

export default function Home() {
  return (
    <div className='w-[100vw] text-[#222] h-[100vh] bg-[#f3f3f3] text-center'>
      <Head>
        <title>Rate My AP's</title>
        <meta name="description" content="Help with your AP's from students across the country"></meta>
        <link rel="icon" sizes="196x196" href="/favicon.ico"/>  
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap" rel="stylesheet"/>
      </Head>
      
      <Navbar />
      <div className='w-[70rem] mx-auto mb-[3rem]'>
        <h1 className='text-[#3b82f6]'>Help with your AP's from students across the country.</h1>
        <h3 className='text-[#222] w-[40rem] mx-auto'>Whether you need studying partners, information about courses, or just want to learn which course might be the best fit for you, Rate My AP's is the place to be.</h3>
      </div>
      <div className='w-[70rem] mx-auto pb-[5rem]'>
        <div className='inline-block align-middle'>
          <h2 className='text-[#3b82f6] w-[30rem] mx-auto'>What do we do?</h2>
          <h3 className='text-[#222] w-[30rem] mx-auto'>Rate My AP's connects searching students with people with past experience and lets them make better, more informed decisions about AP's they plan to take.</h3>
        </div>
        <div className='inline-block align-middle w-[30rem] pl-[2rem]'>
          <Image width={500} height={500} src={boy} unoptimized></Image>
        </div>
      </div>
      <Footer />
    </div>

    
  )
}