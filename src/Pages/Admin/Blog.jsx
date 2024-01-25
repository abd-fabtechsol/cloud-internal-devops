import { useState, useEffect } from 'react';
import { AdminButton } from '../../components/mui';
import { Button, TextField } from '@mui/material';
import { Container, Stack } from '@mui/system';
import apiClient from '../../api/apiClient';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import LoadingOverlay from '../../components/mui/LoadingOverlay';
import { Helmet } from 'react-helmet';
import MyCKEditor from '../../components/blogs/CKEditor';
import { toast } from 'react-toastify';
import ControlCenterSidebar from '../../components/ControlCenterSidebar';

// Rest of the code remains the same

export default function Blog() {

  const location = useLocation();
  const navigate = useNavigate()
  const { id } = useParams();
  let emptyFields = {
    title: "",
    description: "",
    image: null,
    content: null,
    contentJson: null,

  };
  const [addNew, setAddNew] = useState(emptyFields);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", color: "" });
  const [submitMsg, setSubmitMsg] = useState({ text: "", color: "" });
  const [editorState, setEditorState] = useState()

  const [editorshow, setEditorShow] = useState(false)

  useEffect(() => {
    if (id)
      fetchData()
  }, [])
  const fetchData = async () => {
    setLoading(true)
    const response = await apiClient.get("/blog/" + id)
    if (!response.ok)
      return
    setAddNew({
      title: response.data.title,
      description: response.data.description,
      content: response.data.content,
    });
    console.log(response.data.content)
    setEditorState(response.data.content)
    setLoading(false)
    setData(response.data)

  }


  const handleChange = (event) => {
    const { name, value } = event.target;
    if (event.target.files) {
      if (event.target.files[0].size > 5242880)
        return setMessage({ text: "Image can't be more than 5MB", color: "danger" })
      setAddNew({ ...addNew, [name]: event.target.files[0] })
    }
    else
      setAddNew({ ...addNew, [name]: value });
  };



  const handleSubmit = async (status) => {
    var formdata = new FormData()
    formdata.append('title', addNew.title)
    formdata.append('description', addNew.description)
    if (addNew.image) {
      //console.log(" exist")
      formdata.append('image', addNew.image)
    }
    else
      console.log("doesn't exist")
    // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    formdata.append('content', editorState)
    formdata.append('status', status)
    // console.log(formdata.entries());
    // for (const item of formdata.entries()) {
    //   console.log(item);
    // }

    if (!data) {
      setLoading(true)
      const response = await apiClient.post("/blogs/", formdata);
      setLoading(false)
      if (response.status !== 201) return toast.error("Error occured while Submiting Data try again")
      toast.success("Successfully Added New Blog")
      setTimeout(() => navigate(-1), 2000)
    } else {
      setLoading(true)
      const response = await apiClient.put(`blog/${id}/`, formdata);
      setLoading(false)
      if (response.status !== 200) return toast.error( "Error occured while Submiting Data try again")
      toast.success( "Successfully Updated Blog")
      setTimeout(() => navigate('/manager/blogs'), 1000)

    }
  }
  function checkEmpty() {

    if (!addNew.title) {
      setMessage({ text: "Title is Required", color: "danger" })
      return true
    }
    if (!addNew.description) {
      setMessage({ text: "description is Required", color: "danger" })
      return true
    }
    if (data)
      if (data.image)
        return false
    if (!addNew.image) {
      setMessage({ text: "Please Select a Image", color: "danger" })
      return true
    }
    return false


  }
  function resetErrors() {
    setMessage({ text: "", color: "" })
  }
  function validateForm() {
    //console.log(checkEmpty())
    if (checkEmpty())
      return
    setEditorShow(!editorshow)
  }
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorState(data);
  };

  return (
    <div>
<Helmet>
 <title>
   Blog
 </title>
</Helmet>
<div className='row'>
<div className='col-md-3'>
 <ControlCenterSidebar/>
</div>
<div className='col-md-9'>
<div>
     
     {loading && <LoadingOverlay open={loading} />}
     <div className="row justify-content-between mb-3">
<div className="col-4">
 
       <AdminButton onClick={validateForm} name={editorshow ? 'Previous' : 'Next'} />
</div>
<div className="col-4">
 
       {data?.status && (
         <div className={` p-1 m-1`}>
           <span><strong>Current Status:</strong><span style={{color:data.status=="D"?"yellowgreen":"green"}}>{data.status=="D"?"Draft":"Published"}</span></span>
         </div>
       )}
</div>
<div className="col-4">
 
       {editorshow && (
         <div className="d-flex justify-content-end gap-2">

           {/* <AdminButton onClick={()=>handleSubmit("D")} name={'Save as Draft'} /> */}
           <AdminButton onClick={()=>handleSubmit("D")} name={'Save as Draft'} className='bg-warning'/>
           <AdminButton onClick={()=>handleSubmit("P")} name={'Publish'} className='bg-success' />
         </div>
       )}
</div>
       
     </div>
     {!editorshow ? (
       <BlogInfo data={data} addNew={addNew} handleChange={handleChange} message={message} resetErrors={resetErrors} />
     ) : (
       <div >
         <MyCKEditor
           data={editorState}
           onChange={handleEditorChange}
         />
       </div>
     )}
   </div>

</div>
</div>
</div>
   
  );
}


const BlogInfo = ({ data, addNew, handleChange, message, resetErrors }) => {


  return (
    <Container maxWidth='sm'>
      {message.text && <div className={`bg-${message.color} p-1 m-1 mb-2`}>
        <span>{message.text}</span>
      </div>}
      <form encType='multipart/form-data'>



        <TextField
          required
          type="text"
          name="title"
          value={addNew.title}
          label="Title"
          id="outlined-name"
          onChange={handleChange}
          onFocus={resetErrors}
          fullWidth
          sx={{ marginBottom: "25px" }}
        />

        <TextField
          required
          name="description"
          value={addNew.description}
          label="Description"
          id="outlined-name"
          onChange={handleChange}
          onFocus={resetErrors}
          // InputProps={{ inputProps: { min: 0, max: 10 } }}
          sx={{ width: { xs: "100%" } }}
        />

        <Button
          variant="contained"
          component="label"
          sx={{ marginY: 3 }}
        >
          Upload File
          <input
            type="file"
            hidden
            name='image'
            onChange={handleChange}
            onFocus={resetErrors}
          />

        </Button>
        {addNew.image ? <Stack><img src={URL.createObjectURL(addNew.image)} alt="" style={{ width: 350, height: 200 }} /></Stack> :
          data && <Stack><img src={data.image} alt="" style={{ width: 350, height: 200 }} /></Stack>

        }

      </form>

    </Container>
  )
}
