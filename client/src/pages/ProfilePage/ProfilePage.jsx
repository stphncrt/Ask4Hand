import React, { useState, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AppContext from "../../context/AppContext";
import WorkerForm from "../../components/WorkerForm";
import Modal from "@mui/material/Modal";
import { Box } from "@material-ui/core";
import { Grid, Card, CardContent } from "@mui/material";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

const ProfilePage = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
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
    bgColor: "background.paper",
    overflow: "scroll",
    boxShadow: 24,
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, padding: "2rem" }}>
        <Grid container>
          <a
            style={{
              margin: "1.5rem auto",
              padding: "0.7rem 2rem",
              backgroundColor: isHovering ? "#205ba3" : "#2d76d2",
              fontWeight: "bold",
              border: "1px solid #2d76d2",
              color: "white",
              cursor: isHovering ? "pointer" : "none",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleOpen()}
          >
            Edit Profile
          </a>
        </Grid>
        <Avatar
          src={worker?.profileImage}
          sx={{
            width: 200,
            height: 200,
            margin: "1.5rem auto",
          }}
        ></Avatar>
        <Typography
          gutterBottom
          variant="h4"
          align="center"
          color="primary"
          sx={{ mb: 4 }}
        >
          {worker?.firstName} {worker?.lastName}
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="primary"
              align="center"
              sx={{ mb: 3 }}
            >
              Previous Work Photos
            </Typography>
            <Card align sx={{ boxShadow: "none" }}>
              <CardContent>
                <Carousel images={worker?.images} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              component="div"
              color="primary"
              align="center"
              sx={{ mb: 3 }}
            >
              Credentials
            </Typography>
            <Card align sx={{ boxShadow: "none" }}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Title: {workerTitle && workerTitle}
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
                <Typography gutterBottom variant="h5" sx={{ mt: 3 }}>
                  About Me:
                </Typography>
                <Typography variant="h6">{worker?.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledBy="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <WorkerForm />
          </Box>
        </Modal>
      </Box>
      <Footer />
    </>
  );
};

export default ProfilePage;
