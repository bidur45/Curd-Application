import  axios  from "axios";
import React,{useState, useEffect} from "react";
 import TableBody from '@mui/material/TableBody';
 import TableRow from '@mui/material/TableRow';
 import { Table, TableHead } from "@mui/material";
  import { Paper } from "@mui/material";
  import TableContainer from '@mui/material/TableContainer';
  import { styled } from '@mui/material/styles';
  import TableCell, { tableCellClasses } from '@mui/material/TableCell';

   import { useParams } from "react-router-dom/cjs/react-router-dom.min";


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

const User=()=>{
    const [user, setUser]= useState({
        name:'',
        username:'',
        email:'',
        phone:'',
        website:''  
      })

      const{id}= useParams()

      useEffect(()=>{
        loadUser()
      },[])
      const loadUser = async ()=>{
          const request = await axios.get(`http://localhost:5000/users/${id}`)
          setUser(request.data);
      }
    return(
        <div style={{margin:100}} >
        <TableContainer component={Paper}>
     <Table sx={{ minWidth: 700 }} aria-label="customized table">
       <TableHead>
         <TableRow>
           <StyledTableCell>ID</StyledTableCell>
           <StyledTableCell align="center">Name</StyledTableCell>
           <StyledTableCell align="center">Username</StyledTableCell>
           <StyledTableCell align="center">Email</StyledTableCell>
           <StyledTableCell align="center">Website</StyledTableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         
         <StyledTableRow >
         <StyledTableCell component="th" scope="row">
           {id}
         </StyledTableCell>
         <StyledTableCell align="center">{user.name}</StyledTableCell>
         <StyledTableCell align="center">{user.username}</StyledTableCell>
         <StyledTableCell align="center">{user.email}</StyledTableCell>
         <StyledTableCell align="center">{user.website}</StyledTableCell>

         
       </StyledTableRow>

       
         
       </TableBody>
     </Table>
   </TableContainer>
       </div>
    )
}
export default User