import React from 'react'
import Navbar from '../components/Navbar'
import Styles from '../styles/About.module.css'

const about = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='mt-10 w-[50rem] mx-auto'>
          Greetings everybody, Rate My AP’s is a project made by Koushik Chandolu, Prajwal Dacharla, Anil Sarvabatla, Shikhar Sisodia, Karthik Sabhanayakam, and Aadi Patwardhan. We are current high schoolers from Dublin High, Dougherty Valley, and BASIS Independent Silicon Valley. 
          <br></br>
          <br></br>
          We believe that many students struggle with course selection. Course selection is a very important tool because it knows where the students stand and also which major they will follow in college. Many students pick classes because of pressure from parents and friends. This results in multiple struggles in the class because of the course workload and students not being passionate about the subject.
          <br></br> <br></br>We believe that students need guidance in picking out their classes with this project, which is why we decided to make Rate My AP’s. The project consists of multiple variables such as listing out every single AP class and give prior insight about the class ahead of time before a student takes this. We will be working with multiple current and graduate high schoolers and have them review their experience in the class. They will be speaking on behalf of the workload in the class, majors that follow taking the class, and important units to have high success in the class. They will also talk about their experience in the AP exam as well.

          <br></br><br></br> We will provide additional support to the students such as Exam Preps, Notes, and supplies for the course. To wrap this up, the purpose of this project is to aid students on deciding and choosing AP classes prior to taking the coruse. We strive to provide the best guidance for our users and inform them on the best classes to take based on their classes.
      </div>
      
    </div>

  )
}

export default about