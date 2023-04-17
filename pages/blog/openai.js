import React from 'react'
import Head from 'next/head'
import Footer from '../../components/Footer';

export default function Home() {
    return (
        <div className='text-center bg-[#f3f3f3]'>
            <Head>
                <title>OpenAI - kach0w</title>
                <meta name="description" content="kach0w's blog"></meta>
                <link rel="icon" href="/favicon.png"/> 
            </Head>

            <div className='w-[50rem] mx-auto bg-white text-[#222]'>
                <div className='mx-auto mt-[3rem] text-center'>
                    <a className='float-left text-[#3b82f6] hover:underline' href="https://kach0w.com/blog">⮤ Back</a>
                    <br></br>
                    <p className='font-bold group-hover:underline text-2xl text-slate-900'>OpenAI</p>
                    <p className=' mt-2 text-md text-slate-400'>January 22, 2023</p>
                </div>
                
                <p className='text-left'>
                    <br></br>
                    Currently, it seems like there is always some news or controversy behind OpenAI's ChatGPT, an
                    AI bot with extremely advanced capabilities. Released in November 2022, overnight it has
                    become a household name. As an increasing number of people start to use it, and companies like
                    Google declaring "code red" over the possible disruption it maybe bring to their search
                    engine, millions view ChatGPT as the future. The possible disruption that the technology may
                    bring is unknown, but it does hold lots of promise, and only the future knows what it may change.
                    <br></br>
                    <br></br>
                    OpenAI used supervised learning and reinforcment learning to create ChatGPT. I already have a 
                    little knowledge about these machine learning aspects from my Machine Learning Club. As other
                    companies enter the market for AI bots, it seems guaranteed that ChatGPT is just the first
                    stepping stone in this technology, which has a long way to go. However, even as this technology
                    seems to just be getting kicked off, there is still a lot of controversy behind it.
                    <br></br>
                    <br></br>
                    The major negative aspect of ChatGPT to many is the possibility of it recreating a persons work.
                    A wide range of academia and technology forums like Stack Overflow have banned the use of 
                    ChatGPT as it just a plagarism of an actual human's ideas. Essentially, while trying to mimic
                    human thought, students have been submitting work that is not their own, people have been
                    answering questions from a less-than-reliable source. Almost the exact same contreversey has
                    been going on with another one of OpenAI's products, Dalle-2. I have also been blown away by
                    the potential going on with AI generated art, and despite its many drawbacks of not being "real"
                    to many people, including me, I have still made a <a className='text-[#3b82f6] hover:underline' href="https://dalle-api.vercel.app">project</a> with it.
                    <br></br>
                    <br></br>
                    Overall, it seems as this technology progresses, major disruption will occur in the tech world.
                    But as the future seems to be coming closer and closer to our doorstep, and as AI grows more 
                    advanced, more technologies like ChatGPT and Dalle will grow and disrupt. We will eventually 
                    start to question how to create a line between human generated work and AI generated work 
                    as it starts to impact our everyday lives and the two become almost indistinguishable. 
                    <br></br>
                    <br></br>
                    <p className='text-right'>
                        Till next time,
                        <br></br>
                        kach0w  
                    </p>
                    


                    Sources:
                    <ul>
                        <li>
                            <a className='text-[#3b82f6] hover:underline' href="https://www.assemblyai.com/blog/how-chatgpt-actually-works/">Assembly AI</a> 
                        </li>
                        <li>
                            <a className='text-[#3b82f6] hover:underline' href="https://en.wikipedia.org/wiki/chatgpt">Wikipedia</a>
                        </li>
                        <li>
                            <a className='text-[#3b82f6] hover:underline' href="https://www.theverge.com/2023/1/5/23540291/chatgpt-ai-writing-tool-banned-writing-academic-icml-paper">The Verge</a>
                        </li>
                        <li>
                            <a className='text-[#3b82f6] hover:underline' href="https://www.theguardian.com/music/2023/jan/17/this-song-sucks-nick-cave-responds-to-chatgpt-song-written-in-style-of-nick-cave">The Guardian</a>
                        </li>
                        <li>
                            <a className='text-[#3b82f6] hover:underline' href="https://increditools.com/chatgpt-statistics/">Increditools</a>
                        </li>
                    </ul>
                    
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
