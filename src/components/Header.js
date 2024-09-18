import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO ,LOGOUTBTN} from '../utils/constant ';


const Header = () => {
  const dispatch = useDispatch()
  const navigate =useNavigate()
  const user = useSelector(store=>store.user)
   const handleSignOut =()=>{
    signOut(auth)
    .then(() => {
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      
      navigate("/error")
    });
   
    
   }

   useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        dispatch
        (addUser
          ({
            uid:uid,  
            email:email,displayName:displayName
          }))

          navigate("/browse")
        
      } else {
        // User is signed out
      
        dispatch(removeUser())
        navigate("/")
        
      }
    });
    
    // unsubscribe when component unmount
    return ()=> unsubscribe()
  },[])
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={ LOGO } 
      alt="logo"/>

    <div className="flex">
      <img className="w-10 h-10 m-3  paddincontent-center " alt="userIcon"
       src={ LOGOUTBTN }/>

       <button onClick={handleSignOut} className="font-bold text-white"> ( Sign Out )</button>

    </div>

    </div>
  )
}

export default Header
