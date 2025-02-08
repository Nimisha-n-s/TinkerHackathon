import React from 'react'
import RecyclingIcon from "@mui/icons-material/Recycling";
import { Container, Typography, Box, Link, TextField, Button, IconButton } from "@mui/material";
import { Twitter, LinkedIn, Facebook, Instagram, GitHub, Phone, ArrowForward } from "@mui/icons-material";
// import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
        <Container sx={{ height: 300, mt: 5, width: "100%" }}>
      <Box display="flex" justifyContent="space-between">
        {/* Intro */}
        <Box sx={{ width: 400 }}>
        <Typography variant="h5">
              <Box component="span" display="flex" alignItems="center" gap={1}>
                <RecyclingIcon /> Renewora
              </Box>
            </Typography>
          <Typography>
            Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.
          </Typography>
          <Typography>coe licensed Luminar, docs cc by 3.0</Typography>
          <Typography>Currently v5.3.2</Typography>
        </Box>
        {/* Links */}
        <Box display="flex" flexDirection="column">
          <Typography variant="h5">Links</Typography>
          {/* <Link component={RouterLink} to="/" sx={{ textDecoration: "none", color: "white" }}>
            Home page
          </Link> */}
          {/* <Link component={RouterLink} to="/login" sx={{ textDecoration: "none", color: "white" }}>
            Login
          </Link> */}
          {/* <Link component={RouterLink} to="/projects" sx={{ textDecoration: "none", color: "white" }}>
            Projects
          </Link> */}
        </Box>
        {/* Guides */}
        <Box display="flex" flexDirection="column">
          <Typography variant="h5">Guides</Typography>
          {/* <Link href="https://react.dev/" sx={{ textDecoration: "none", color: "white" }}>
            React
          </Link>
          <Link href="https://react-bootstrap.netlify.app/" sx={{ textDecoration: "none", color: "white" }}>
            React Bootstrap
          </Link>
          <Link href="https://www.npmjs.com/package/react-router-dom" sx={{ textDecoration: "none", color: "white" }}>
            React Router
          </Link> */}
        </Box>
        {/* Contact */}
        <Box display="flex" flexDirection="column">
          <Typography variant="h5">Contact Us</Typography>
          <Box display="flex">
            <TextField placeholder="Enter your E-mail" variant="outlined" size="small" sx={{ mr: 2 }} />
            <Button variant="contained" color="info">
              <ArrowForward />
            </Button>
          </Box>
          <Box display="flex" justifyContent="space-between" mt={3}>
            <IconButton component="a" href="https://twitter.com" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton component="a" href="https://linkedin.com" color="inherit">
              <LinkedIn />
            </IconButton>
            <IconButton component="a" href="https://facebook.com" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton component="a" href="https://instagram.com" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton component="a" href="https://github.com" color="inherit">
              <GitHub />
            </IconButton>
            <IconButton component="a" href="#" color="inherit">
              <Phone />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Container>
    </>
  )
}

export default Footer