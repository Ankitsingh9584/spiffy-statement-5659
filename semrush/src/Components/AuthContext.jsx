import React from "react";
import {useState} from "react";


export const AuthContext=React.createContext();

const AuthContextProvider = ({children}) => {
  const [isAuth,updateAuth]=useState(false);

  return <>
  <AuthContext.Provider value={{isAuth,updateAuth}}>
    {children}
  </AuthContext.Provider>
  
  </>;
};

export default AuthContextProvider;
