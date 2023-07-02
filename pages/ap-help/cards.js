import React from 'react'
import Navbar from '../../components/Navbar'
import Link from 'next/link';
import logo from '../../assets/favicon.ico'
import Image from 'next/image'
import scss from '../../styles/Home.module.css'
import Footer from '../../components/Footer'
import Head from 'next/head'
import Voting from '../../components/Voting'

const cards = () => {
  return (
    <div className='text-center'>
        <Head>
            <title>Rate My AP's</title>
            <meta name="description" content="Rate My AP's website"></meta>
            <link rel="icon" href="../assets/favicon.ico"/> 
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap" rel="stylesheet"/>
        </Head>
        <Navbar />
        <h1 className='font-bold text-[1.5rem]'>
            Start viewing AP courses, rated and curated by students across the country:
            
        </h1>
        <div className='grid grid-cols-3 grid-rows-2 w-[70rem] mx-auto mt-20'>
            {/*chemistry*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-[#3F2B96] to-[#3F2B96] text-white'>
                    <p className='text-2xl'><i class="fi fi-br-test-tube"></i><br></br>AP Chemistry</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="chemistry" /> 
                    <a href="/subjects/chemistry" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day</b>&nbsp;&nbsp; May 6, 12:00 PM
                    </div>
                </div>
            </div>
            {/*biology*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-[#9ebd13] to-[#008552] text-white'>
                    <p className='text-2xl'><i class="fi fi-br-dna"></i><br></br>AP Biology</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="biology" /> 
                    <a href="/subjects/biology" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day</b>&nbsp;&nbsp; May 16, 12:00 PM
                    </div>
                </div>
            </div>  
            {/*physicsone*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>
                    <p className='text-2xl'><i class="fi fi-br-physics"></i><br></br>AP Physics 1</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="physicsone" /> 
                    <a href="/subjects/physicsone" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day</b>&nbsp;&nbsp; May 17, 8:00 AM
                    </div>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default cards