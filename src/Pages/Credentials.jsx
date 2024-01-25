
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserCircle} from "react-icons/fa";
import TableMui from "../components/mui/TableMui";
import { Box, Button,Grid, Drawer, Paper, Typography } from "@mui/material";
import TabBars from "../components/mui/TabBars";
import { RxCross2 } from "react-icons/rx";
import { BsArrowsFullscreen } from "react-icons/bs";
import { AiFillStar, } from "react-icons/ai";
import Divider from "@mui/material/Divider";
import { useOutletContext } from "react-router-dom";
import getThemeColor from "../modules/getThemeColor";
import apiClient from "../api/apiClient";
import useApi from "../hooks/useApi";
import { toast } from "react-toastify";
import Paginate from "../components/Paginate";
import SearchHome from "../components/mui/SearchBar";
import { Helmet } from "react-helmet";

export default  ({user}) => {
  const {type}= useOutletContext();

  const [current, setCurrent] = useState();
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
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
    const result = await request(`/Credentials/?page=${page}&${keyword||"credential"}=${search}&ordering=${sortBy}`);
    if (!result.ok) return;
    //console.log(result);
    if (!count||page==1) setCount(result.data.count);
  }
  const handlePageChange = (event, value) => {
    fetchData(value);
  };
  useEffect(()=>{
        fetchData()
      },[sortBy])
  async function handleDelete(id) {
    const result = await apiClient.delete("/Credentials/" + id);
    if (!result.ok) return toast.error("Failed to Delete");
    toast.success("Deleted");
    fetchData();
    setCount(0);
  }

  return (
    <div>
       <Helmet>
        <title>
          Credentials
        </title>
      </Helmet>
      <Box className="" component={Paper} sx={{ marginBottom: "20px", padding: "20px",  }}>
        {/* <Typography variant="h5" sx={{ marginBottom: "10px" }}>
          Currently Working Matches
        </Typography> */}
         {show && <SideModal values={{ current, show, setShow }} />}
         <Box >
        <h5 className="">Credentials</h5>

        <div className='d-flex justify-content-between flex-column flex-md-row mb-2'>
         <div className='d-flex  gap-2'>
        <div class=" mb-3 ">
        <SearchHome
            defaultLabel="Match ID or Candidate Name"
               data={[
                {route:"Status",name:"Status"},
                {route:"credential_type",name:"Type"},
                {route:"required_for_placement",name:"Placement"},
                {route:"state",name:"State"},
                {route:"effective_date",name:"Effective Date"},
                {route:"expiration_date",name:"Expiration Date"},
           ] }
            setSearch={setSearch} setKeyword={setKeyword} keyword={keyword}
            style={{ width: "255px"}}
            />
         </div>
          </div>
        <div className='d-flex flex-column flex-md-row gap-2'>
          <div>
          <button className=' btn btn-outline-dark'>
            Export
          </button>
          </div>
        </div>
        </div>

        <div className='mt-2 p-2'>
        {/* <div className='d-flex gap-2'>
          <Button className=' fs_10' variant="contained">All</Button>
          <Button className=' fs_10' variant="outlined">Unconfirmed</Button>
          <Button className=' fs_10' variant="outlined">Expiring Soon</Button>
          <Button className=' fs_10' variant="outlined">Expired</Button>
        </div> */}
          </div>
         </Box>

      <Box sx={{bgcolor:getThemeColor(type,"secondary")}}>
              <Box className="" sx={{ marginBottom: "20px", padding: "20px",  }}>
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
                    name: "Name",
                    candidate_name: "Candidate",
                    candidate_status: "Candidate Status",
                    status: "Status",
                    credential_type: "Credential Type",
                    required_for_placement: "Required for Placement",
                    effective_date: "Effective Date",
                    expiration_date: "Expiration Date",
                    state: "State",
                  }}
                  td={data}
                  // link={"/admin/new-job-detail/"}

                  customFields={[
                    {
                      name: "candidate",
                      data: (value,item) => (
                        <Button
                        style={{ textDecoration: "underline", color:"#000000", fontWeight:"bold" }}
                          onClick={() => {
                            setCurrent(item)
                            setShow(true)
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
      <div className="d-flex  align-items-center">
        <RxCross2 size={35} onClick={() => setShow(false)} />
        <BsArrowsFullscreen size={25} onClick={() => setFull(!full)} />
      </div>
        <Typography variant='h5' sx={{mt:3}}>{current.candidate}</Typography>
      <div style={{maxWidth:"100%",overflowX:"hidden"}}>

    
      <TabBars
        Titles={[
          "Overview",
          "ATTACHMENTS",
          "NOTES",
        ]}
        Contents={[TabData1, TabData2, TabData3,]}
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
    <Box className="matches_box_bg  shadow">
      <div className='p-3 '>
        <h6>
        Position Details
        </h6>
      </div>
    </Box>
    <Box>
 
    <Grid container spacing={2}>
  <Grid item sm={12} md={6}>
  <Box component={Paper} > 
        <p className='py-4 text-center fw-bold  matches_box_bg'>
          General
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
 
 
</Grid>
       
    
  </Box>
</Box>

  )
}
const TabData2 = () => {
  const data = [
    {
      name: "Adobe Photoshop",
      type: "Software",
      version: "CC 2022",
      expiration_date: "2023-06-30",
      date_added: "2022-01-15",
    },
    {
      name: "Microsoft Office",
      type: "Productivity Suite",
      version: "Office 365",
      expiration_date: "2023-12-31",
      date_added: "2021-12-15",
    },
  ];

  return (
<Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
    <Typography variant="h5" sx={{ marginBottom: "10px" }}>
    {/* Currently Working Matches */}
    </Typography>
    <div className='col-md-5'>
    <div class="input-group mb-3">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon1"
            >
              <AiOutlineSearch />
            </button>
            <input
              type="search"
              class="form-control"
              placeholder="Search by name"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </div>
    </div>
 

      <Box>
        <TableMui
          styleTableTh={{
            color: "#ffffff",
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
          th={{
            name: "Name",
            type: "Type",
            version: "Version",
            expiration_date: "Expiration Date",
            date_added: "Date Added",
          }}
          td={data}
        />
      </Box>
    </Box>
  );
};

const TabData3=()=>{
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







