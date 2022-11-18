import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import  registerCustomer from   "../actions/authCustomerActions.JS"
import { useState,useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate}from 'react-router-dom'


  const theme = createTheme();


const Register = () => {
// entre to profil with isAuth
const isAuth=useSelector(state=>state.authCustomerReducer.isAuth)

    const dispatch=useDispatch()
    const navigate=useNavigate()
// init satae de onChange and function
const  [input,setInput]= useState({
    fname:"", lname:"",  e_mail:"", adress:"", passWord:"", phoneNum:"",
})

const handleChange= (e) =>{
    e.preventDefault();
    setInput({...input,[e.target.name]:e.target.value})
    
}

//handleSubmit 
 const handleSubmit = (e) => {
    e.preventDefault();
    dispatch (registerCustomer(input))
    
    }
  // when update state isAuth change the navigate 
    useEffect(()=>{
        if(isAuth)
        navigate('./profile')
    },[isAuth])
  return (
    <div>
        
<ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: '80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
           
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#bca086' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="fname"
                  required
                  fullWidth
                  id="fname"
                  label="First Name"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lname"
                  label="Last Name"
                  name="lname"
                  autoComplete="family-name"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="e_mail"
                  label="Email Address"
                  name="e_mail"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passWord"
                  label="Password"
                  type="password"
                  id="passWord"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="adress"
                  label="Address"
                  name="adress"
                  autoComplete="text"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNum"
                  label="Phone Number"
                  name="phoneNum"
                  autoComplete="number"
                  onChange={handleChange}
                />
              </Grid>
              
              <Grid item xs={12} >
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
               color="inherit"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
    </div>
  )
}

export default Register