import React from "react";
import cleaner from "../../assets/cleaner1.jpeg";
import flooring from "../../assets/flooring.jpeg";
import cleanerLady from "../../assets/cleaner2.jpeg";
import { Grid, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function DescriptionSection() {
  return (
    <Grid container spacing={2} bgcolor="#ebf1e9" pl={7} pr={7}>
      <Grid item xs={12} md={6}>
        <ImageList sx={{ width: 300, height: 300 }} cols={3} gap={5}>
          <ImageList sx={{ width: 150, height: 300 }} cols={1} rows={1} gap={5}>
            <ImageListItem sx={{ width: 150, height: 150 }}>
              <img src={cleanerLady} />
            </ImageListItem>
            <ImageListItem>
              <img style={{ height: 150 }} src={flooring} />
            </ImageListItem>
          </ImageList>
          <ImageListItem cols={2} row={2}>
            <img src={cleaner} />
          </ImageListItem>
        </ImageList>
      </Grid>
      <Grid item xs={12} md={6} gap={5} justify="center">
        <Typography
          align="center"
          variant="h5"
          color="primary"
          m={4}
          sx={{ fontWeight: "600" }}
        >
          About Our Company
        </Typography>
        <Typography paragraph align="center">
          We ensure the best quality clean at the best price based on your
          budget. We do not stop until you are 100% satisfied with the results
          of our services. Worrying about cleaning is at the bottom of your
          priority list, but the top of ours. Our cleaners are trained to help
          provide the best version of your space by focusing on the little
          details...
        </Typography>
      </Grid>
    </Grid>
  );
}
export default DescriptionSection;
