import React from 'react'
import Navbar from '../components/Navbar'
import Styles from '../styles/About.module.css'
import Footer from '../components/Footer'
import woman from '../assets/index/women-taking-test.png'
import painter from '../assets/index/painter.png'
import studyer from '../assets/index/studyer.png'
import Head from 'next/head'

import Image from 'next/image'

const about = () => {
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
        <div className='mt-10 mx-auto'>
            <div className='w-[70rem] mx-auto mb-[2rem]'>
                <h1 className='text-[#3b82f6]'>Information about AP courses provided to everyone.</h1>
                <h3 className='text-[#222] text-[20px] w-[44rem] mx-auto'>Rate My AP’s is a project made by Koushik Chandolu, Prajwal Dacharla, Anil Sarvabatla, Shikhar Sisodia, Karthik Sabhanayakam, Sheil Mody, and Aadi Patwardhan. We are current high schoolers from Dublin High, Dougherty Valley, and BASIS Independent Silicon Valley. </h3>
            </div>
            <div className='w-[65rem] mx-auto pb-[5rem]'>
                <div className='inline-block align-middle w-[30vw]'>
                    <h2 className='text-[#3b82f6] w-[30rem] mx-auto'>What do we believe in?</h2>
                    <h3 className='text-[#222] text-[20px] w-[30rem] mx-auto'>Many students struggle with course selection. Course selection is a very important tool because it knows where the students stand and also which major they will follow in college. Many students pick classes because of pressure from parents and friends. This results in multiple struggles in the class because of the course workload and students not being passionate about the subject.  </h3>
                </div>
                <div className='inline-block align-middle w-[20rem] pl-[2rem] pr-[5rem]'>
                    <Image width={500} height={500} src={woman} unoptimized></Image>
                </div>
            </div>
            <div className='w-[85rem] mx-auto pb-[5rem]'>
                <div className='inline-block align-middle w-[30vw]'>
                    <h2 className='text-[#3b82f6] w-[30rem] mx-auto'>So what do we do?</h2>
                    <h3 className='text-[#222] text-[20px] w-[30rem] mx-auto'>Students need guidance in picking out their classes with this project, which is why we decided to make Rate My AP’s. The project consists of multiple variables such as listing out every single AP class and give prior insight about the class ahead of time before a student takes this. We will be working with multiple current and graduate high schoolers and have them review their experience in the class. They will be speaking on behalf of the workload in the class, majors that follow taking the class, and important units to have high success in the class. They will also talk about their experience in the AP exam as well.           <br></br><br></br> We will provide additional support to the students such as Exam Preps, Notes, and supplies for the course. To wrap this up, the purpose of this project is to aid students on deciding and choosing AP classes prior to taking the coruse. We strive to provide the best guidance for our users and inform them on the best classes to take based on their classes.</h3>
                </div>
                <div className='inline-block align-middle w-[30rem] pl-[2rem] pr-[5rem]'>
                    <div className=''>
                        <Image width={500} height={500} src={painter} unoptimized></Image>
                    </div>
                    <div className=''>
                        <Image width={500} height={500} src={studyer} unoptimized></Image>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer />
    </div>
  )
}

export default about