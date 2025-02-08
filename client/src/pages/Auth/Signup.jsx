import { Box, Button, Card, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = ({setIsLogin}) => {
  return (
    <>
         <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'100vh' }} >
                <Card sx={{width:'400px' ,display:'flex',flexDirection:'column',justifyContent:"center",alignItems:'center',backgroundColor:'#B6D0E2' }}>
                    <Typography variant='h3' sx={{textAlign:'center',marginTop:'50px', fontFamily: '"Press Start 2P", serif', padding:'20px',marginBottom:'50px'}}>Sign up</Typography>

                    <TextField sx={{width:'300px',color:'black' ,marginTop:'20px', opacity:'20%',bgcolor:'white',borderRadius:'10px'}} id="outlined-basic" label="User-Name" variant="outlined" />

                        <TextField sx={{width:'300px',color:'black' ,marginTop:'20px', opacity:'20%',bgcolor:'white',borderRadius:'10px'}} id="outlined-basic" label="E-mail id" variant="outlined" />



                        <TextField sx={{width:'300px' ,marginTop:'20px', marginBottom:'10px',opacity:'20%',bgcolor:'white',borderRadius:'10px'}} id="outlined-basic" label="Password" type='password' variant="outlined" />

                            <Box>
                                <Button sx={{marginRight:'10px'}} variant='contained'>Sign Up</Button>
                                <Button variant='contained' >Clear</Button>
                                </Box>

                        <Typography sx={{marginTop:'40px'}}>Existing account ?<Button onClick={()=>setIsLogin(true)} sx={{textDecoration:'underline'}}>click here</Button></Typography>
                   
                   

                </Card>
        </Box>
    </>
  )
}

export default Signup