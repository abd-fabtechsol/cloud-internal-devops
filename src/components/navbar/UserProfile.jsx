import { useEffect, useState } from "react";
import apiClient, { mediaURL } from "../../api/apiClient";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function UserProfile(){
    const [file, setFile] = useState(require("../../assets/profile.png"));
    const [data, setData] = useState();
  const dispatch=useDispatch()
    const handleChange = async(e) => {
        // alert("helijlo")
      // //console.log("first")
     
      const formdata=new FormData()
      formdata.append("logo",e.target.files[0])
      const result= await apiClient.patch(`/user/${data.id}/
      `,formdata)
      if(!result.ok) return
      fetchData()
      window.location.reload();
      
    };
    useEffect(()=>{
      fetchData()
    },[])
    useEffect(()=>{
     

        fetchData()
       
     
    },[])
  
   async function fetchData(){
      const result= await apiClient.get("/UserInfo/")
      if(!result.ok) return 
      //console.log(result);
      setData(result.data)
    }
    return (<>
      <div className=" profile-img">
          <div className=" p-2 d-flex justify-content-center">
            <div className="" style={{ width: "4rem" }}>
              <input hidden id="upload-img" type="file" onChange={handleChange} />
              {/* <img className="rounded-circle" width="100%" src={data?.logo||file} alt="img" /> */}
              <Avatar alt="Remy Sharp" src={data?.logo||file}  sx={{ width: 100, height: 100 }} />
            </div>
          </div>
          <div className="cam-img">
            <label htmlFor="upload-img">
              <img src={require("../../assets/cam.png")} alt="" />
            </label>
          </div>
        </div>
  
        <p className="mb-2 text-center myIconClass "  style={{color:"#ffffff"}}>Johan Week</p>
        </>
      
    )
  }