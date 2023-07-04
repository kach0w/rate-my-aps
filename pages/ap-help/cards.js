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
                <div className='p-2 rounded-t-md bg-gradient-to-r from-[#3F2B96] to-[#9bb1eb] text-white'>
                    <p className='text-2xl'><i class="fi fi-br-test-tube"></i><br></br>AP Chemistry<br></br></p> 
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
            {/*apes*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-[#9ebd13] to-[#008552] text-white'>
                    <p className='text-2xl'><i class="fi fi-br-dna"></i><br></br>AP Environmental Science</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="environmentalscience" /> 
                    <a href="/subjects/environmentalscience" className="mx-auto">
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
            {/*physicstwo*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>
                    <p className='text-2xl'><i class="fi fi-ss-physics"></i><br></br>AP Physics 2</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="physicstwo" /> 
                    <a href="/subjects/physicstwo" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day</b>&nbsp;&nbsp; May 17, 12:00 PM
                    </div>
                </div>
            </div>
            {/*physicscmecahnics*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>
                    <p className='text-2xl'><i class="fi fi-ss-physics"></i><br></br>AP Physics C - Mechanics</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="physicscmechanics" /> 
                    <a href="/subjects/physicscmechanics" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day</b>&nbsp;&nbsp; May 14, 12:00 PM
                    </div>
                </div>
            </div>    
            {/*physicsceandm*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>
                    <p className='text-2xl'><i class="fi fi-ss-physics"></i><br></br>AP Physics C - E&M</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="physicsceandm" /> 
                    <a href="/subjects/physicsceandm" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day</b>&nbsp;&nbsp; May 14, 2:00 PM
                    </div>
                </div>
            </div>
            {/*csa*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] text-white'>
                    <p className='text-2xl'><i class="fi fi-rs-laptop"></i><br></br>AP Computer Science A</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="computersciencea" /> 
                    <a href="/subjects/computersciencea" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day</b>&nbsp;&nbsp; May 8, 12:00 PM
                    </div>
                </div>
            </div>
            {/*csp*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] text-white'>
                    <p className='text-2xl'><i class="fi fi-rs-laptop"></i><br></br>AP Computer Science P</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="computersciencep" /> 
                    <a href="/subjects/computersciencep" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day</b>&nbsp;&nbsp; May 15, 12:00 PM
                    </div>
                </div>
            </div>
            {/*ap calc ab*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-[#d53369] to-[#daae51] text-white'>
                    <p className='text-2xl'><i class="fi fi-rr-calculator"></i><br></br>AP Calculus AB</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="calculusab" /> 
                    <a href="/subjects/calculusab" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day:</b>&nbsp;&nbsp; May 13, 8:00 AM
                    </div>
                </div>
            </div>
            {/*ap calc bc*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-[#d53369] to-[#daae51] text-white'>
                    <p className='text-2xl'><i class="fi fi-rr-calculator"></i><br></br>AP Calculus BC</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="calculusbc" /> 
                    <a href="/subjects/]calculusbc" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day:</b>&nbsp;&nbsp; May 13, 8:00 AM
                    </div>
                </div>
            </div>
            {/*ap stats*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-[#d53369] to-[#daae51] text-white'>
                    <p className='text-2xl'><i class="fi fi-rr-calculator"></i><br></br>AP Statistics</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="statistics" /> 
                    <a href="/subjects/statistics" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day:</b>&nbsp;&nbsp; May 7, 12:00 PM
                    </div>
                </div>
            </div>
            {/*ap us History*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-[#fcff9e] to-[#c67700] text-white'>
                    <p className='text-2xl'><i class="fi fi-sr-globe-alt"></i><br></br>AP U.S. History</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="ushistory" /> 
                    <a href="/subjects/ushistory" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day</b>&nbsp;&nbsp; May 10, 8:00 AM
                    </div>
                </div>
            </div>
            {/*ap world History*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-[#fcff9e] to-[#c67700] text-white'>
                    <p className='text-2xl'><i class="fi fi-sr-globe-alt"></i><br></br>AP World History</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="worldhistory" /> 
                    <a href="/subjects/worldhistory" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day</b>&nbsp;&nbsp; May 15, 8:00 AM
                    </div>
                </div>
            </div>
            {/*ap euro History*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-[#fcff9e] to-[#c67700] text-white'>
                    <p className='text-2xl'><i class="fi fi-sr-globe-alt"></i><br></br>AP European History</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="eurohistory" /> 
                    <a href="/subjects/eurohistory" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day</b>&nbsp;&nbsp; May 10, 8:00 AM
                    </div>
                </div>
            </div>
            {/*ap US Government*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-[#fcff9e] to-[#c67700] text-white'>
                    <p className='text-2xl'><i class="fi fi-rr-gavel"></i><br></br>AP Government and Politics</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="usgovt" /> 
                    <a href="/subjects/usgovt" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day</b>&nbsp;&nbsp; May 6, 8:00 AM
                    </div>
                </div>
            </div>
            {/*ap Art History*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-[#efd5ff] to-[#515ada] text-white'>
                    <p className='text-2xl'><i class="fi fi-sr-palette"></i><br></br>AP Art History</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="arthistory" /> 
                    <a href="/subjects/arthistory" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day</b>&nbsp;&nbsp; May 6, 12:00 PM
                    </div>
                </div>
            </div>
            {/*ap Seminar*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-[#4b6cb7] to-[#182848] text-white'>
                    <p className='text-2xl'><i class="fi fi-bs-book-bookmark"></i><br></br>AP Seminar</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="seminar" /> 
                    <a href="/subjects/seminar" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day</b>&nbsp;&nbsp; May 7, 12:00 PM
                    </div>
                </div>
            </div>
            {/*ap psych*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-[#4b6cb7] to-[#182848] text-white'>
                    <p className='text-2xl'><i class="fi fi-bs-book-bookmark"></i><br></br>AP Psychology</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="psychology" /> 
                    <a href="/subjects/psychology" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day</b>&nbsp;&nbsp; May 9, 12:00 PM
                    </div>
                </div>
            </div>
            {/*ap Literature*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-[#4b6cb7] to-[#182848] text-white'>
                    <p className='text-2xl'><i class="fi fi-bs-book-bookmark"></i><br></br>AP Literature</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="literature" /> 
                    <a href="/subjects/literature" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day</b>&nbsp;&nbsp; May 8, 8:00 AM
                    </div>
                </div>
            </div>
            {/*ap Lang*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-[#4b6cb7] to-[#182848] text-white'>
                    <p className='text-2xl'><i class="fi fi-bs-book-bookmark"></i><br></br>AP English Language and Composition</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="lang" /> 
                    <a href="/subjects/lang" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day</b>&nbsp;&nbsp; May 14, 8:00 AM
                    </div>
                </div>
            </div>
            {/*ap micro*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
            <div className='p-2 rounded-t-md bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] text-white'>
                    <p className='text-2xl'><i class="fi fi-rr-chart-line-up"></i><br></br>AP Microeconomics</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="microeconomics" /> 
                    <a href="/subjects/microeconomics" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day</b>&nbsp;&nbsp; May 7, 8:00 AM
                    </div>
                </div>
            </div>
            {/*ap macro*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] text-white'>
                    <p className='text-2xl'><i class="fi fi-rr-chart-line-up"></i><br></br>AP Macroeconomics</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="macroeconomics" /> 
                    <a href="/subjects/macroeconomics" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day</b>&nbsp;&nbsp; May 10, 12:00 AM
                    </div>
                </div>
            </div>
            {/*ap mandarin*/}
            <div class="w-[20rem] mb-5 border-2 rounded-md flex-col text-center content-center">
                <div className='p-2 rounded-t-md bg-gradient-to-r from-[#4b6cb7] to-[#182848] text-white'>
                    <p className='text-2xl'><i class="fi fi-ss-messages"></i><br></br>AP Chinese Language and Culture</p> 
                </div>
                <div className='rounded-md'>
                    <br></br>
                    <Voting docname="mandarin" /> 
                    <a href="/subjects/mandarin" className="mx-auto">
                        <div className='hover:underline text-[#3b82f6]'>
                            Course Resources<i class="fi fi-rr-arrow-small-right"></i> 
                        </div>
                    </a>
                    <div class="p-6">
                    <b><i class="fi fi-rr-calendar-lines"></i>&nbsp;&nbsp;Exam Day</b>&nbsp;&nbsp; May 9, 8:00 AM
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default cards