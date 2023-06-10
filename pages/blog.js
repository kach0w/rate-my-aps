import React from 'react'
import Head from 'next/head'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='w-[100vw] text-[#222] h-[100vh] bg-[#f3f3f3] text-center'>
      <Head>
        <title>Blog - kach0w</title>
        <meta name="description" content="kach0w's blog"></meta>
        <link rel="icon" href="/favicon.png"/> 
      </Head>
      <div className='mx-auto mt-[2rem] w-[60rem]'>
        <a className='float-left ml-[] text-[#3b82f6] hover:underline' href="https://kach0w.com">⮤ Back</a>
        <br></br>
      </div>

      <h2 className='font-extrabold  text-3xl mt-[3vh] mb-[1vh]'>Blog</h2>
      <div className='mb-[2vh]'>
        An infrequent update on a variety of things, from web development to new and old technologies.
      </div>
      <div className='mx-auto w-[70rem] grid grid-cols-3 mt-[5rem]'>
        <a href="/blog/wikipedia">
          <div className='w-[20rem] group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900'>Wikipedia</p>
            <p className='text-slate-600'>A speech from the Academic Decathlon competition on Wikipedia, not really web dev but still about technology in general</p>
            <p className=' mt-2 text-sm text-slate-400'>March 27, 2023</p>
          </div>  
        </a>
        <a href="/blog/express">
          <div className='w-[20rem] group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900'>Express JS</p>
            <p className='text-slate-600'>A first step into back-end programming; learning things with express like MySQL and HTTP requests</p>
            <p className=' mt-2 text-sm text-slate-400'>February 22, 2023</p>
          </div>  
        </a>
        <a href="/blog/openai">
          <div className='w-[20rem] group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900'>OpenAI</p>
            <p className='text-slate-600'>Some words on the technology behind OpenAI's Dalle-2 and ChatGPT and some of the controversy behind it.</p>
            <p className=' mt-2 text-sm text-slate-400'>January 22, 2023</p>
          </div>  
        </a>
        <a href="/blog/statistics">
          <div className='w-[20rem] group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900'>Statistics with ChartJS</p>
            <p className='text-slate-600'>Implementing things I learned in my Statistics class with the Javascript graphing tool ChartJS.</p>
            <p className=' mt-2 text-sm text-slate-400'>September 4, 2022</p>
          </div>  
        </a>
        <a href="/blog/pokedex">
          <div className='w-[20rem] group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900'>Pokédex</p>
            <p className='text-slate-600'>Using a Pokemon API to create a pokedex (a wide grid of all pokemon) along with a search function.</p>
            <p className=' mt-2 text-sm text-slate-400'>June 21, 2022</p>
          </div>  
        </a>
        <a href="/blog/javascript">
          <div className='w-[20rem] group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900'>Javascript</p>
            <p className='text-slate-600'>My first experience with Javascript, starting with making a Discord bot for fun with friends.</p>
            <p className=' mt-2 text-sm text-slate-400'>April 16th, 2022</p>
          </div> 
        </a>
      </div>
      
      <div className='mt-[35rem]'>
        <Footer />
      </div>
    </div>
  )
}
