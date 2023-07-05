import { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import Image from 'next/image'
import { useAuth } from '../context/AuthUserContext';

const Voting = ({docname}) => {
  const { authUser } = useAuth();

  const [votes, setVotes] = useState({ one: 0, two: 0, three: 0, four: 0, five: 0 });
  
  const bigsum = ((1*votes.one) + (2*votes.two) + (3*votes.three) + (4*votes.four) + (5*votes.five));
  var numvotes = votes.one + votes.two + votes.three + votes.four + votes.five;
  if(numvotes === 0){
    numvotes = 1;
  }
  const average = Math.round((2 * (bigsum / numvotes)))/2;

  const idone = docname + "one";
  const idtwo = docname + "two";
  const idthree = docname + "three";
  const idfour = docname + "four";
  const idfive = docname + "five";

  if(average===1){
    document.getElementById(idone).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idtwo).innerHTML = '<i class="fi fi-rr-star"></i>';
    document.getElementById(idthree).innerHTML = '<i class="fi fi-rr-star"></i>';
    document.getElementById(idfour).innerHTML = '<i class="fi fi-rr-star"></i>';
    document.getElementById(idfive).innerHTML = '<i class="fi fi-rr-star"></i>';

  } else if (average === 1.5) {
    document.getElementById(idone).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idtwo).innerHTML = '<i class="fi fi-rr-star-sharp-half-stroke"></i>';
    document.getElementById(idthree).innerHTML = '<i class="fi fi-rr-star"></i>';
    document.getElementById(idfour).innerHTML = '<i class="fi fi-rr-star"></i>';
    document.getElementById(idfive).innerHTML = '<i class="fi fi-rr-star"></i>';
  } else if (average === 2) {
    document.getElementById(idone).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idtwo).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idthree).innerHTML = '<i class="fi fi-rr-star"></i>';
    document.getElementById(idfour).innerHTML = '<i class="fi fi-rr-star"></i>';
    document.getElementById(idfive).innerHTML = '<i class="fi fi-rr-star"></i>';
  } else if (average === 2.5) {
    document.getElementById(idone).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idtwo).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idthree).innerHTML = '<i class="fi fi-rr-star-sharp-half-stroke"></i>';
    document.getElementById(idfour).innerHTML = '<i class="fi fi-rr-star"></i>';
    document.getElementById(idfive).innerHTML = '<i class="fi fi-rr-star"></i>';
  } else if (average === 3) {
    document.getElementById(idone).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idtwo).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idthree).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idfour).innerHTML = '<i class="fi fi-rr-star"></i>';
    document.getElementById(idfive).innerHTML = '<i class="fi fi-rr-star"></i>';
  } else if (average === 3.5) {
    document.getElementById(idone).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idtwo).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idthree).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idfour).innerHTML = '<i class="fi fi-rr-star-sharp-half-stroke"></i>';
    document.getElementById(idfive).innerHTML = '<i class="fi fi-rr-star"></i>';
  } else if (average === 4) {
    document.getElementById(idone).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idtwo).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idthree).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idfour).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idfive).innerHTML = '<i class="fi fi-rr-star"></i>';
  } else if (average === 4.5) {
    document.getElementById(idone).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idtwo).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idthree).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idfour).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idfive).innerHTML = '<i class="fi fi-rr-star-sharp-half-stroke"></i>';
  } else if (average === 5) {
    document.getElementById(idone).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idtwo).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idthree).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idfour).innerHTML = '<i class="fi fi-sr-star"></i>';
    document.getElementById(idfive).innerHTML = '<i class="fi fi-sr-star"></i>';
  }
  useEffect(() => {
    const fetchVotes = async () => {
      const snapshot = await db.collection('votes').doc(docname).get();
      const data = snapshot.data();
      if (data) {
        setVotes(data);
      }
    };

    fetchVotes();
  }, []);

  const handleVote = async (option) => {
    if(authUser !== null){
      await db.collection('votes').doc(docname).update({
        [option]: votes[option] + 1,
      });
  
      setVotes((prevVotes) => ({
        ...prevVotes,
        [option]: prevVotes[option] + 1,
      }));
    } else {
      alert("Not Logged In!");
    }
    
    

  };

  return (
    <div>
      <ul className='inline-block'>
        <li className='inline-block'><p>{average}/5&nbsp;&nbsp;</p></li>
        <li className='inline-block'>
      <button className="text-yellow-400" id={idone} onClick={() => handleVote('one')}><i class="fi fi-rr-star"></i></button>
      <button className="text-yellow-400" id={idtwo} onClick={() => handleVote('two')}><i class="fi fi-rr-star"></i></button>
      <button className="text-yellow-400" id={idthree} onClick={() => handleVote('three')}><i class="fi fi-rr-star"></i></button>
      <button className="text-yellow-400" id={idfour} onClick={() => handleVote('four')}><i class="fi fi-rr-star"></i></button>
      <button className="text-yellow-400" id={idfive} onClick={() => handleVote('five')}><i class="fi fi-rr-star"></i></button></li>
        <li className='inline-block'>      
      <p>&nbsp;&nbsp;{numvotes} ratings</p></li>

      </ul>
      


    </div>
  );
};

export default Voting;
