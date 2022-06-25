import React, { useState, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AppContext from "../../context/AppContext";
import WorkerForm from "../../components/WorkerForm";
import Modal from "@mui/material/Modal";
import { Box, Button } from "@material-ui/core";
import styled from "styled-components";
import { Grid, Card, CardActionArea, CardContent } from "@mui/material";
import Carousel from "../../components/Carousel";

const ProfilePage = () => {
  const { worker, titles } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const workerTitle = titles?.find(
    (title) => title._id === worker?.occupationId
  )?.name;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 500,
    bgcolor: "background.paper",
    overflow: "scroll",
    boxShadow: 24,
  };

  return (
    <Box sx={{ flexGrow: 1, padding: "2rem" }}>
      <Grid container>
        <Button
          size="large"
          style={{
            margin: "2rem auto",
          }}
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleOpen}
        >
          Edit Profile
        </Button>
      </Grid>
      <Avatar
        src={worker?.profileImage}
        style={{
          width: 200,
          height: 200,
          margin: "2rem auto",
          marginTop: 0,
        }}
      ></Avatar>
      <Typography gutterBottom variant="h4" align="center" color="primary">
        {worker?.firstName} {worker?.lastName}
      </Typography>
      <Grid container spacing={10} style={{ padding: "0rem 3rem" }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "33rem" }}>
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                  align="center"
                >
                  Previous Work Photos
                </Typography>
                <div
                  style={{
                    margin: "2rem",
                  }}
                >
                  <Carousel images={worker?.images} />
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "33rem" }}>
            <CardActionArea>
              <CardContent>
                <Typography
                  style={{ marginBottom: "2rem" }}
                  variant="h5"
                  component="div"
                  color="primary"
                  align="center"
                >
                  Credentials
                </Typography>
                <Typography gutterBottom variant="h5">
                  Title: {workerTitle}
                </Typography>
                <Typography gutterBottom variant="h5">
                  City: {worker?.city}
                </Typography>
                <Typography gutterBottom variant="h5">
                  E-mail: {worker?.email}
                </Typography>
                <Typography gutterBottom variant="h5">
                  Phone Number: {worker?.phoneNumber}
                </Typography>
                <Typography gutterBottom variant="h5">
                  Address : {worker?.postalCode} {worker?.city}
                </Typography>
                <Typography gutterBottom variant="h5">
                  Hourly Rate : {worker?.hourlyRate}
                </Typography>
                <Typography gutterBottom variant="h5">
                  Work Range : {worker?.workRange}
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  style={{ paddingBottom: "4rem" }}
                >
                  {worker?.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* <Grid container>
            <Grid item xs={12} md={6} justifyContent="center">
              <Typography variant="h6">Title: {workerTitle}</Typography>
              <Typography variant="h6">City: {worker?.city}</Typography>
              <Typography variant="h6">E-mail: {worker?.email}</Typography>
              <Typography variant="h6">
                Phone Number: {worker?.phoneNumber}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" p={2}>
                About me
              </Typography>
              <Typography>{worker?.description}</Typography>
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <WorkerForm />
        </Box>
      </Modal>
    </Box>
  );
};

export default ProfilePage;
export const StyledWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  width: 65%;
  margin: 10% auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  .Box-Container {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    padding: 1rem;
  }
  /* .avatar {
    width: %20;
  } */
  .typography {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  /* .modal {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 600px;
		height: 500px;
		background-color: grey;
		overflow: scroll;
		box-shadow: 24;
	} */
`;
