import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import rusteze from '../assets/rusteze-2.png';

export default function Home() {
  return (
    <div className='w-[100vw] text-[#222] h-[100vh] bg-[#f3f3f3] text-center'>
      <Head>
        <title>kach0w</title>
        <meta name="description" content="kach0w's website"></meta>
        <link rel="icon" href="/favicon.png"/>  
        <Script src="https://kit.fontawesome.com/a191de05ec.js" crossorigin="anonymous" />
      </Head>
      <h2 className='font-extrabold  text-3xl mt-[3vh] mb-[1vh]'>kach0w</h2>
      <div className='mb-[2vh]'>
        Trying to Learn New Things.
      </div>
      <div className='w-[30rem] h-[9rem] md:flex rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] m-auto mb-[2rem]'>
          <div className='w-[11rem] align-middle m-auto float-left'>
            <Image className='w-[12rem]' src={rusteze} alt="img"/>
          </div>
          <div className='w-[16rem] mt-[1.4rem] mr-[2rem] float-right text-center'>
            Hello, welcome to my website.
            <br></br>
            Check out some of my <a className='text-[#3b82f6] hover:underline' href="/projects">projects</a> and also view the <a className='text-[#3b82f6] hover:underline' href="/blog">blog</a> which I try (and mostly fail) to frequently update. 
          </div>
      </div>
      <h2 className='font-bold text-2xl underline mb-1'>About Me</h2>
      <div className='w-[30rem] md:flex rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh]'>
        I am a high schooler trying to learn new things in Computer Science. Right now I am trying to learn backend also want to learn more about machine learning in web applications. 
      </div>  
      <h2 className='font-bold text-2xl underline mb-1'>Contact</h2>
      <div className='w-[30rem] rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh]'>
        <div>
          <ul>
            <li>
              <b>GitHub: </b><a className='text-[#3b82f6] hover:underline' href="https://github.com/kach0w">kach0w</a>
            </li>
            <li>
              <b>Email: </b><a className='text-[#3b82f6] hover:underline' href="mailto:kachow@duck.com">kachow@duck.com</a>
            </li>
            <li>
              <b>Discord: </b><a className='text-[#3b82f6] hover:underline'>kachow#9170</a>
            </li>
          </ul>
        </div>
      </div>
      <h2 className='font-bold text-2xl underline'>Latest Blog Post</h2>
      <div className='w-[30rem] rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
        <p className='font-bold text-slate-900'>Statistics with ChartJS</p>
        <p className='text-slate-600'>Implementing things I learned in my Statistics class with the Javascript graphing tool ChartJS.</p>
        <p className=' mt-2 text-sm text-slate-400'>September 4, 2022</p>
      </div>
      <Footer />
      
    </div>
    
  )
}
