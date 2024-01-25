import React, { cloneElement, useEffect, useState } from 'react';
import {Box, Pagination} from '@mui/material'
let PageSize=0
function FrontEndPaginate({data,postsPerPage=10,style,children}) {


    const [currentPage, setCurrentPage] = useState(1);
    const handleChange = (event, value) => {
      setCurrentPage(value);

    };
    const indexOfLastData = currentPage * postsPerPage;
    const indexOfFirstData = indexOfLastData - postsPerPage;
    const currentData = data.slice(indexOfFirstData, indexOfLastData);



    PageSize=Math.ceil(data.length/postsPerPage)


    return (
        <Box   >


     {cloneElement(children, { data:currentData })}
<Box sx={style} mt={2}>

<Pagination
    color="primary"
        variant="outlined"
        shape="rounded"
         count={PageSize} onChange={handleChange}  />
</Box>

       </Box>
    );
}

export default FrontEndPaginate;
