import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link';
import logo from '../assets/favicon.ico'
import Image from 'next/image'
import scss from '../styles/Home.module.css'
import shickywicky from '../assets/team/shicky.png'
import aadi from '../assets/team/aadi.png'
import karthik from '../assets/team/karthik.png'
import prajwal from '../assets/team/prajwal.png'
import sheil from '../assets/team/sheil.png'
import ariv from '../assets/team/ariv.png'

import Footer from '../components/Footer'
import Head from 'next/head'

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
        <h1 className='font-bold text-[1.5rem]'>
            Meet our team:
            
        </h1>
        <div className='grid grid-cols-3 grid-rows-2 w-[70vw] mx-auto mt-20'>
            <div class="flex-col text-center content-center">
                <a href="#" className="mx-auto">
                    <Image width={100}  height={100} className="w-[15rem] mx-auto"
                        src={shickywicky} unoptimized/>
                </a>
                <div class="text-center mt-6">
                    <h1 class="text-gray-900 text-xl font-bold mb-1">
                    Shikhar Sisodia
                    </h1>
                    <a href="mailto:shikhar35sisodia35@gmail.com"><i class="fi fi-rr-envelope"></i>  </a>
                    <a href="https://github.com/shickywicky7"><i class="fi fi-brands-github"></i></a>
                    <div class="text-gray-700 font-light mb-2 w-[20rem] mx-auto">
                    Hi! My name is Shikhar Sisodia. I am an incoming Junior at Dougherty Valley High School. I am beyond excited to be part of Rate My APs. I am the current Founder, Marketer, and Social Media Manager for this App as I strive for this app to assist high schoolers throughout their journey in high school picking their majors and future classes they take. In my free time, I like to play video games and basketball. I also like to meet new people and develop new friendships. I look forward to this idea to very successful in the near future.
                    </div>
                </div>
            </div>
            <div class="flex-col text-center content-center">
                <a href="#" className="mx-auto">
                    <Image width={100}  height={100} className="w-[15rem] mx-auto"
                        src={aadi} unoptimized/>
                </a>
                <div class="text-center mt-6">
                    <h1 class="text-gray-900 text-xl font-bold mb-1">
                    Aadi Patwardhan
                    </h1>
                    <a href="mailto:aadipatwardhan44@gmail.com"><i class="fi fi-rr-envelope"></i>  </a>
                    <div class="text-gray-700 font-light mb-2 w-[20rem] mx-auto">
                    Hello, my name is Aadi Patwardhan and I am an incoming junior at Dublin High School. I am honored to be a co- founder, a part of the marketing, designing, and social media managing team for this app. As a member of these roles, it is my responsibility to ensure an easy and fun way for our users to navigate the app and strive to draw attention to it. In my free time, I like to swim, play badminton, and videogames, and spend time with my family.
                    </div>
                </div>
            </div>
            <div class="flex-col text-center content-center">
                <a href="#" className="mx-auto">
                    <Image width={100}  height={100} className="w-[15rem] mx-auto"
                        src={karthik} unoptimized/>
                </a>
                <div class="text-center mt-6">
                    <h1 class="text-gray-900 text-xl font-bold mb-1">
                    Karthik Sabhanayakam
                    </h1>
                    <a href="mailto:karsab343@gmail.com"><i class="fi fi-rr-envelope"></i>  </a>
                    <a href="https://github.com/kach0w"><i class="fi fi-brands-github"></i></a>
                    <div class="text-gray-700 font-light mb-2 w-[20rem] mx-auto">
                    Hello, I'm a rising junior at BASIS Independent Silicon Valley. My role in Rate My AP's is the primary web developer. I helped make the website as well as the web application. In this role I hope to help more students learn more about the AP's they intend to take so that they are more informed about information like difficulty or course content. In my free time, I enjoy watching old films and playing basketball.
                    </div>
                </div>
            </div>
            <div class="flex-col text-center content-center">
                <a href="#" className="mx-auto">
                    <Image width={100}  height={100} className="w-[15rem] mx-auto"
                        src={prajwal} unoptimized/>
                </a>
                <div class="text-center mt-6">
                    <h1 class="text-gray-900 text-xl font-bold mb-1">
                    Prajwal Dacharla
                    </h1>
                    <a href="mailto:pdcharla1@gmail.com"><i class="fi fi-rr-envelope"></i>  </a>
                    <a href="https://github.com/pdch123"><i class="fi fi-brands-github"></i></a>
                    <div class="text-gray-700 font-light mb-2 w-[20rem] mx-auto">
                    Hi! I'm Prajwal Dacharla, a 15 year old incoming junior at Dublin High School. I serve as the UI Designer for this application and I am proud to put my creativity and designing skills to work. As this project is meant to aid highschoolers through their process of picking courses for the school year, it is essential our user interface is properly navigable and functional. When I'm not working, I enjoy boxing, playing video games, listening to music, and hanging out with my friends and family.
                    </div>
                </div>
            </div>
            <div class="flex-col text-center content-center">
                <a href="#" className="mx-auto">
                    <Image width={100}  height={100} className="w-[15rem] mx-auto"
                        src="" unoptimized/>
                </a>
                <div class="text-center mt-6">
                    <h1 class="text-gray-900 text-xl font-bold mb-1">
                    Anil Sarvabatla
                    </h1>
                    <a href="mailto:anilgaming2007@gmail.com"><i class="fi fi-rr-envelope"></i>  </a>
                    <a href="https://github.com/Mybobksf"><i class="fi fi-brands-github"></i></a>
                    <div class="text-gray-700 font-light mb-2 w-[20rem] mx-auto">
                    My name is Anil Sarvabatla. I am an incoming junior at Dublin High School, and I am a member of the development team for this app. I am a co-founder of this app. Many high school students don't know what APs to take, and we are trying to fix this problem. I have 6 years of experience in JavaScript and Python and have 2 years of experience in Java and 2 months of experience in C# In my free time, I like to play video games, make websites, and play basketball. 
                    </div>
                </div>
            </div>
            <div class="flex-col text-center content-center">
                <a href="#" className="mx-auto">
                    <Image width={100}  height={100} className="w-[15rem] mx-auto"
                        src={sheil} unoptimized/>
                </a>
                <div class="text-center mt-6">
                    <h1 class="text-gray-900 text-xl font-bold mb-1">
                    Sheil Mody
                    </h1>
                    <a href="mailto:shikhar35sisodia35@gmail.com"><i class="fi fi-rr-envelope"></i>  </a>
                    <div class="text-gray-700 font-light mb-2 w-[20rem] mx-auto">
                    As a rising junior at BASIS Independent Fremont, Sheil Mody, I am very interested in this new project. My goal in this project is to be as useful as possible and would be doing so by working as a web developer alongside Karthik. I hope to make the journey of AP courses simpler and more effective to combat the difficulty of AP courses. In my spare time I enjoy biking and learning new tidbits of information.
                    </div>
                </div>
            </div>
            <div class="flex-col text-center content-center">
                <a href="#" className="mx-auto">
                    <Image width={100}  height={100} className="w-[15rem] mx-auto"
                        src={ariv} unoptimized/>
                </a>
                <div class="text-center mt-6">
                    <h1 class="text-gray-900 text-xl font-bold mb-1">
                    Ariv Sahoo
                    </h1>
                    <a href="mailto:arivsahoo@gmail.com"><i class="fi fi-rr-envelope"></i>  </a>
                    <a href="https://github.com/ArivSahoo"><i class="fi fi-brands-github"></i></a>
                    <div class="text-gray-700 font-light mb-2 w-[20rem] mx-auto">
                    My name is Ariv Sahoo, and I’m a rising junior at Dougherty Valley High School. I am the project manager of this app, and I am glad to put my skills to use. AP courses are a very important part of high school, and this app gives great insight to high schoolers taking AP courses. I have also coded my own app, called Volpass, which is publicly available on iOS and Android platforms. I am a travel team competitor for FBLA, who made nationals, and I enjoy working in an entrepreneurial space.
                    </div>
                </div>
            </div>
        </div>
        <Footer />
      </div>
  )
}

export default about