import { Box, Button, Card,  TextField, Typography } from "@mui/material";
import React from "react";

const Login = ({setIsLogin}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Card
          sx={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#B6D0E2",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              marginTop: "50px",
              fontFamily: '"Press Start 2P", serif',
              padding: "20px",
              marginBottom: "50px",
            }}
          >
            Login
          </Typography>

          <TextField
            sx={{
              width: "300px",
              color: "black",
              marginTop: "20px",
              opacity: "30%",
              bgcolor: "white",
              borderRadius: "10px",
            }}
            id="outlined-basic"
            label="E-mail id"
            variant="outlined"
          />

          <TextField
            sx={{
              width: "300px",
              marginTop: "20px",
              marginBottom: "50px",
              opacity: "30%",
              bgcolor: "white",
              borderRadius: "10px",
            }}
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
          />

          <Box>
            <Button sx={{ marginRight: "10px" }} variant="contained">
              Login
            </Button>
            <Button variant="contained">Clear</Button>
          </Box>

          <Typography sx={{marginTop:'30px'}}>
            Don't have an account ?
            <Button onClick={()=>setIsLogin(false)} sx={{ textDecoration: "underline" }}>click here</Button>
          </Typography>
        </Card>
      </Box>
    </>
  );
};

export default Login;
