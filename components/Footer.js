import React from 'react'

const Footer = () => {
  return (
    <div className='sm:mt-[8rem] pb-[2rem] w-[12rem] sm:w-[25rem] mx-auto bg-[#f3f3f3] text-slate-500 text-sm font-normal'>
        <div class="float-left">
            <p>California</p>
        </div>
        <div class="float-right">
            <a className='text-[#3b82f6]' href="mailto:ratemyaps@gmail.com"><i class="fi fi-rr-envelope"></i>  </a>
            <a className='text-[#3b82f6]' href="https://github.com/Rate-My_Aps"><i class="fi fi-brands-github"></i></a>
        </div>
    </div>
  )
}

export default Footer