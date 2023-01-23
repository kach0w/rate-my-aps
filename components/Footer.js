import React from 'react'

const Footer = () => {
  return (
    <div className='mt-[9vh] bg-[#f3f3f3] text-slate-500 text-sm font-normal'>
        <div class="float-left ml-[40vw] mt-[5vh] align-middle">
            <p>Fremont, California</p>
        </div>
        <div class="float-right mr-[40vw] mt-[5vh]">
            <a className='text-[#3b82f6] hover:underline' href="https://github.com/kach0w">GitHub </a>·
            {/* <a className='hover:text-slate-300' href="https://github.com/kach0w"><i class="fab fa-github"></i> GitHub</a> ·  */}
            <a className=' text-[#3b82f6] hover:underline' href="mailto:kachow@duck.com"> Email</a>
        </div>
    </div>
  )
}

export default Footer