import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO ,LOGOUTBTN, supportedLanguage} from '../utils/constant ';
import { toggleGPTSearchView } from '../utils/GPTSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const dispatch = useDispatch()
  const navigate =useNavigate()
  const user = useSelector(store=>store.user)
const showGPTSearch = useSelector((store)=>store.gpt.showGPTSearch)
 
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


const handleGPTSearchClick =()=>{
    dispatch (toggleGPTSearchView())
}

const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value))
}

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={ LOGO } 
      alt="logo"/>

    <div className="flex p-2">
      {showGPTSearch && (
        <select className='p-2 m-2 bg-gray-900 text-white opacity-50' onChange={handleLanguageChange}>
        {supportedLanguage.map((lang) =>( <option key={lang.identifier} value={lang.identifier} >{lang.name}
        </option>
       ))}
       </select>
      )}
      <button className=' px-4 py-2 mx-4 my-2 bg-purple-800 text-white rounded-2xl'onClick={handleGPTSearchClick}>{showGPTSearch? "HomePage" : "GPT Search"}</button>
      <img className="w-10 h-10 m-3  paddincontent-center " alt="userIcon"
       src={ LOGOUTBTN }/>

       <button onClick={handleSignOut} className="font-bold text-white"> ( Sign Out )</button>

    </div>
    </div>
  )
}

export default Header
