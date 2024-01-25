import React,{useState} from "react";
import TableMui from "../../mui/TableMui";
import { Box, Paper, Typography } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import { Button } from "@mui/material";
import AddEducation from "../../Candidate/AddEducation";
import AddExperience from "../../Candidate/AddExperience";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";


export default ({current}) => {
  
    //console.log(current,current.id)
    
    const [showAddExp, setshowAddExp] = useState(false);
    const [showAddEdu, setshowAddEdu] = useState(false);
    const {userType:type}=useSelector(state=>state.auth)

    return (<>
  <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
    <Box className="d-flex align-items-center justify-content-between">
      <Typography className="" variant="h6" sx={{ marginBottom: "10px" }}>
      Work Experience
      </Typography>
      <div>
{type=="AG"&&      <Button className="btn btn_bg" onClick={() => setshowAddExp(true)}>
        Add Work Experience
        <FaPlus className="ps-1" />
      </Button>}
  
      <AddExperience current={current} show={showAddExp} onHide={()=>setshowAddExp(false)}/>
  
      </div>
    </Box>
   
  
        <Box>
          <TableMui
            styleTableTh={{
              color: "#ffffff",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
            th={{
              title: "Title",
              company: "Company",
              description: "Description",
              // expiration_date: "Location",
              start_date: "Start Date",
              end_date: "End Date",
            }}
            td={current.candidate_WorkExperience}
          />
        </Box>
      </Box>
      <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
        <AddEducation current={current} show={showAddEdu} onHide={()=>setshowAddEdu(false)}/>
    <Box className="d-flex align-items-center justify-content-between">
      <Typography className="" variant="h6" sx={{ marginBottom: "10px" }}>
     Education History
      </Typography>
      <div>
{type=="AG"&&<Button className="btn btn_bg" onClick={() => setshowAddEdu(true)}>
        Add Education History
        <FaPlus className="ps-1" />
      </Button>}
  
      {/* <AddExperience show={showAddExp} onHide={()=>setshowAddExp(false)}/> */}
  
      </div>
    </Box>
   
  
        <Box>
          <TableMui
            styleTableTh={{
              color: "#ffffff",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
            th={{
              degree: "Degree",
              institution: "Institution",
              start_date: "Start Date",
              end_date: "End Date",
              country:"Country",
              state:"State",
              city:"city",
              has_graduated:"Graduated",
              graduation_year:'Graduation Year',
              gpa:"GPA",
              majors:"Majors",
              minors:"Minors",
              comments:"Comments",
              screening:"Screening"
            }}
            td={current.candidate_EducationHistory}
            customFields={[
              {name:"has_graduated",data:(value)=>(
                value?"Yes":"No"
              )},
              {name:"minors",data:(value)=>(
                value?"Yes":"No"
              )},
              {name:"screening",data:(value)=>(
                value?"Yes":"No"
              )},
            ]}
          />
        </Box>
      </Box>
      </>
    );
  };