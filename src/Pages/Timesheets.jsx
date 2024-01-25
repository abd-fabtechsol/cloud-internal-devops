
import React, { useEffect, useState } from "react";
import TableMui from "../components/mui/TableMui";
import { FaUserCircle} from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { Box, Button, Drawer,Grid, Paper, Typography } from "@mui/material";
import TabBars from "../components/mui/TabBars";
import { RxCross2 } from "react-icons/rx";
import { BsArrowsFullscreen } from "react-icons/bs";
import { AiFillStar, } from "react-icons/ai";
import Divider from "@mui/material/Divider";
import { useOutletContext } from "react-router-dom";
import getThemeColor from "../modules/getThemeColor";
import apiClient from "../api/apiClient";
import useApi from "../hooks/useApi";
import TimeSheetModal from "../components/TimeSheet/TimeSheetModal";
import { toast } from "react-toastify";
import Paginate from "../components/Paginate";
import { Helmet } from "react-helmet";
import downloadFile from "../modules/downloadFile";
import SearchHome from "../components/mui/SearchBar";
import SideBarCandidate from "../components/sidebar/SideBarCandidate";
import PositionSidebar from "../components/sidebar/PositionSidebar";


export default  ({user}) => {
  const {type}= useOutletContext();
  const [current, setCurrent] = useState();
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const[position,setPosition]=useState(false)
  const[candidate,setCandidate]=useState(false)
  const [search,setSearch]=useState("")
  const [keyword,setKeyword]=useState("")

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchData();
  }, [search]);
  const { request, data, loading } = useApi((route) =>apiClient.get(route));
  const [sortBy,setSortBy]=useState()
  async function fetchData(page = 1) {
    if(page==1&&count)
    setCount(0)
    //console.log("dssdfsfsd");
    const result = await request(`/TimeSheetCsv/?page=${page}&${keyword||"timesheet"}=${search}&ordering=${sortBy}`);
    if (!result.ok) return;
    //console.log(result);
    if (!count||page==1) setCount(result.data.count);
  }
  const handlePageChange = (event, value) => {
    fetchData(value);
  };

  async function handleDelete(id) {
    const result = await apiClient.delete("/TimeSheetCsv/" + id);
    if (!result.ok) return toast.error("Failed to Delete");
    toast.success("Deleted");
    fetchData();
    setCount(0);
  }
   
  useEffect(()=>{
        fetchData()
      },[sortBy])
  const [sheetModal,setSheetModal]=useState(false)

  async function getFileLink(){
    const result=await apiClient.get("/TimeSheetExport/")
    if(result.ok)
    //console.log(result,"fgdgdfgdgdfgdfggdfdfgdfg");
    downloadFile(result.data.FileUrl)
   }
  

  return (
    <div>
       <Helmet>
        <title>
          Timesheets
        </title>
      </Helmet>
    {sheetModal&&  <TimeSheetModal current={current} fetchData={fetchData} show={sheetModal} onHide={()=>setSheetModal(false)}/>}
       {show && <SideModal values={{ current, show, setShow }} />}
       {candidate && <SideBarCandidate values={{ current,show: candidate, setShow:setCandidate }} />}
      {position&&<PositionSidebar values={{current,show:position,setShow:setPosition}}/>}
      <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px", }}>
      <p className="text-white">Timesheets</p>
      <div className=' d-flex justify-content-between flex-column flex-md-row mb-2'>
         <div className='d-flex flex-column align-items-center flex-md-row gap-2'>
            {/* <div class="input-group mb-3">
              <button class="btn btn-outline-secondary" type="button" id="button-addon1"><AiOutlineSearch/></button>
              <input type="search" class="form-control" placeholder="Search by credential name or ID and candidate name or ID" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
            </div> */}
            <div className='d-flex  gap-2'>
        <div class=" mb-3 ">
        <SearchHome
            defaultLabel="Match ID or Candidate Name"
               data={[
                {route:"status",name:"Status"},
               
                
                // {route:"start_date",name:"Effective Date"},
                // {route:"end_date",name:"Expiration Date"},
           ] }
            setSearch={setSearch} setKeyword={setKeyword} keyword={keyword}
            style={{ width: "255px"}}
            />
         </div>
          </div>
          </div>

        <div className='d-flex flex-column flex-md-row gap-2'>
          <div className="d-flex gap-2">
         {type=="HO"&& <button onClick={()=>setSheetModal(true)} className=' btn btn-outline-dark'>
            Add TimeSheet
          </button>}
          <button onClick={getFileLink} className=' btn btn-outline-dark'>
            Export
          </button>
          </div>
        </div>
        </div>
        <div className=' mt-2 p-2'>
        {/* <div className='d-flex gap-2'>
          <Button className=' fs_10' variant="contained">All Timesheets</Button>
          <Button className=' fs_10' variant="outlined">Pending Submittal</Button>
          <Button className=' fs_10' variant="outlined">Draft</Button>
          <Button className=' fs_10' variant="outlined">Submitted</Button>
          <Button className=' fs_10' variant="outlined">Approved  </Button>
          <Button className=' fs_10' variant="outlined">Rejected   </Button>
        </div> */}
          </div>

        <Box>
          <TableMui
           onSort={(field,direction)=>{
            let value=direction=="asc"?field:"-"+field
                        setSortBy(value)
                      }}
            styleTableTh={{
              color: "#ffffff",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              // bgcolor:getThemeColor(type,"primary")
            }}
            th={{
              id:"Timesheet",
              match: "Match",
              position_name: "Position",
              candidate_name: "Candidate",
              shift_pay_period:"Shift Pay Period",
              facility:"Facility",
shift_date:"Shift Date",
punch_in:"Punch In",
punch_out:"Punch Out",
total_hours:"Total Hours",
trans_type:"Transaction Type",
bill_rate:"Bill Rate",
total_billed:"Total Billed",
status_date:"Status Date",
last_time_status:"Last Time Status",
rejection:"Rejection",
ap_hold:"Ap Hold",
sent_to_ap_hold:"Sent To Ap Hold",
check_number:"Check Number",
epcf:"ePCF",
              
              // status: "Status",
              // start_date: "Start Date",
              // end_date: "End Date",
            
              // regular_hours: "Regular Hours",
              // overtime_hours: "Overtime Hours",
              // total_hours: "Total Hours",
              // total_expenses: "Total Expenses",
              // total_billed:"Total Bill",
              // primary_approver: "Primary Approver",
            }}
            td={data}

            customFields={[
              {
                name: "candidate_name",
                data: (value,item) => (
                  <Button
                  style={{ textDecoration: "underline", color:"#000000", fontWeight:"bold" }}
                    onClick={() => {
                      setCurrent(item.candidate_id);
                      setCandidate(true);
                    }}
                    title={value}
                  >
                    {value}
                  </Button>
                ),
              },
              {
                name: "position_name",
                data: (value,item) => (
                  <Button
                  style={{ textDecoration: "underline", color:"#000000", fontWeight:"bold" }}
                    onClick={() => {
                      setCurrent(item.position_id);
                      setPosition(true);
                    }}
                    title={value}
                  >
                    {value}
                  </Button>
                ),
              },
            ]}
          />
        </Box>
        <Paginate count={count} onChange={handlePageChange} />
      </Box>
    </div>
  );
};


