import React, {useState} from 'react'
import Resource from '../../components/Resource'
import Navbar from '../../components/Navbar'
import {useEffect} from 'react'
import { useRouter } from 'next/router';

const resource = ({docname}) => {
  const router = useRouter();
  const { query } = router;
  const defaultSelectedOption = query.selectedOption || 'chemistry';
  const [selectedOption, setSelectedOption] = useState(defaultSelectedOption);  

  // useEffect(() => {
  //   // if(docname === undefined){
  //   //   docname = "chemistry"
  //   // }
  //   setValue("chemistry")
  // }, [])
  
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
      // docname = value;
  }
  useEffect(() => {
    setSelectedOption(defaultSelectedOption);
  }, [query.selectedOption]);
    
  return (
    <div>
      <Navbar />
      <div className='text-center'>
        <select value={selectedOption} onChange={handleOptionChange} className='px-6 py-2 bg-[white] rounded-md border-2'>
          <option value="chemistry">Chemistry</option>
          <option value="biology">Biology</option>
          <option value="environmentalscience">Environmental Science</option>
          <option value="physicsone">Physics 1</option>
          <option value="physicstwo">Physics 2</option>
          <option value="physicscmechanics">Physics C Mechanics</option>
          <option value="physicsceandm">Physics C E&M</option>
          <option value="computersciencea">Computer Science A</option>
          <option value="computersciencep">Computer Science P</option>
          <option value="calculusab">Calculus AB</option>
          <option value="calculusbc">Calculus BC</option>
          <option value="statistics">Statistics</option>
          <option value="ushistory">US History</option>
          <option value="worldhistory">World History</option>
          <option value="eurohistory">European History</option>
          <option value="usgovt">US Government</option>
          <option value="humangeo">Human Geography</option>
          <option value="arthistory">Art History</option>
          <option value="musictheory">Music Theory</option>
          <option value="seminar">Seminar</option>
          <option value="psychology">Psychology</option>
          <option value="literature">Literature</option>
          <option value="lang">Language</option>
          <option value="microeconomics">Microeconomics</option>
          <option value="macroeconomics">Macroeconomics</option>


        </select>
      </div>
      <Resource key={selectedOption} docname={selectedOption}></Resource>


    </div>
  )
}
// const RenderSelectedOption = ({ selectedOption }) => {
//   return (
//     <Resource docname={selectedOption}></Resource>
//     <div>
//       <h2>Selected Option:</h2>
//       <p>{selectedOption}</p>
//     </div>
//   );
// };

export default resource