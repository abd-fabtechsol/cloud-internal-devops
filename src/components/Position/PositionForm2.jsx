import React,{useState,useEffect ,useRef} from 'react'
import { AdminButton, TableMui }from './../mui'
import {Button,IconButton, Box,FormControlLabel,Grid,TextField,Typography, Switch, Radio, RadioGroup, FormLabel, FormControl } from "@mui/material";
import { SelectOption } from '../mui';
const PositionForm2 = ({values}) => {
        const {step,form2,apiRateType,rates,setRates}=values
        const [selected,setSelected]=useState()
        const [rate,setRate]=useState()
       
      
      function handleRate(){
      
      setRates([...rates,{value:rate,ratetype:selected}])
      setSelected("")
      setRate("")
      }
      
      function findValue(value){
        //console.log(value);
        //console.log(apiRateType.data,"data");
        return apiRateType.data.find(x=>x.id==value).title
      }
        return (
      <>
      
          {step==2&&<div className="candidate-info mt-2">
          <form className="" ref={form2} >
          <Box>
              
      
              <Grid container spacing={2} mt={2} style={{display:"flex",alignItems:"center"}}>
      
                         <Grid item xs={12} md={5}>
                      
                      <SelectOption
                      
                                  required
                                  label="Rate Type"
                                  name="position"
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  value={selected}
                                  onChange={(e)=>setSelected(e.target.value)}
                                  data={apiRateType.data}
                                  fullWidth
                                  size={"small"}
                                  style={{  width:"100%" }}
                                />
                      </Grid>
         
               {selected&& 
               <>
               <Grid  item xs={12} md={5}>
                
      
                <TextField
                            required
                            type="number"
                            label="Rate"
                            name="position"
                            inputProps={{ maxLength: 150 }}
                            id="outlined-name"
                            value={rate}
      
                            onChange={(e)=>{setRate(e.target.value)}}
                            fullWidth
                            size={"small"}
                            style={{  width:"80%" }}
                          />
                          
                        
                </Grid>
                 <Grid item xs={12} md={2}>
                  
                 <AdminButton
       
       onClick={()=>{
         handleRate()
       }}
       name="Add"
       />
                   </Grid>
                   </>
                
                }
              
                  
                      </Grid>
                      <Grid item xs={12}>
                 {rates.length>0&&
                  // console.log(item,"fsdfdf",index)
                  <TableMui
        //           onSort={(field,direction)=>{
        // let value=direction=="asc"?field:"-"+field
        //             setSortBy(value)
        //           }}
                    styleTableTh={{
                      color: "#ffffff",
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                    }}
                    th={{
                      ratetype:"Rate Type",
                      value:"Rate ($)",
                       
                    }}
        
                    // sortDisable={["status","worksite"]}
                    // loading={loading}
                    td={rates}
                    customFields={[
                      {
                        name: "ratetype",
                        data: (value, item) => (
                         
                           <p title={value}>
                            {findValue(item.ratetype)}
                            </p>
                        ),
                      },]}
                    />
                  // <p>{findValue(item.ratetype)},{item.value}</p>
                 }
                 </Grid>
            
      
      
      </Box>
           </form>
          </div>}
          </>
        )
      }

export default PositionForm2