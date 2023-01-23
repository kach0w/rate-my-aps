import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import javascript from '../../assets/JavascriptSS.png';

export default function Home() {
    return (
        <div className='text-center bg-[#141414]'>
            <Head>
                <title>Javascript - kach0w</title>
                <meta name="description" content="kach0w's blog"></meta>
                <link rel="icon" href="/favicon.png"/> 
            </Head>
            <Navbar />
            <div className='mx-auto mt-[5vh] mb-[10vh] max-w-[50vw] rounded-lg p-5 bg-white drop-shadow-xl  font-serif font-normal text-[2rem]'>
                    <h2 className='font-serif text-[3rem] font-bold'>Javascript</h2>
                    <h2 className='font-serif font-bold text-[1rem]'>April 16, 2022</h2>
                    <div className='pb-5 pt-5'>
                    Recently, I have been getting interested in the programming language, javascript. In fact, it is the reason that I am currently making this website. 
                    I went down this rabbithole because of my interest in making a Discord bot. The bot's purpose was to have fun with some friends by using the bot to 
                    secretly dm non-adminstrators in my server from a secret text channel. Later, I was interested in trolling some friends with a java script program 
                    that would get the user's public ip address. I would then make an alt-discord account and act like a hacker. The way that the program worked was if 
                    the person clicked on a link I send them, the program would print their public ip address into the console. To try to disguise the link, I will next 
                    be making a brand new website with ngrok so that I can host java script on it for free and no one will be able to see the program code behind it. 
                    Because with the first program, the code was hosted on Repl.com so people would take advantage of its open-sourcness and just look at the code 
                    and see everything about it. Here is an example of what they would see if they looked for the user (which was mentioned in the orignal link because of Repl being bad):         </div>

                    <Image src={javascript} />
            </div>  
            <Footer />
        </div>
    )
}