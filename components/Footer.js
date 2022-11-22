import React from 'react'

const Footer = () => {
  return (
    <div className='h-[16vh] bg-[#3b82f6] content-center justify-center align-middle text-white text-3xl font-bold'>
        <div class="float-left ml-[15vw] mt-[5vh] align-middle hover:text-slate-300">
            <p>Fremont, California</p>
        </div>
        <div class="float-right mr-[15vw] mt-[5vh]  hover:text-slate-300">
            <a className='hover:text-slate-300' href="https://github.com/kach0w"><i class="fab fa-github"></i> GitHub · </a>
            <a className=' hover:text-slate-300' href="mailto:kachow@duck.com"><i class="fa-solid fa-envelope"></i> Email</a>
        </div>
    </div>
  )
}

export default Footer