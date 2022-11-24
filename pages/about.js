import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from 'next/head';
import Image from 'next/image';
import fremont from '../assets/fremont.jpg';

import {
  faArrowLeft,

} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return ( 
        <div className='text-center'>
            <Head>
                <title>About - kach0w</title>
            </Head> 
            <a href="https://kach0w.com">
                <div className='text-[3rem] hover:text-[#3b82f6] mt-[10vh] '>
                    <FontAwesomeIcon 
                    icon={faArrowLeft} /> 
                </div>
            </a> 
            <div className='justify-center align-middle text-center '>
                <div className='text-[4rem] font-bold'>
                    About
                </div>
                <h2 className='font-serif font-bold text-[1.5rem] leading-10'>I'm a high schooler living in Fremont, California</h2>
        <div className='flex w-[50vw] mx-auto text-center'>
            <Image src={fremont} alt="fremont" />
        </div>
        <p className='font-serif text-[2rem] font-bold'>Lake Elizabeth</p>
            </div>   
        </div>
  )
}
