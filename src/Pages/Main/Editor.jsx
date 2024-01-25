import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromRaw,convertToRaw ,EditorState} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { useState } from "react";
function BlogEdit() {
const [editorState,setEditorState]=useState(EditorState.createEmpty())
 
    
  return (
    <div>

    
    <button onClick={()=>{
      
      localStorage.setItem('data',JSON.stringify(convertToRaw(editorState.getCurrentContent())))
      
      }}>print</button>
    <button onClick={()=>{
      const convertedState = convertFromRaw(JSON.parse( localStorage.getItem('data')))
    setEditorState(EditorState.createWithContent(convertedState ))
      
      }}>get</button>
      <div style={{height:'80vh'}}>

    <Editor
    //   toolbarHidden
  
    wrapperClassName="wrapper-class"
  editorClassName="editor-class"
  toolbarClassName="toolbar-class"
  toolbar={{
    inline: { inDropdown: true },
    list: { inDropdown: true },
    textAlign: { inDropdown: true },
    link: { inDropdown: true },
    history: { inDropdown: true },
    image: {
      className: undefined,
      components: undefined,
      popupClassName: undefined,
      urlEnabled: true,
      uploadEnabled: true,
      alignmentEnabled: true,
      uploadCallback: undefined,
      previewImage: false,
      inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
      alt: { present: false, mandatory: false },
      defaultSize: {
        height: '400',
        width: '400',
      },
    }
  }}
    editorState={editorState}
    onEditorStateChange={setEditorState}
  />

      </div>
<textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
  </div>
  );
}

export default BlogEdit;