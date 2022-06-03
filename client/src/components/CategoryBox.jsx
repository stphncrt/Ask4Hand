import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MultiActionAreaCard({ category, url }) {
  return (
    <Card sx={{ maxWidth: 345, m: 3 }}>
      <CardActionArea>
        <CardMedia
          style={{ width: 150, height: 100 }}
          component="img"
          image={url}
          alt={category}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
