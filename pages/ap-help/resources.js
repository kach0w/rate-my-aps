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
      {/* <div className='text-center'>
        <select value={selectedOption} onChange={handleOptionChange} className='px-6 py-2 bg-[white] rounded-md border-2'>
          <option value="chemistry">Chemistry</option>
          <option value="biology">Biology</option>
          <option value="physicstwo">Physics 2</option>
        </select>
      </div> */}
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