import React from "react";
import { Grid, Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <Grid container className="wrapper">
        <Grid item xs={12} md={4} className="section">
          <Typography variant="h6" className="title">
            COMPANY
          </Typography>
          <Link href="" className="link">
            About us
          </Link>
        </Grid>
        <Grid item xs={12} md={4} className="section">
          <Typography variant="h6" className="title">
            INFO
          </Typography>
          <Link
            href="https://github.com/HackYourFuture/class35-project-zzpers"
            className="link"
          >
            Made with <FavoriteIcon color="error" fontSize="small" /> by
            LastNodeBenders
          </Link>
        </Grid>
        <Grid item xs={12} md={4} className="section">
          <Typography variant="h6" className="title">
            CONNECT
          </Typography>
          <Grid>
            <FacebookIcon color="primary" fontSize="large" className="icon" />
            <YouTubeIcon color="error" fontSize="large" className="icon" />
            <TwitterIcon color="primary" fontSize="large" className="icon" />
          </Grid>
        </Grid>
      </Grid>
    </StyledFooter>
  );
}

export default Footer;

export const StyledFooter = styled.div`
  background-color: #1d3557;
  padding: 1.5rem 0rem;

  .section {
    margin: 1rem 0;
    text-align: center;
  }
  .title {
    color: #a8dadc;
  }
  .link {
    color: #fff;
  }
  .icon {
    margin: 0 0.4rem;
    background-color: #fff;
    border-radius: 50%;
    padding: 4px;
    cursor: pointer;
  }
  .icon:hover {
    background-color: #e7e7e7;
  }
`;
