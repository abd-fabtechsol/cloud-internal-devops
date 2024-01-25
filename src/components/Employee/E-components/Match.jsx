import React, { useEffect, useState } from 'react'
import Matches from '../../sidebar/common/Matches'
import { Box, Button } from '@mui/material'
import { TableMui } from '../../mui'
import apiClient from '../../../api/apiClient'
import { toast } from "react-toastify";
import { useSelector } from 'react-redux'
import useApi from '../../../hooks/useApi'
const Match = () => {
  const[matches,setMatches]=useState()
  const[load,setLoad]=useState(false)
  async function fetchMatch(){
    setLoad(true)
    const result=await apiClient.get(`/candidates/ `)
    setLoad(false)
    if(!result.ok) return 
    //console.log(result?.data?.results[0],"result"); 
    setMatches(result?.data?.results[0])
    }


//console.log(matches,"cskjdsjd skajjkldf ");
   
useEffect(() => {
  fetchMatch()
}, []) 
  return (
    <>
   
    <Matches current={matches} fetchData={fetchMatch}/>
    </>
  )
}

export default Match