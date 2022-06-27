import React from "react";
import { Grid, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <>
      <Grid
        container
        spacing={7}
        sx={{ padding: 7, my: 0, minHeight: "calc(100vh - 266px)" }}
      >
        <Grid item xs={12} md={6} alignItems="center">
          <Typography variant="h3" mb={4}>
            Our History
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            tempore eius accusamus rem aliquid est quasi nesciunt voluptatem
            porro nulla accusantium debitis, iusto quibusdam praesentium nobis
            facere deleniti id culpa! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Odio vero laborum labore placeat velit quia minus
            autem distinctio, laudantium aperiam vel est ut ab. Quos assumenda
            eligendi neque error maxime.
          </Typography>
          <Typography variant="h5" mt={3} mb={2}>
            Contact Info
          </Typography>
          <Typography variant="body1" mb={1}>
            Address: Amstelstraat 1, 1234 AB, Amsterdam
          </Typography>
          <Typography variant="body1" mb={1}>
            Email: ask4hand@info.com
          </Typography>
          <Typography variant="body1" mb={1}>
            Tel: +31 6 12345678
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            alt="about us image"
            style={{ width: "100%", height: "100%" }}
          ></img>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
