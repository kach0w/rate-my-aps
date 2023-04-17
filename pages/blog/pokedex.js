import React from 'react'
import Head from 'next/head'

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'

export default function Home() {
    return (
        <div className='text-center bg-[#f3f3f3]'>
            <Head>
                <title>Pokédex - kach0w</title>
                <meta name="description" content="kach0w's blog"></meta>
                <link rel="icon" href="/favicon.png"/> 
            </Head>
            <div className='w-[50rem] mx-auto bg-white text-[#222]'>
                <div className='mx-auto mt-[3rem] text-center'>
                    <a className='float-left text-[#3b82f6] hover:underline' href="https://kach0w.com/blog">⮤ Back</a>
                    <br></br>
                    <p className='font-bold group-hover:underline text-2xl text-slate-900'>Statistics with ChartJS</p>
                    <p className=' mt-2 text-md text-slate-400'>June 21st, 2022</p>
                </div>
                
                <p className='text-left'>
                As I have been gaining experience with calling APIs in React apps, I wanted to make one of my first ideas when it came to apis, a Pokédex. 
                    I looked and found many different APIs on sites like RapidAPI but eventually found one called PokéAPI. It has very extensive documentation
                    and data about each pokémon along with pictures which many other ones lack. So using code similar to my NBA player stats project I called each
                    pokemon with an array (I was only about to call about 899 because the computer could not handle more, even still it takes a while to load) and then 
                    printed out its stats in a card. The end product is <a href="https://pokedex.kachow.me">this</a> which I am very proud of. Even better I was able
                    to change the images from the old pixelated pictures to the ones you might see in the Pokémon TV shows. 
                    <br></br>
                    <br></br>
                    <p className='text-right'>
                        Till next time,
                        <br></br>
                        kach0w  
                    </p>
                </p>
            </div>      
        </div>
    )
}