import React,{useState, useEffect} from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom";

const Edituser = () => {
    const {id}=useParams();
  const history = useHistory()
  const [user, setUser]= useState({
    name:'',
    username:'',
    email:'',
    phone:'',
    website:''  
  })

  const { name, username, email, phone, website}=user;

  const onhandleChange=(e)=>{
     setUser({...user, [e.target.name]: e.target.value})

  }
  
  const onSubmit= async(e)=>{
      e.preventDefault()
       await axios.put(`http://localhost:5000/users/${id}`, user)
      history.push('/')
  }

    useEffect(()=>{
       loadUser()
    },[])
    const loadUser = async ()=>{
        const request = await axios.get(`http://localhost:5000/users/${id}`)
        setUser(request.data);
    }
  return (
    <div style={{marginTop:60, marginLeft:600}}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 500,
            height: 500,
          },
        }}
      >
        
        <Paper elevation={3}>
          <Typography variant='h1' align='center' style={{marginTop:10, fontSize:20}}>Edit users</Typography>
          <div style={{marginTop:10}}>
           <form style={{marginLeft:20}} >
            <TextField
             
             label='name'
             variant="outlined"
             margin="dense"
             placeholder='name'
             autoComplete="current-password"
             style={{margin:10,width:'450px'}}
             value={name}
             name='name'

             onChange={(e)=> onhandleChange(e)}
             />
             <TextField
             fullWidth
             label='username'
             variant="outlined"
             margin="dense"
             placeholder='username'
             autoComplete="current-username"
             style={{margin:10,width:'450px'}}
             value={username}
             name='username'

             onChange={(e)=> onhandleChange(e)}


             />
             <TextField
             fullWidth
             label='email'
             variant="outlined"
             margin="dense"
             placeholder='email'
             autoComplete="current-email"
             style={{margin:10,width:'450px'}}
             value={email}
             name='email'

             onChange={(e)=> onhandleChange(e)}


             />
             <TextField
             fullWidth
             label='phone'
             variant="outlined"
             margin="dense"
             placeholder='phone'
             autoComplete="current-phone"
             style={{margin:10,width:'450px'}}
             value={phone}
             name='phone'

             onChange={(e)=> onhandleChange(e)}


             />
             <TextField
             fullWidth
             label='website'
             variant="outlined"
             margin="dense"
             placeholder='website'
             autoComplete="current-website"
             style={{margin:10,width:'450px'}}
             value={website}
             name='website'

             onChange={(e)=> onhandleChange(e)}


             />
            
            <div style={{marginTop:20, marginLeft:200}}>
            <Button  onClick={e=> onSubmit(e)} variant='contained' style={{backgroundColor:'blue'}}>Update user</Button>
            </div>

          



              
           </form>

          </div>
        </Paper>
      
      </Box>
    </div>
  )
}
export default Edituser