function SideModal({ values }) {
  const { current, show, setShow } = values;
  const [full, setFull] = useState(false);

  return (
    <Drawer
      anchor={"right"}
      sx={{
        display: { md: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          mt: "65px",
          width: {
            xs: full ? "100%" : "80%",
            md: full ? window.innerWidth - 240 : "60%",
          },
          zIndex: { md: 1100, xs: 1200 },
        },
      }}
      open={show}
      onClose={() => setShow(false)}
    >
      <div className="d-flex  align-items-center p-2">
        <RxCross2 size={35} onClick={() => setShow(false)} />
        <BsArrowsFullscreen size={25} onClick={() => setFull(!full)} />
      </div>
        <Typography variant='h5' sx={{mt:3}}>{current.candidate}</Typography>
      <div style={{maxWidth:"100%",overflowX:"hidden"}}>

    
      <TabBars
        Titles={[
          "TIME",
          "EXPENSES",
          "ATTACHMENTS (0)",
          "NOTES",
        ]}
        Contents={[TabData1, TabData2, TabData3, TabData4]}
      />
        </div>
    </Drawer>
  );
}

const TabData1=()=>{
  return (
<Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
  {/* <div>
    <Button variant="contained" >Add new match</Button>
    </div> */}
    <Typography variant="h5" sx={{ marginBottom: "10px" }}>
    {/* Currently Working Matches */}
    </Typography>
    {/* <Box component={Paper}>
      <div className='p-3 '>
        <h6>
       Candidate Details
        </h6>
      </div>
    </Box> */}
    <Box sx={{ m: 1 }} >
 
    <Grid container spacing={2}>
  <Grid item sm={12} md={6}>
  <Box component={Paper} > 
        <p className='py-4 text-center fw-bold  matches_box_bg'>
        Summary
        </p>
        <Box className="px-3">
        <div className='px-4'>
        <p className='mb-0'>Status</p>
        <Button className='btn btn_bg fs_10 m-0' variant='contained'>Screened</Button>
        </div>
        <Divider sx={{ m: 1 }} />
          <p className='fs_10'>
             First Name
          </p>
          <p className=''>
            Tatiyanna
          </p>
          <Divider sx={{ m: 1 }} />
          <p className='fs_10'>
          Middle Name
          </p>
          <p className=''>
          --
          </p>
          <Divider sx={{ m: 1 }} />
          <p className='fs_10'>Last Name</p>
          <p className=''>
          Gideon-Robinson
          </p>

          <Divider sx={{ m: 1 }} />
          <p className='fs_10'>
          Date Of Birth
          </p>
          <p className=''>
          --
          </p>
          <Divider sx={{ m: 1 }} />
          <div>
          <p className='fs_10'>Looking For</p>
          <div className='d-flex justify-content-between'>
          <p className='fs_10'>Contract -</p>
          <p className='fs_10'>Contract To Perm</p>
          <p className='fs_10'>Perm</p>
          </div>
          </div>

          <Divider sx={{ m: 1 }} />
          <p className='fs_10'>Contractor Type</p>
          <p>Corp-to-Corp (F)</p>
          <Divider sx={{ m: 1 }} />
          <p className='fs_10'>Desired Annual Rate</p>
          <p>-</p>
          <Divider sx={{ m: 1 }} />
          <p className='fs_10'>Desired Hourly Rate</p>
          <p>-</p>
          <Divider sx={{ m: 1 }} />
          <p className='fs_10'>Current Title</p>
          <p>-</p>
          <Divider sx={{ m: 1 }} />
          <p className='fs_10'>Available Date</p>
          <p>3/20/2023</p>
          <Divider sx={{ m: 1 }} />
          <p className='fs_10'>Termination Date</p>
          <p>3/20/2023</p>
          <Divider sx={{ m: 1 }} />
          <p className='fs_10'>Termination Reason</p>
          <p>3/20/2023</p>
          <Divider sx={{ m: 1 }} />

          <Box component={Paper}  className='p-3 '>
            <h6 className="text-center">
            About
            </h6>
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>
            General Comments
            </p>
            <p>
              -
            </p>
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>
            Summary
            </p>
            <p>
              -
            </p>
            <Divider sx={{ m: 1 }} />

          </Box>

          <Box component={Paper} sx={{ m: 1 }}  className='p-3 '>
            <h6 className="text-center">
            Additional Info
            </h6>
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>
            Lawson 3-4 ID
            </p>
            <p>
              -
            </p>
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>
            Lawson EIN
            </p>
            <p>
              -
            </p>
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>
            Lawson 3/4 ID
            </p>
            <p>
              -
            </p>
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>
            Previously Employed?
            </p>
            <p>
              -
            </p>
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>
            Employee Type
            </p>
            <p>
              -
            </p>
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>
            FLSA
            </p>
            <p>
              -
            </p>
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>
            Visa Type?
            </p>
            <p>
              -
            </p>
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>
            Visa Expiration
            </p>
            <p>
              -
            </p>
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>
            External Reference ID
            </p>
            <p>
              -
            </p>
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>
            NPI Number
            </p>
            <p>
              -
            </p>
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>
            Professional License Number
            </p>
            <p>
              -
            </p>
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>
            Professional License Expiration Date
            </p>
            <p>
              -
            </p>
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>
            Hot Prospect
            </p>
            <p>
              -
            </p>

          </Box>
          </Box>
        </Box>
  </Grid>
  <Grid item sm={12} md={6}>

        <Box  >
          <Box component={Paper}>
            <h4 className=" text-center matches_box_bg p-3">
            Cost Center

            </h4>
        <Box   className='p-3'>
            <Divider sx={{ m: 1 }} />
            <div className="d-flex gap-1 align-items-center p-2">
            <AiFillStar size={10}/>
            <p className='fs_10 mb-0'>
            Main Phone
            </p>
            </div>
            <p>
            (312) 285-4935
            </p>
            <Divider sx={{ m: 1 }} />
            <div className="d-flex gap-1 align-items-center p-2">
            <AiFillStar size={10}/>
            <p className='fs_10 mb-0'>
            Main Email
            </p>
            </div>
            <p>
            tgideon96@gmail.com
            </p>
            <Divider sx={{ m: 1 }} />

          </Box>
          </Box>

          <Box component={Paper} sx={{ marginTop: 1 }}>
            <h6 className=" text-center matches_box_bg p-3">
            Location
            </h6>
        <Box className='p-3' sx={{ m: 1 }}>
            <div className=" p-2">
            <p className='fs_10'>
            Home Address
            </p>
            </div>
            <p>
            7623 S Roberts Rd, Bridgeview, IL 60455
            </p>
          </Box>
          </Box>

          <Box component={Paper} sx={{ marginTop: 1 }}>
            <h6 className=" text-center matches_box_bg p-3">
           Tax Details
            </h6>
        <Box className='p-3' sx={{ m: 1 }}>
            <div className=" p-2">
            <p className='fs_10'>
            Tax Identification Number
            </p>
            </div>
            <p>
            -
            </p>
          </Box>
          </Box>

          <Box component={Paper} sx={{ marginTop: 1 }}>
            <h6 className=" text-center matches_box_bg p-3">
            People
            </h6>
        <Box className='p-3' sx={{ m: 1 }}>
            <div className=" p-2">
            <p className='fs_10'>
            Candidate Owner
            </p>
            </div>
            <p>
            Wilbert Lacy
            </p>
          </Box>
          </Box>

          <Box component={Paper} sx={{ marginTop: 1 }}>
            <h6 className=" text-center matches_box_bg p-3">
            Sharing
            </h6>
        <Box className='p-3' sx={{ m: 1 }}>
            <div className=" p-2">
            <p className='fs_10'>
            Shared With
            </p>
            </div>
            <p>
           -
            </p>
          </Box>
          </Box>

        </Box>
  </Grid>
 
</Grid>
       
    
  </Box>
</Box>

  )
}
const TabData2 = () => {
  

  return (
<Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
    <Typography variant="h5" sx={{ marginBottom: "10px" }}>
    {/* Currently Working Matches */}
    </Typography>
    <Grid item sm={12} md={6}>
  <Box component={Paper} > 
        <p className='py-4 text-center fw-bold  matches_box_bg'>
        Expenses
        </p>


<div className="d-flex justify-content-center  ">

<div>
        <div className="d-flex gap-5">
          <p>
          Total:
          </p>
          <p>     
          $0.00
          </p>
        </div>

</div>
</div>
<p className='py-4 text-center fw-bold  matches_box_bg'>
        Expenses
        </p>

       
        </Box>
  </Grid>

      
    </Box>
  );
};
const TabData3 = () => {
  const data = [
    {
      match: "Match 1",
      candidate: "Candidate 1",
      status: "Rejected",
      start_date: "2022-01-01",
      end_date: "2022-02-01",
    },
    {
      match: "Match 2",
      candidate: "Candidate 2",
      status: "Full Placement",
      start_date: "2022-02-01",
      end_date: "2022-03-01",
    },
  ];

  return (
    <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
        {/* Currently Working Matches */}
      </Typography>

      <Box>
        <TableMui
          styleTableTh={{
            color: "#ffffff",
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
          th={{
            match: "Name",
            candidate: "Version",
            status: "Type",
            start_date: "Expiration Date",
            end_date: "Date Added",
          }}
          td={data}
        />
      </Box>
    </Box>
  );
};

const TabData4=()=>{
  const data=[  {    "name": "Driver's License",    "status": "Active",    "effective_date": "2022-01-01",    "exp_date": "2027-12-31",    "states": "California"  },  {    "name": "CPR Certification",    "status": "Expired",    "effective_date": "2019-05-01",    "exp_date": "2022-04-30",    "states": "Multiple States"  }]


  return (
<Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
    <Typography variant="h5" sx={{ marginBottom: "10px" }}>
    {/* Currently Working Matches */}
    </Typography>
     <Box className="d-flex gap-2">
      <FaUserCircle size={30}/>

      <input className='form-control' type="text" name="" id="" placeholder='Add comment' />
      

  </Box>
  <div className="d-flex justify-content-end mt-2">
    <button type="button" class="btn btn-outline-primary">send</button>
    </div>

   </Box>
  )
}

