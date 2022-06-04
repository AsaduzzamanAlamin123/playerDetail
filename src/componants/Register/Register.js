
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
// 
const Register = () => {
    const [user] = useAuthState(auth);


   

    const [userInfo ,setUserInfo] = useState({
        email:'',
        password:'',
        general:'',
        confirmPassword:''
    });

    const [errors , setErrors] = useState({
        emailError:'',
        passwordError:'',
        confirmPasswordError:''
    });

    const handleEmailChange = (event)=>{
        const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/ ;  
        const validEmail = emailRegex.test(event.target.value);
        console.log(validEmail);
        if(validEmail){
            setUserInfo({...userInfo , email:event.target.value})
            setErrors({...errors ,emailError:'' })
        }
        else{
            setErrors({...errors , emailError:'Invalid eMail' })
            setUserInfo({...userInfo , email:''})
        }
    }

    const handlePasswordChange = (event)=>{
        const passordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const validPassword = passordRegex.test(event.target.value);
        if(validPassword){
            setUserInfo({...userInfo , password:event.target.value})
            setErrors({...errors , passwordError:''})
        }
        else{
            setErrors({...errors , passwordError:'password is not valid'});
            setUserInfo({...userInfo , password:''})
        }
    }

    const handleConfirmPasswodChange = event =>{
        if(event.target.value === userInfo.password){
            setUserInfo({...userInfo , confirmPassword:event.target.value})
            setErrors({...errors , confirmPasswordError:''})
        }
        else{
            setErrors({...errors , confirmPasswordError:'password do not match'});
            setUserInfo({...userInfo , confirmPassword:''})
        }
    }

    const handleSubmitForm = (event)=>{
        event.preventDefault();
    }
    const [
        createUserWithEmailAndPassword,
        EmailUser,
        Emailloading,
        Emailerror,
      ] = useCreateUserWithEmailAndPassword(auth);


      
     const navigate = useNavigate();
     const location = useLocation();
     const from = location.state?.from?.pathname || '/';

      useEffect(()=>{
        if(Emailerror){
            toast(Emailerror?.message)
        }

   },[Emailerror])
   useEffect(()=>{
    if(user){
        navigate(from)
    }
  },[user])


      if(Emailloading){
        return <p className='text-center'>Loading....</p>
     }

  

  

    
    
    return (
        <div>
            <h2>register</h2>
            <Form onSubmit={handleSubmitForm} className='w-50 mx-auto'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange}/>
    {/* {errors?.emailError && <p>{errors.emailError}</p>} */}
    {errors?.emailError &&  <p>{errors.emailError}</p>}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
   
    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
    {errors?.passwordError && <p>{errors.passwordError}</p>}
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
   
    <Form.Control type="password" placeholder="confirmPassword" onChange={handleConfirmPasswodChange}/>
    {errors?.confirmPasswordError && <p>{errors.confirmPasswordError}</p>}
  </Form.Group>
 
  <Button onClick={() => createUserWithEmailAndPassword(userInfo.email, userInfo.password)} variant="primary" type="submit">
Register
  </Button>
  
  <ToastContainer></ToastContainer>
</Form>
        </div>
    );
};

export default Register;