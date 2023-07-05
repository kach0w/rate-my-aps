/**
* @jest-environment jsdom
*/
import React from 'react';
import Link from 'next/link';
import logo from '../assets/favicon.ico'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script';
import Head from 'next/head'
import Dropdown from './Dropdown.js'
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import { useEffect } from 'react';

const Navbar = () => {
  const { authUser, signOut } = useAuth();

  // function sendToLogin(){
  //   router.push('../login')
  // }

  useEffect(() => {
    if(authUser !== null){
      document.getElementById("signout").style.display = "inline-block";
      document.getElementById("signin").style.display = "none";
      // document.getElementById("signin").innerText = "Sign Out";
    } else {
      document.getElementById("signin").style.display = "inline-block";
      document.getElementById("signout").style.display = "none";
    }
  }, [authUser])
  
  return (
    <div className='text-[#222] bg-[#f3f3f3] text-center font-[Inter] flex space-x-6'>
        <div className='w-[100vw] z-0 text-[1.5rem] text-white pt-5 h-15 align-middle z-3 font-serif'> 
          <a href="../" className='inline-block align-middle float-left pl-5'>
            <div className='w-[20rem] text-[#222] '>
              <Image className='inline-block align-middle w-[5rem] h-[5rem]' src={logo}></Image> 
              <h2 className='inline-block align-middle font-black text-[2rem]'>Rate My AP's</h2>
            </div>
          </a>
          <div className='float-right pr-20'>
            <Dropdown />
            <a className='text-[#222] leading-sm inline-block align-middle font-black pt-[0.36rem] pr-5  hover:text-[#505050]' href="../about">About</a>
            <a className='text-[#222] leading-sm inline-block align-middle font-black pt-[0.36rem] pr-5  hover:text-[#505050]' href="../team">Team</a>
            <button id="signin" className='text-white bg-slate-500 rounded-md p-2 leading-sm inline-block align-middle font-black pt-[0.36rem]  hover:text-slate-300'>        <Link href="../login">Login / Sign Up</Link></button>
            <button id="signout" className='text-white bg-slate-500 rounded-md p-2 leading-sm align-middle font-black pt-[0.36rem] hidden  hover:text-slate-300' onClick={signOut}>Sign Out</button>

          </div>
        </div>
    </div>
  )
}

export default Navbar