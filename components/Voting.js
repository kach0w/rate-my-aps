import { useEffect, useState } from 'react';
import { auth, db } from '../lib/firebase';
import Image from 'next/image'
import { useAuth } from '../context/AuthUserContext';

const Voting = ({docname}) => {
  const { authUser } = useAuth();

  const [votes, setVotes] = useState({ one: 0, two: 0, three: 0, four: 0, five: 0, name: ""});
  
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
  
  // var theirVote = "";

  const handleVote = async (option) => {
    console.log(authUser?.email)
    if(authUser !== null){
      var docRef = db.collection("votes").doc(docname).collection('users').doc(authUser?.email);
      docRef.get().then((doc) => {
        if(!doc.exists){
          db.collection('votes').doc(docname).update({
            [option]: votes[option] + 1,
          });
          db.collection("votes").doc(docname).collection('users').doc(authUser?.email).set({
            one: 1,
          })
          setVotes((prevVotes) => ({
            ...prevVotes,
            [option]: prevVotes[option] + 1,
          }));
          // theirVote = option;
        } else {
          alert("You Have Already Voted!");
        }
      })
      
    } else {
      alert("Not Logged In!");
    }
  };

  // const addToDB = async () => {
  //   db.collection("votes").doc(docname).collection('posts').doc('goooogooo').set({
  //     content: "test post",
  //     author: "Karthik",
  //     createdAt: new Date().toISOString(),
  //   })
  // }

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
      <li className='inline-block'><p>&nbsp;&nbsp;{numvotes} ratings</p></li>
      {/* <button className='hidden pl-3' onClick={() => edit()}><i class="fi fi-rr-pencil"></i></button> */}
      </ul>
      {/* <button className="text-yellow-400" onClick={() => addToDB()}>Add to db</button> */}



    </div>
  );
};

export default Voting;
