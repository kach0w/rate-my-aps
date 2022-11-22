import React from 'react'

const Blog = () => {
  return (
    <div className='pt-[4vh] justify-center text-center h-[100vh] w-[100vw]'>
        <div className='pt-5'>
            <h1 id="about" className='font-serif font-bold text-[7em] text-[#15171a]'>Blog</h1>
        </div>
        <div className='mx-auto w-[50vw] h-[50vh] rounded-lg border-5 border-black p-5 bg-white drop-shadow-lg font-serif font-normal text-[2rem]'>
            <h2 className='font-serif font-bold'>Statistics</h2>
            <h2 className='font-serif font-normal text-[1rem]'>Sep 4, 2022</h2>
            <div className='pb-[2vh] pt-[2vh]'>
                Sorry, I haven't posted here in a while. I was still working on more Github projects over the summer but I forgot to update what I've done here. Anyways, school started and in my stats class because we were only going to start using calculators next week I wanted to make something to graph and display data... 
            </div>
            <a className='bg-[#3b82f6] rounded-lg text-white mt-[2vh] hover:bg-[#0a5adb] p-3' href="/blog/statistics">Read more</a>
        </div>
        <div className='text-[2rem] mt-4 hover:text-slate-500'>
            <a href="/blog"><u>More Blog Posts</u></a>
        </div>
    </div>
  )
}

export default Blog