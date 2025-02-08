import { Box, Button, Container, Divider, Typography } from "@mui/material";
import React from "react";

const Landingpage = ({ LoginTo }) => {
  return (
    <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    minWidth: "100%",
    backgroundColor: "#F0FFFF",
  }}
>
  {/* Header with Title & Icon */}
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 80px",
    }}
  ><Typography  variant="h2">♻️</Typography>
    <Typography
      variant="h1"
      sx={{
        fontFamily: '"Permanent Marker", serif',
        color: "rgb(82, 86, 89)",
        textShadow: "0 5px 2px rgba(4, 133, 6, 0.97)",
      }}
    >
      Renewora
    </Typography>
    <Typography  variant="h2">🌿</Typography>
  </Box>

  {/* Description */}
  <Typography
    sx={{
      marginTop: "100px",
      textAlign: "center",
      fontFamily: '"Playwrite DE Grund", serif',
      paddingX: "20px",
    }}
  >
    At Renewora, we believe in a sustainable future where waste transforms into
    wonder. Our mission is to redefine consumption by offering eco-friendly,
    recycled, and upcycled products that not only reduce environmental impact
    but also promote conscious living. From sustainably sourced home essentials
    to fashion-forward recycled accessories, every product at Renewora is
    thoughtfully curated to ensure minimal waste and maximum impact. We work
    with ethical manufacturers, artisans, and innovators who share our passion
    for sustainability. By choosing Renewora, you're not just shopping—you’re
    making a statement for a cleaner planet. Join us in embracing a greener
    lifestyle, one recycled product at a time. 🌍✨ <br />
    ♻️ Reduce. Reuse. Renewora.
  </Typography>

  <Divider sx={{ marginTop: "100px" }} />

  {/* Buttons Section */}
  <Box sx={{ textAlign: "center", marginY: "80px" }}>
    <Button
      onClick={LoginTo}
      sx={{ width: "300px", height: "50px", marginRight: "30px" }}
      variant="contained"
    >
      Login
    </Button>
    <Button sx={{ width: "300px", height: "50px" }} variant="contained">
      Dashboard
    </Button>
  </Box>
</Box>

  );
};

export default Landingpage;
