import React from 'react'
import Head from 'next/head'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='text-center bg-[#141414]'>
      <Head>
        <title>Blog - kach0w</title>
        <meta name="description" content="kach0w's blog"></meta>
        <link rel="icon" href="/favicon.png"/> 
      </Head>
      <div className='text-black mb-4'>
        <Navbar />
      </div>
      <div className='mx-auto mb-[10vh] max-w-[50vw] rounded-lg p-10 bg-white drop-shadow-xl  font-serif font-normal text-[2rem]'>
            <h2 className='font-serif text-[3rem] font-bold'>Statistics</h2>
            <h2 className='font-serif font-bold text-[1rem]'>Sep 4, 2022</h2>
            <div className='pb-5 pt-5'>
                Sorry, I haven't posted here in a while. I was still working on more Github projects over the summer but I forgot to update what I've done here. Anyways, school started and in my stats class because we were only going to start using calculators next week I wanted to make something to graph and display data... 
            </div>
            <a className='bg-[#3b82f6] rounded-lg text-white mt-[2vh] hover:bg-[#0a5adb] p-3' href="/blog/statistics">Read more</a>
      </div>  
      <div className='mx-auto mb-[10vh] max-w-[50vw] rounded-lg p-10 bg-white drop-shadow-xl  font-serif font-normal text-[2rem]'>
            <h2 className='font-serif text-[3rem] font-bold'>Pokédex</h2>
            <h2 className='font-serif font-bold text-[1rem]'>June 21, 2022</h2>
            <div className='pb-5 pt-5'>
            As I have been gaining experience with calling APIs in React apps, I wanted to make one of my first ideas when it came to apis, a Pokédex. 
              I looked and found many different APIs on sites like RapidAPI but eventually found one called PokéAPI. It has very extensive documentation
              and data about each pokémon along with pictures which many other ones lack...             </div>
            <a className='bg-[#3b82f6] rounded-lg text-white mt-[2vh] hover:bg-[#0a5adb] p-3' href="/blog/pokedex">Read more</a>
      </div>  
      <div className='mx-auto mb-[10vh] max-w-[50vw] rounded-lg p-10 bg-white drop-shadow-xl  font-serif font-normal text-[2rem]'>
            <h2 className='font-serif text-[3rem] font-bold'>Javascript</h2>
            <h2 className='font-serif font-bold text-[1rem]'>April 16, 2022</h2>
            <div className='pb-5 pt-5'>
            Recently, I have been getting interested in the programming language, javascript. In fact, it is the reason that I am currently making this website. 
              I went down this rabbithole because of my interest in making a Discord bot. The bot's purpose was to have fun with some friends by using the bot to 
              secretly dm non-adminstrators in my server from a secret text channel. Later, I was interested in trolling some friends with a javascript program...    </div>
            <a className='bg-[#3b82f6] rounded-lg text-white mt-[2vh] hover:bg-[#0a5adb] p-3' href="/blog/javascript">Read more</a>
      </div>  
      <Footer />
    </div>
  )
}
