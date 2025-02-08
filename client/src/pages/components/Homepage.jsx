import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const Homepage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#F0FFFF",
      }}
    >
        {/* card 1 */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          image="https://biofriendlyplanet.com/app/uploads/2023/01/iStock-627975710-oil-drum-furniture-1.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      {/* card 2 */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia

          component="img"
          alt="green iguana"
          height="250"
          image="https://media.licdn.com/dms/image/v2/D5612AQGz71OIkFu1cQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1689822013131?e=2147483647&v=beta&t=31tH2NI3ikyp2Bp-yzy4TxqXkXnL_oGYcazeOUGnGMs"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      {/* card 3 */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          image="https://www.simpledecor.vn/wp-content/uploads/2021/12/Natural_Storage_Baskets_Made_In_Vietnam.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Homepage;
