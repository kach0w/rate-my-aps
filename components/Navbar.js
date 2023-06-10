import React from 'react';
import Link from 'next/link';
import logo from '../assets/favicon.ico'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script';
import Head from 'next/head'

const Navbar = () => {
  return (
    <div className='text-[#222] bg-[#f3f3f3] text-center font-[Inter] flex space-x-6'>
        <div className='w-[100vw] z-0 text-[1.5rem] text-white pt-5 h-15 align-middle z-3 font-serif'> 
          <a href="../" className='inline-block align-middle float-left pl-5'>
            <div className='w-[20rem] text-[#222] '>
              <Image className='inline-block align-middle w-[5rem] h-[5rem]' src={logo}></Image> 
              <h2 className='inline-block align-middle font-black text-[2rem]'>Rate My AP's</h2>
            </div>
          </a>
          <div className='float-right pr-40'>
            <a className='text-[#222] inline-block align-middle font-black pt-[0.36rem] pr-5' href="../help">AP Help</a>
            <a className='text-[#222] inline-block align-middle font-black pt-[0.36rem] pr-5' href="../team">Team</a>
            <a className='text-[#222] inline-block align-middle font-black pt-[0.36rem] pr-5' href="../about">About</a>
            <a className='text-[#222] inline-block align-middle font-black pt-[0.36rem]' href="../contact">Contact</a>

          </div>
          
        </div>
    </div>
  )
}

export default Navbar