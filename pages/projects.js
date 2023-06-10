import React from 'react'
import Head from 'next/head'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='w-[100vw] text-[#222] h-[100vh] bg-[#f3f3f3] text-center'>
      <Head>
        <title>Projects - kach0w</title>
        <meta name="description" content="kach0w's blog"></meta>
        <link rel="icon" href="/favicon.png"/> 
      </Head>
      <div className='mx-auto mt-[2rem] w-[60rem]'>
        <a className='float-left ml-[] text-[#3b82f6] hover:underline' href="https://kach0w.com">⮤ Back</a>
        <br></br>
      </div>

      <h2 className='font-extrabold  text-3xl mt-[3vh] mb-[1vh]'>Projects</h2>
      <div className='mb-[2vh]'>
        Some selected projects, you can find more on my <a className=' text-[#3b82f6] hover:underline' href="https://github.com/kach0w">GitHub</a>.
      </div>
      <div className='mx-auto w-[70rem] grid grid-cols-3 mt-[5rem]'>
        
        <a href="https://devpost.com/software/positivity-discord-bot">
          <div className='w-[20rem] group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900'>positivity-discord-bot</p>
            <p className='text-slate-600'>Created a Discord Bot with sentiment analysis and Discord JS</p>
            <p className=' mt-2 text-sm text-slate-400'>NodeJS · Javascript</p>
          </div>  
        </a>
        <a href="https://github.com/kach0w/dalle-api">
          <div className='w-[20rem] group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900'>dalle-api</p>
            <p className='text-slate-600'>Created a image generator with the Dalle-2 API from OpenAI</p>
            <p className=' mt-2 text-sm text-slate-400'>NextJs · HTML</p>
          </div>
        </a>
        <a href="https://silly-snickerdoodle-e1a7d5.netlify.app/">
          <div className='w-[20rem] group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900'>kach0w-statistics</p>
            <p className='text-slate-600'>Used ChartJS and stuff from my stats class to make a statistics app</p>
            <p className=' mt-2 text-sm text-slate-400'>JS</p>
          </div>  
        </a>
        <a href="https://github.com/kach0w/Youtube-Playlist-Maker">
          <div className='w-[20rem] group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900'>youtube-playlist-maker</p>
            <p className='text-slate-600'>I created an extension that makes a playlist of a youtuber's videos</p>
            <p className=' mt-2 text-sm text-slate-400'>JS</p>
          </div>  
        </a>
        <a href="https://kach0w.github.io/pokemon/pokedex">
          <div className='w-[20rem] group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900'>pokédex</p>
            <p className='text-slate-600'>Using a Pokemon API to create a pokedex which carries a search function.</p>
            <p className=' mt-2 text-sm text-slate-400'>React · JS · HTML</p>
          </div>  
        </a>
        <a href="https://github.com/kach0w/playerstats">
          <div className='w-[20rem] group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900'>player-stats</p>
            <p className='text-slate-600'>Used the "Ball Don't Lie" API to return the stats of an NBA player</p>
            <p className=' mt-2 text-sm text-slate-400'>React · JS · HTML</p>
          </div> 
        </a>
      </div>
      <div>
        Some miscellaneous projects, small things I did for fun.
      </div>
      <div className='mx-auto w-[70rem] grid grid-cols-3 mt-[2rem]'>
        <a href="https://kach0w.github.io/web3d/wikipedia">
          <div className='w-[20rem] group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900'>wikipedia</p>
            <p className='text-slate-600'>The rotating, 3d web; inspiration from bithole.dev</p>
            <p className=' mt-2 text-sm text-slate-400'>JS · HTML</p>
          </div>  
        </a>
        <a href="https://kach0w.github.io/Weather">
          <div className='w-[20rem] group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900'>weather</p>
            <p className='text-slate-600'>One of my first apps with APIs, the weather</p>
            <p className=' mt-2 text-sm text-slate-400'>JS · HTML</p>
          </div>  
        </a>
        <a href="https://kach0w.github.io/Calculator/calc">
          <div className='w-[20rem] group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900'>apple-calculator</p>
            <p className='text-slate-600'>A recreation of the Apple Calculator with just pure javascript</p>
            <p className=' mt-2 text-sm text-slate-400'>JS · HTML</p>
          </div>  
        </a>
      </div>
      <div className='mt-[35rem]'>
        <Footer />
      </div>
    </div>
  )
}
