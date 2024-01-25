import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../api/apiClient";
import { logout } from "../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function AuthValidator() {
  const dispatch=useDispatch()
  const {isLoggedIn}=useSelector(state=>state.auth)

  useEffect(() => {
    if(isLoggedIn)
fetchUserInfo()
  }, []);

 async function fetchUserInfo() {

    const result=await apiClient.get("/UserInfo/")
    //console.log(result);
    if(result?.data?.detail=="Invalid token."){
toast.error("Login Expired Please try again")
      dispatch(logout())
    }else
    if(result?.data?.detail=="User inactive or deleted."){
toast.error("User inactive or deleted.")
      dispatch(logout())
    }
    
  }
}
