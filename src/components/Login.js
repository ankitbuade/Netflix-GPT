import React, { useEffect, useState } from "react"
import Header from "./Header"

const Login = () =>{

    const [isSignInForm,setIsSignInForm]= useState(true)

const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)
} 

    return(
    <div>
        <Header/>
     
    <div className="absolute">
       <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg"/>     
    </div>    

    <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-70 rounded-lg text-white">

        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In ": "Sign Up"}
        </h1>

        {!isSignInForm && ( <input type="text" placeholder="Enter Name" className="bg-neutral-600 p-4 my-4 w-full"/>)}

        <input type="text" placeholder="Email Address" className="bg-neutral-600 p-4 my-4 w-full"/>

        <input type="Password" placeholder="Password" className="bg-neutral-600 p-4 my-4 w-full"/>

    <button className="p-4 my-2 w-full cursor-pointer bg-red-700 " >{isSignInForm ? "Sign In":"Sign Up"}</button>

    <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now":"Already a user Sign In"}</p>

    </form>

    </div>
    )
    
    }
    
    export default Login