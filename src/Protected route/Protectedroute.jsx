import React from 'react'
import { Navigate,Route } from 'react-router-dom'
import Write from '../Create/Write';
import Register from '../Pages/register';

const Protectedroute = ({isAuthenticated,children}) => {

    if(!isAuthenticated){
      return(<Navigate to={"/register"}/>) ;
    }
       
    
    

  if(isAuthenticated){
    return children;
  }  
}

export default Protectedroute