import React from 'react';
import Image from 'next/image';
import rusteze from "../assets/rusteze.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";


const Main = () => {
  return (
    <div className='z-0 justify-center mt-1vh pb-5 w-screen md:pt-[1vh]  h-[screen] md:h-[screen]   overflow-hidden'>
      <div className='h-6/12 px-50 font-bold justify-center text-center'>
        <h1 className='font-serif font-bold text-[7em] text-[#15171a] leading-none'>kach0w</h1>
      </div>
      <div className='flex my-[vh] justify-center text-center'>
        <Image className='w-[30vw]' src={rusteze} alt="img"/>
      </div>
      <div className='flex text-center justify-center'>
        <div className='text-[1.5rem] font-normal font-serif text-[#000000]'>
            Trying to Learn New Things.
        </div>
      </div>
      <div className='flex my-[5vh] justify-center text-center'>
        <a href="https://github.com/kach0w">
          <div className='bg-[#3b82f6] hover:bg-[#0a5adb] w-[9vw] py-5 mr-2 text-[1.5rem] text-[#ffffff] rounded-[8px]'>
            <div className='font-serif font-bold'>GitHub 
            </div>
          </div>
        </a>
        <a href="mailto:kachow@duck.com">
          <div className='bg-[#3b82f6] hover:bg-[#0a5adb] w-[9vw] py-5 ml-2 text-[1.5rem] text-[#ffffff] rounded-[8px]'>
            <div className='font-serif font-bold'>Email</div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Main