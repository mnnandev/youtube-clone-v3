import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <>
    <Stack p= {2} direction="row" alignItems="center" sx={{position:"sticky" , background:"#000", justifyContent: "space-between"}}>
         <Link to="/" style={{display:"flex", alignItems:'center'}}>
          <img src={logo} alt=""  height={45}/>
         </Link>
         <SearchBar />
    </Stack>
    </>
  )
}

export default Navbar