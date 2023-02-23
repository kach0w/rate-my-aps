import React from 'react'
import Head from 'next/head'
import Footer from '../../components/Footer';

export default function Home() {
    return (
        <div className='text-center bg-[#f3f3f3]'>
            <Head>
                <title>Express JS - kach0w</title>
                <meta name="description" content="kach0w's blog"></meta>
                <link rel="icon" href="/favicon.png"/> 
            </Head>

            <div className='w-[50rem] mx-auto bg-white text-[#222]'>
                <div className='mx-auto mt-[3rem] text-center'>
                    <a className='float-left text-[#3b82f6] hover:underline' href="https://kach0w.com/blog">Back</a>
                    <br></br>
                    <p className='font-bold group-hover:underline text-2xl text-slate-900'>Express JS</p>
                    <p className=' mt-2 text-md text-slate-400'>February 22, 2023</p>
                </div>
                
                <p className='text-left'>
                <br></br>
                    It's been exactly one month since my last blog post and I have finally decided to get back to updating it.
                    Just this week, I finally decided to get back to something else I always wanted to do but for some reason kept
                    putting off. That things is back-end programming. I have been comfortable with front-end programming for a few months 
                    now, but back-end, as I have always known is where the real stuff lies. The nitty-gritty things the user never sees 
                    are just as imporant as the UI, maybe even more so. So this week being Ski Break (I know.), and with some free time
                    I started watching tutorials and slowly and steadily have starting picking up the basics of Express JS. 
                    <br></br>
                    <br></br>
                    Express is essentially a NodeJs framework for back-end programming. Back-end is what the user never sees or directly 
                    interacts with, but it is the core of websites and the web. I had always wanted to build apps like logins, things with 
                    databases but I had never gotten around to it. I had been stuck where I was, and I was slightly scared of venturing into 
                    something new, where what I knew had grew comfortable to me.
                    <br></br>
                    <br></br>
                    But now that I have starting playing around with Back-end programming, I can see new potential in the things I can build.
                    <br></br>    
                    <br></br>
                    I can't wait to see what I can build as I try to become a full-stack developer.
            
                    <br></br>
                    <br></br>
                    <p className='text-right'>
                        Till next time,
                        <br></br>
                        kach0w  
                    </p>
                </p>
            </div>



            
            {/* <Footer /> */}
        </div>
    )
}
// export default function Home() {
//     return (
//         <div className='text-center bg-[#141414]'>
//             <Head>
//                 <title>OpenAI - kach0w</title>
//                 <meta name="description" content="kach0w's blog"></meta>
//                 <link rel="icon" href="/favicon.png"/> 
//             </Head>
//             <div className='mx-auto mt-[5vh] mb-[10vh] max-w-[50vw] rounded-lg p-5 bg-white drop-shadow-xl  font-serif font-normal text-[2rem]'>
//                     <h2 className='font-serif text-[3rem] font-bold'>OpenAI</h2>
//                     <h2 className='font-serif font-bold text-[1rem]'>January 22, 2023</h2>
//                     <div className='pb-5 pt-5'>
                    
//             </div>  
//             <Footer />
//         </div>
//     )
// }
