import { TextField } from "@mui/material";
import { containerClasses } from "@mui/system";
import { ErrorMessage, useFormikContext } from "formik";
import { useEffect } from "react";
import AppErrorMessage from "./AppErrorMessage";

const FormFieldInput = ({
  classNameField="",
  classNameContainer="",
  name,
  onBlur,
  onKeyUp,
  onKeyDown,
  onChange,
  disabled,
  textarea,
  label,
  containerClass="",
  className="",
  type = "text",
  color = "white",
  hideError,
  ...otherProps
}) => {
  const { handleChange, errors,values, touched, setFieldTouched } = useFormikContext();
useEffect(()=>{

    //console.log(errors,"errors");
},[errors])

  return (
    <div className={containerClass}>
   
   <TextField
            
              name={name}
                required
              type={type}
              className={className}
              onBlur={() => setFieldTouched(name)}
              onChange={handleChange(name)}
              value={values[name]}
              label={label}
              variant="outlined"
              // onKeyUp={onKeyUp && onKeyUp}
              // onKeyDown={onKeyDown && onKeyDown}
              {...otherProps}
            />
{!hideError&&    <AppErrorMessage name={name}/>}
        
 
    </div>
  );
};

export default FormFieldInput;
