import React from 'react'

const Navbar = () => {
  return (
    <div className='justify-center content-center text-center m-x-auto'>
        <div className='flex text-[1.5rem] pt-5 space-x-20 h-15 bg-grey text-center justify-center content-center align-middle z-3'> 
            <a href="https://kach0w.com">Home</a>
            <a href="https://kach0w.com/about">About</a>
            <div className=''>
                Projects <i class="fa fa-caret-down"></i>
            </div>
            <a href="https://kach0w.com/blog">Blog</a>

        </div>
    </div>
  )
}

export default Navbar