import React from 'react'
import Head from 'next/head'

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'

export default function Home() {
    return (
        <div className='text-center'>
            <Head>
                <title>Statistics - kach0w</title>
                <meta name="description" content="kach0w's blog"></meta>
                <link rel="icon" href="/favicon.png"/> 
            </Head>
            <Navbar />
            <div className='mx-auto mt-[5vh] mb-[10vh] max-w-[50vw] rounded-lg p-5 bg-white drop-shadow-xl  font-serif font-normal text-[2rem]'>
                    <h2 className='font-serif font-bold'>Statistics</h2>
                    <h2 className='font-serif font-bold text-[1rem]'>Sep 4, 2022</h2>
                    <div className='pb-5 pt-5'>
                    Sorry, I haven't posted here in a while. I was still working on more github projects over the summer but I forgot to 
                update what I've done here. Anyways, school started and in my stats class because we were only going to start using 
                calculators next week I wanted to make something to graph and display data from points that a user inputs. I saw my 
                dad using chart js so I kept it in the back of my mind to use for later. And then when I saw <a href="https://github.com/oliver-ni/rsquared">this project</a>
                and combined with the stats class beginning, I was motivated to create this project. At the time I'm writing this I 
                have not added things like mean, median, mode and standard deviation yet but I am planning on doing that soon. <br />
                <br />
                So here's the app: <a href="https://kach0w-statistics.herokuapp.com/">https://kach0w-statistics.herokuapp.com/</a><br />
                <br />
                Also tomorrow it's labor day so whenever you're reading this, I hope you have a nice day.                    </div>
            </div>  
            <Footer />
    </div>
    )
}