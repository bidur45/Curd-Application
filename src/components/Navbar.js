import React from "react";
import { AppBar } from "@mui/material";
import { Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import {Box} from '@mui/material'


const Navbar = () => {
    return (
        <div>
            <AppBar position="static" sx={{ flexGrow: 1 }} >
                <Toolbar>
                  
                   <Typography variant="h6" component="div"    sx={{ mr: 3 }}  >
                        Users
                    </Typography>
                    <Link style={{textDecoration:'none', color:'white'}} to='/'  >
                   
                        Home
                
                    </Link>

  
                   
                    <Box sx={{ flexGrow: 1 }} />
                   <Link  style={{textDecoration:'none'}} to='/users/adduser'>
                    <Button  color="secondary" style={{marginRight:70}} variant="contained" >Add user</Button>
                    </Link>
                   
                   
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Navbar