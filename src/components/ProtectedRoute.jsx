import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ({ children,type }) {
  const {isLoggedIn} = useSelector((state) => state.auth)
function getUserRoute(){
if(type=="AG")
return "/agencies/login"
else if(type=="HO")
return "/hospitals/login"
else if(type=="AD")
return "/manager/login"
else if(type=="CA")
return "/"
}
  //console.log(isLoggedIn);
  if (!isLoggedIn) {
    // user is not authenticated
    return <Navigate replace to={getUserRoute()} />;
  }
  return children;
};

