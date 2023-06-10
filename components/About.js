import React from 'react';
import Image from 'next/image';
import fremont from '../assets/fremont.jpg';

const About = () => {
  return (
    <div className='pt-[4vh] justify-center text-center h-[100vh] text-white w-[100vw]'>
        <div className='pt-5'>
            <h1 id="about" className='font-serif font-bold text-[7em]'>About</h1>
        </div>
        <h2 className='font-serif font-normal pb-5 text-[1.5rem] leading-10'>I'm a high schooler living in Fremont, California</h2>
        <div className='flex w-[45vw] mx-auto text-center'>
            <Image src={fremont} alt="fremont" />
        </div>
        <p className='font-serif text-[1.5rem] font-normal'>Lake Elizabeth</p>
    </div>
  )
}

export default About