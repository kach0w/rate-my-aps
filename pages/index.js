import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import rusteze from '../assets/rusteze-2.png';

export default function Home() {
  return (
    <div className='w-[100vw] h-[100vh] bg-[#f3f3f3] text-center'>
      <Head>
        <title>kach0w</title>
        <meta name="description" content="kach0w's website"></meta>
        <link rel="icon" href="/favicon.png"/>  
        <Script src="https://kit.fontawesome.com/a191de05ec.js" crossorigin="anonymous" />
      </Head>
      {/* Navbar  color should be bg-[#141414] */}
      {/* <Navbar /> */}
      <div className='w-[25vw] h-[18vh] rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto mt-[5vh] mb-[3vh]'>
          <div className='w-[8vw] float-left'>
            <Image className='w-[8vw]' src={rusteze} alt="img"/>
            <div className='font-semibold text-lg'>
                kach0w
            </div>
            
          </div>
          <div className='w-[15vw] float-right mt-[1vw] mr-[1vw] text-center'>
            Hello, welcome to my website.
            <br>
            </br>
            Check out some of my <a className='text-[#3b82f6] hover:underline' href="/projects">projects</a> and feel free to also view my <a className='text-[#3b82f6] hover:underline' href="/blog">blog</a> where I try (and mostly fail) to frequently give an update on new things I am learning. 
          </div>
      </div>
      <h2 className='font-bold text-2xl underline mb-1'>About Me</h2>
      <div className='w-[25vw] rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh]'>
        I am a high schooler trying to learn new things in Computer Science. Right now I am trying to go into the backend of web development and also want to learn more about machine learning in web applications. 
      </div>  
      <h2 className='font-bold text-2xl underline mb-1'>Contact</h2>
      <div className='w-[25vw] rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh]'>
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
      <h2 className='font-bold text-2xl underline mb-1'>Latest Blog Post</h2>
      <div className='w-[25vw] rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
        <p className='font-bold text-slate-900'>Statistics with ChartJS</p>
        <p className='text-slate-600'>Implementing things I learned in my Statistics class with the Javascript graphing tool ChartJS.</p>
        <p className=' mt-2 text-sm text-slate-400'>September 4, 2022</p>

      </div>
      <Footer />
      
    </div>
    
  )
}
