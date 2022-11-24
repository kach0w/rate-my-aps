import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='justify-center content-center text-center m-x-auto'>
        <div className='z-0 flex text-[1.5rem] pt-5 space-x-20 h-15 bg-grey text-center justify-center content-center align-middle z-3 font-serif '> 
            <a href="https://kach0w.com">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a> 
            <a href="/blog">Blog</a>

        </div>
    </div>
  )
}

export default Navbar