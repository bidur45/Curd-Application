import React, { useState,useEffect } from "react";
import { Table } from "@mui/material";
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  axios  from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));


  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  


const Home=()=>{
  const [users, setUsers]=useState([])
    
  useEffect(()=>{
    Users()
  },[])

  const Users = async()=>{
    const result = await axios.get("http://localhost:5000/users");
    setUsers(result.data.reverse());
  }

  const deleteUser= async(id)=>{
           await axios.delete(`http://localhost:5000/users/${id}`)
           Users()
      }
    return(
        <div style={{margin:100}} >
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Username</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((users,index)=>(
          <StyledTableRow key={index}>
          <StyledTableCell component="th" scope="row">
            {index + 1}
          </StyledTableCell>
          <StyledTableCell align="center">{users.name}</StyledTableCell>
          <StyledTableCell align="center">{users.username}</StyledTableCell>
          <StyledTableCell align="center">{users.email}</StyledTableCell>
          <StyledTableCell align="center">
            <Link style={{textDecoration:'none'}} to={`./user/${users.id}`}>
            <Button style={{margin:3, backgroundColor:'green'}}variant="contained">View</Button>
            </Link>
            <Link  style={{textDecoration:'none'}} to={`./users/edit/${users.id}`}>
            <Button style={{margin:3 }} variant="contained">edit</Button>
             </Link>
            <Button style={{margin:3, backgroundColor:'red' }} variant="contained" onClick={()=> deleteUser(users.id)}>delete</Button>
          </StyledTableCell>
        </StyledTableRow>

          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}
export default Home