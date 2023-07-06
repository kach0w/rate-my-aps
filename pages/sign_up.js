import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar'

import { useAuth } from '../context/AuthUserContext';

import {Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  //Optional error handling
  const [error, setError] = useState(null);

  const { createUserWithEmailAndPassword } = useAuth();

  const onSubmit = event => {
    setError(null)
    if(passwordOne === passwordTwo)
      createUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        console.log("Success. The user is created in firebase")
        router.push("/");
      })
      .catch(error => {
        setError(error.message)
      });
    else
      setError("Password do not match")
    event.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <Container className="text-center bg-[#657786] rounded-lg p-4 w-[30rem] mx-auto">
      <Row>
          <Col>
            <h2 className='text-[white]'>Sign Up</h2>
          </Col>
        </Row>
      <Row>
        <Col>
          <Form style={{maxWidth: '400px', margin: 'auto'}} onSubmit={onSubmit}>
          { error && <Alert color="danger">{error}</Alert>}
            <FormGroup row>
              {/* <Label for="signUpEmail" sm={4}>Email</Label> */}
              <Col sm={8}>
                <Input
                  className='rounded-md p-2 text-[black]'
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                  id="signUpEmail"
                  placeholder="Email" />
              </Col>
            </FormGroup>
            <FormGroup row className='pt-3'>
              {/* <Label for="signUpPassword" sm={4}>Password</Label> */}
              <Col sm={8}>
                <Input
                  className='rounded-md p-2 text-[black]'
                  type="password"
                  name="passwordOne"
                  value={passwordOne}
                  onChange={(event) => setPasswordOne(event.target.value)}
                  id="signUpPassword"
                  placeholder="Password" />
              </Col>
            </FormGroup>
            <FormGroup row className='pt-3'>
              <Label className="text-white" for="signUpPassword2" sm={4}>Confirm Password</Label>
              <Col sm={8}>
                <Input
                  className='rounded-md p-2 text-[black]'
                  type="password"
                  name="password"
                  value={passwordTwo}
                  onChange={(event) => setPasswordTwo(event.target.value)}
                  id="signUpPassword2"
                  placeholder="Password" />
              </Col>
            </FormGroup>
            <FormGroup row className='pt-5'>
             <Col>
               <Button className='bg-[#3b82f6] py-2 px-8 rounded-lg hover:shadow-lg hover:text-slate-200  '>Sign Up</Button>
             </Col>
           </FormGroup>
           <FormGroup row className='pt-[5rem] text-slate-700'>
              <Col>
              Have an account already? <a className="hover:underline text-[white]" href="/login">Login In</a>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
    
  )
}

export default SignUp;