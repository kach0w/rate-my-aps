import React from 'react'

const Blog = () => {
  return (
    <div className='pt-[4vh] justify-center text-center w-[100vw]'>
        <div className='pt-5'>
            <h1 id="about" className='font-serif font-bold text-[7em] text-white'>Blog</h1>
        </div>
        <div className='mx-auto max-w-[50vw] rounded-lg p-10 bg-white drop-shadow-xl  font-serif font-normal text-[2rem]'>
            <h2 className='font-serif text-[3rem] font-bold'>Statistics</h2>
            <h2 className='font-serif font-bold text-[1rem]'>Sep 4, 2022</h2>
            <div className='pb-5 pt-5'>
                Sorry, I haven't posted here in a while. I was still working on more Github projects over the summer but I forgot to update what I've done here. Anyways, school started and in my stats class because we were only going to start using calculators next week I wanted to make something to graph and display data... 
            </div>
            <a className='bg-[#3b82f6] rounded-lg text-white mt-[2vh] hover:bg-[#0a5adb] p-3' href="/blog/statistics">Read more</a>
        </div>
        <div className='text-[2rem] text-white mt-4 mb-[25vh] hover:text-slate-500'>
            <a href="/blog"><u>More Blog Posts</u></a>
        </div>
    </div>
  )
}

export default Blog