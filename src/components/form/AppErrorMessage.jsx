import { TextField } from "@mui/material";
import { containerClasses } from "@mui/system";
import { ErrorMessage, useFormikContext } from "formik";
import { useEffect } from "react";

const AppErrorMessage = ({

  name,

}) => {


  return (
 
    <ErrorMessage name={name}>
    { msg => <div style={{ color: 'red' }}>{msg}</div> }
</ErrorMessage>
        
 
  );
};

export default AppErrorMessage;
