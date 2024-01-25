
import { useEffect, useState } from "react";
import TableMui from "../../components/mui/TableMui";
import { Box, Paper } from "@mui/material";
import { useOutletContext, useParams } from "react-router-dom";
import apiClient from "../../api/apiClient";
import useApi from "../../hooks/useApi";
import Paginate from "../../components/Paginate";
import { Helmet } from "react-helmet";
import * as yup from 'yup';
import { Formik } from "formik";
import AppErrorMessage from "../../components/form/AppErrorMessage";
import { AdminButton } from "../../components/mui";
import colors from "../../config/colors";

import moment from "moment";
import FormFieldInput from "../../components/form/FormFieldInput";
import { generateCSV } from "../../modules/csvHelpers";


const validationSchema = yup.object({
  start_date: yup.string().required("Start Date is required").label("Start Date"),
  end_date: yup
    .string()
    .required("End Date is required")
    .test("is-greater", "end date should be later than start date", function(value) {
      const { start_date } = this.parent;
      return moment(value).isSameOrAfter(moment(start_date));
    })
});
const headers={
  "created_at": "Host Batch Date",
  "facility": "Facility",
  "employee": "Employee",
  "shift_hours": "Shift Hours",
  "total_hours": "Hours",
  "bill_rate": "Rate",
  "extend": "Extended (Gross)",
  "early_pay_percentage": "Early Pay Percent",
  "early_pay_amount": "Early Pay Amount",
  "MSP_Percent": "MSP Percent",
  "MSP_amount": "MSP Amount",
  "total_billed":"Net Amount",
  "ein": "EIN",
  "check_number": "Payment Number",
  "vendor": "Vendor ID",

}

export default  ({user}) => {
  const {type}= useOutletContext();
  const [count, setCount] = useState(0);

  const initial={start_date:"",end_date:""}
  const [date,setDate]=useState(initial)
  const route=useParams()


 
  const { request, data, loading } = useApi((route) =>apiClient.get(route));
  const csvAPI = useApi((route) =>apiClient.get(route));
  const [sortBy,setSortBy]=useState()
  const [result,setResult]=useState()
  async function fetchData(page = 1,values) {
    setResult(null)
    if(page==1&&count)
    setCount(0)
    //console.log("dssdfsfsd");
    const result = await request(`/ReportRemittance/?page=${page}&start_date=${values.start_date}&end_date=${values.end_date}`);
    if (!result.ok) return;
    //console.log(result);
    if (!count||page==1) setCount(result.data.count);
    if(result.data?.count>1)
   setResult(result)
  }

 
  const handlePageChange = (event, value) => {
    fetchData(value);
  };


   

  

  return (
    <div>
       <Helmet>
        <title>
          Timesheets
        </title>
      </Helmet>

      <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px", }}>
      <p >Report Remittance</p>
      <Box className="d-flex align-items-end justify-content-between">
      <Formik
                  initialValues={initial}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    //console.log(values);
                    fetchData(1,values)
                  }}
                  validator={() => ({})}
                >
                  {({ handleSubmit, handleChange,setFieldValue, setFieldTouched, values, errors, touched }) =>
               (
               <div>

<div className='d-flex flex-wrap justify-content-start gap-2 '>
<div>

<span>Start Date</span>
<FormFieldInput size="small"  hideError name="start_date" type="date"/>
</div>
<div>
<span>End Date</span>
<FormFieldInput size="small"  hideError name="end_date" type="date"/>
</div>

<div className="d-flex align-items-end">

<AdminButton 
                        name="Filter"
                        type="Submit"
                        size="medium"
                        loading={loading}
                        onClick={handleSubmit}
                        style={{
                          backgroundColor: colors.primary,
                          "&:hover": { backgroundColor: "#002370" },
                          whiteSpace: "nowrap",
                        }}
                      />
</div>
</div>
<div className="d-flex justify-content-start gap-2 ">

<AppErrorMessage name={"start_date"}/>
<AppErrorMessage name={"end_date"}/>
</div>
               </div>   
)}
</Formik>
{result&&<AdminButton 
                        name="Export"
                        size="medium"
                        loading={csvAPI.loading}
                        onClick={()=>fetchCsvData(result,csvAPI)}
                        style={{
                          backgroundColor: colors.primary,
                          "&:hover": { backgroundColor: "#002370" },
                          whiteSpace: "nowrap",
                        }}
                      />}
      </Box>
  

   
{data?.length>0&&   <>
        <Box>
          <TableMui
          
            styleTableTh={{
              color: "#ffffff",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              // bgcolor:getThemeColor(type,"primary")
            }}
            th={ headers}
            td={data}
customFields={[
  {name:"shift_hours",data:(value,{punch_in,punch_out})=>{
  if(!punch_in||!punch_out)
  return
  return(<>{
 moment(punch_in, "HH:mm:ss").format("HH:mm")+"-"+ moment(punch_out, "HH:mm:ss").format("HH:mm")
}</>)}
},

  {name:"MSP_amount",data:(value,item)=>(
    <>{(item.extend/100)*item.MSP_Percent}</>
  )
},
  {name:"early_pay_amount",data:(value,item)=>(
    <>{(item.extend/100)*item.early_pay_percentage}</>
  )
},
  {name:"total_billed",data:(value,item)=>{
    let earlypay=(item.extend/100)*item.early_pay_percentage
    let msp=(item.extend/100)*item.MSP_Percent
    return(
    <>{item.extend-(earlypay+msp)}</>
  )}
}
]}

         
          />
        </Box>
        <Paginate count={count} onChange={handlePageChange} />
   </>}
      </Box>
    </div>
  );
};




async function fetchCsvData(resultData,csvAPI){
 
  let data=resultData.data.results
  let response=resultData
  while (response.next) {

    const result=await csvAPI.request(response.next)
    if(!result.ok) 
    break
    if(result.data?.results)
    data=[...data,result.data.results]
    response=result
    
  }
 data= data.map(item=>{

item.shift_hours=moment(item.punch_in, "HH:mm:ss").format("HH:mm")+"-"+ moment(item.punch_out, "HH:mm:ss").format("HH:mm")
item.MSP_amount=(item.extend/100)*item.MSP_Percent
item.early_pay_amount=(item.extend/100)*item.early_pay_percentage
item.total_billed=item.extend-(item.early_pay_amount+item.MSP_amount)
let orderedItem = {};
const headerKeys = Object.keys(headers);

headerKeys.forEach(key => {
  orderedItem[key] = item[key];
});

return orderedItem;
  })
  //console.log(data);
  generateCSV(data,headers,"RemittanceReport")
  }

