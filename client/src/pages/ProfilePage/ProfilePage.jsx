import React, { useState, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AppContext from "../../context/AppContext";
import WorkerForm from "../../components/WorkerForm";
import Modal from "@mui/material/Modal";
import { Box, Button } from "@material-ui/core";
import styled from "styled-components";
import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";

const ProfilePage = () => {
  const { worker, titles } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const workerTitle = titles?.find(
    (title) => title._id === worker.occupationId
  ).name;

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
    // <StyledWrapper>
    //   <Box class="Box-Container">
    //     <Avatar src={worker?.profileImage} class="avatar"></Avatar>
    //     <Container class="typography">
    //       <Typography variant="h5">
    //         Name: {worker?.firstName} {worker?.lastName}
    //       </Typography>
    //       <Typography variant="h5">Title: {workerTitle}</Typography>
    //       <Typography variant="h5">City: {worker?.city}</Typography>
    //       <Typography variant="h5">E-mail: {worker?.email}</Typography>
    //       <Typography variant="h5">
    //         Phone Number: {worker?.phoneNumber}
    //       </Typography>
    //     </Container>
    //   </Box>
    //   <Typography variant="h6" p={2}>
    //     Description: {worker?.description}
    //   </Typography>
    //   <Button
    //     style={{ maxWidth: "100px", textAlign: "center" }}
    //     type="submit"
    //     variant="contained"
    //     color="primary"
    //     onClick={handleOpen}
    //   >
    //     Edit
    //   </Button>
    //   <Modal
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby="modal-modal-title"
    //     aria-describedby="modal-modal-description"
    //   >
    //     <Box sx={style}>
    //       <WorkerForm />
    //     </Box>
    //   </Modal>
    // </StyledWrapper>
    <Box sx={{ flexGrow: 1, padding: "5rem 3rem" }}>
      <Grid container spacing={5} gap={1}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <Avatar src={worker?.profileImage} class="avatar"></Avatar>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          justifyContent="center"
          sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <Typography variant="h5">
            Name: {worker?.firstName} {worker?.lastName}{" "}
          </Typography>
          <Typography variant="h6">Title: {workerTitle}</Typography>
          <Typography variant="h6">City: {worker?.city}</Typography>
          <Typography variant="h6">E-mail: {worker?.email}</Typography>
          <Typography variant="h6">
            Phone Number: {worker?.phoneNumber}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <Typography variant="h6" p={2}>
            About me
          </Typography>
          <Typography>{worker?.description}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          justifyContent="center"
          sx={{ height: "400px" }}
        >
          <Carousel images={worker?.images} />
        </Grid>

        <Grid item xs={6} md={3} lg={1} justifyContent="center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleOpen}
          >
            Edit
          </Button>
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
  .avatar {
    width: 20%;
  }
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
