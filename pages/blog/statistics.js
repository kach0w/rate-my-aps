import React from 'react'
import Head from 'next/head'

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'

export default function Home() {
    return (
        <div className='text-center bg-[#f3f3f3]'>
            <Head>
                <title>Statistics - kach0w</title>
                <meta name="description" content="kach0w's blog"></meta>
                <link rel="icon" href="/favicon.png"/> 
            </Head>
            <div className='w-[50rem] mx-auto bg-white text-[#222]'>
                <div className='mx-auto mt-[3rem] text-center'>
                    <a className='float-left text-[#3b82f6] hover:underline' href="https://kach0w.com/blog">⮤ Back</a>
                    <br></br>
                    <p className='font-bold group-hover:underline text-2xl text-slate-900'>Statistics with ChartJS</p>
                    <p className=' mt-2 text-md text-slate-400'>September 4th, 2022</p>
                </div>
                
                <p className='text-left'>
                Sorry, I haven't posted here in a while. I was still working on more github projects over the summer but I forgot to 
                update what I've done here. Anyways, school started and in my stats class because we were only going to start using 
                calculators next week I wanted to make something to graph and display data from points that a user inputs. I saw my 
                dad using chart js so I kept it in the back of my mind to use for later. And then when I saw <a href="https://github.com/oliver-ni/rsquared">this project</a>
                and combined with the stats class beginning, I was motivated to create this project. At the time I'm writing this I 
                have not added things like mean, median, mode and standard deviation yet but I am planning on doing that soon. <br />
                <br />
                So here's the app: <a className='text-[#3b82f6] hover:underline' href="https://kach0w-statistics.herokuapp.com/">https://kach0w-statistics.herokuapp.com/</a><br />
                <br />
                Also tomorrow it's labor day so whenever you're reading this, I hope you have a nice day.  
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