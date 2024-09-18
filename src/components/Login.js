import React, { useEffect, useState ,useRef} from "react"
import Header from "./Header"
import { CheckValidData } from "../utils/validate"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () =>{

const [isSignInForm,setIsSignInForm]= useState(null)

const [errorMessage,setErrorMessage]=useState(null)

const dispatch =useDispatch()

const name= useRef(null)
const email =useRef(null);
const password =useRef(null);


const HandleButtonClick =()=>{
    // validate the form data
    // CheckValidData(email,password)
    console.log(email.current.value)
    console.log(password.current.value)

    const message = CheckValidData(email.current.value,password.current.value)

    setErrorMessage(message)

    if (message ) return;
        // sign In /sign Up
    
    if (!isSignInForm)    {
        // signUp Logic
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        const {uid,email,displayName} = auth.currentUser;
        dispatch
        (addUser
          ({
            uid:uid,  
            email:email,displayName:displayName
          }))
        
      }).catch((error) => {
        setErrorMessage(error.message)
      });
    console.log(user)
  

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
    // ..
  });
    }

    else {
        // Sign In Logic
        signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage) 
  });

    }
    

}
const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)  
} 

    return(
    <div>
        <Header/>
     
    <div className="absolute">
       <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg"/>     
    </div>    

    <form onClick={(e)=>e.preventDefault()
    } className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-70 rounded-lg text-white">

        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In ": "Sign Up"}
        </h1>

        {!isSignInForm && ( <input type="text" placeholder="Enter Name" className="bg-neutral-600 p-4 my-4 w-full"/>)}

        <input type="text" 
        ref={email}
        placeholder="Email Address" className="bg-neutral-600 p-4 my-4 w-full"/>

        <input 
        ref={password}
        type="Password" 
        placeholder="Password" className="bg-neutral-600 p-4 my-4 w-full"/>
    
    <p className="text-red-500 font-bold text-lg">
        {errorMessage}</p>

    <button className="p-4 my-2 w-full cursor-pointer bg-red-700 "onClick={HandleButtonClick} >
    

    {isSignInForm ? "Sign In":"Sign Up"}</button>

    <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now":"Already a user Sign In"}</p>

    </form>

    </div>
    )
    
    }
    
    export default Login