import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='justify-center content-center text-center m-x-auto'>
        <div className='z-0 flex text-[1.5rem] text-white pt-5 space-x-20 h-15 text-center justify-center content-center align-middle z-3 font-serif'> 
            <a className = "hover:text-slate-300" href="https://kach0w.com">Home</a>
            <a className = "hover:text-slate-300" href="#about">About</a>
            <a className = "hover:text-slate-300" href="#projects">Projects</a> 
            <a className = "hover:text-slate-300" href="#blog">Blog</a>

        </div>
    </div>
  )
}

export default Navbar