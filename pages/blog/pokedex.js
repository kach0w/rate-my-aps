import React from 'react'
import Head from 'next/head'

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'

export default function Home() {
    return (
        <div className='text-center'>
            <Head>
                <title>Pokédex - kach0w</title>
                <meta name="description" content="kach0w's blog"></meta>
                <link rel="icon" href="/favicon.png"/> 
            </Head>
            <Navbar />
            <div className='mx-auto mt-[5vh] mb-[10vh] max-w-[50vw] rounded-lg p-5 bg-white drop-shadow-xl  font-serif font-normal text-[2rem]'>
                    <h2 className='font-serif font-bold'>Pokédex</h2>
                    <h2 className='font-serif font-bold text-[1rem]'>June 21, 2022</h2>
                    <div className='pb-5 pt-5'>
                    As I have been gaining experience with calling APIs in React apps, I wanted to make one of my first ideas when it came to apis, a Pokédex. 
                    I looked and found many different APIs on sites like RapidAPI but eventually found one called PokéAPI. It has very extensive documentation
                    and data about each pokémon along with pictures which many other ones lack. So using code similar to my NBA player stats project I called each
                    pokemon with an array (I was only about to call about 899 because the computer could not handle more, even still it takes a while to load) and then 
                    printed out its stats in a card. The end product is <a href="https://pokedex.kachow.me">this</a> which I am very proud of. Even better I was able
                    to change the images from the old pixelated pictures to the ones you might see in the Pokémon TV shows.               </div>
            </div>  
            <Footer />
    </div>
    )
}