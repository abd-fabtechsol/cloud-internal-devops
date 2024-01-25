import { Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { useLocation, useParams } from "react-router-dom";
import { Helmet } from 'react-helmet';

export default function () {


    const location = useLocation();
    //console.log(location.pathname);

    const blog=location.state
//console.log(blog);


  return (
 <Container>
 <Helmet>
        <title>Blog Detail</title>
      </Helmet>
    {location.pathname.search("/admin/blog/detail")==-1&&<><Toolbar/>
    <Toolbar/>
    </>}

 <h1>{blog.title}</h1>

 <div className='my-2' style={{fontSize: '13px'}}>
        <div className="my-auto ">
          <div className=''><h6 className="mb-0">{blog.author}</h6></div>
        </div>
        <div className="my-auto ">
          <p className="mb-0">{blog.created_at}</p>
        </div>
      </div>
 <img  src={blog.image} alt="Card image" style={{width: isMobile?'100%':'30%'}} />

 <div style={{marginTop:40}}>
 <div dangerouslySetInnerHTML={{ __html: blog.content}} />
 </div>

      </Container>
  );
}
