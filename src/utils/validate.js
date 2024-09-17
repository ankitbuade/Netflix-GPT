import React from 'react'

export const CheckValidData = (email,password) => {
 const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

 const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

 if(!isEmailValid) return "Email is not Vallid"

 if(!isPasswordValid) return "Password is not Vallid"

 return null;


}

