import React, { useState, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AppContext from "../../context/AppContext";
import WorkerForm from "../../components/WorkerForm";
import { Box, Button, Container } from "@material-ui/core";
import styled from "styled-components";

const ProfilePage = () => {
  const { worker, titles } = useContext(AppContext);
  const workerTitle = titles?.find(
    (title) => title._id === worker.occupationId
  ).name;
  const [isEditActive, setIsEditActive] = useState(false);
  return (
    <StyledWrapper>
      <Box class="Box-Container">
        <Avatar src={worker?.profileImage} class="avatar"></Avatar>
        <Container class="typography">
          <Typography variant="h4">
            Name: {worker?.firstName} {worker?.lastName}
          </Typography>
          <Typography variant="h4">Title: {workerTitle}</Typography>
          <Typography variant="h4">City: {worker?.city}</Typography>
          <Typography variant="h4">E-mail: {worker?.email}</Typography>
          <Typography variant="h4">
            Phone Number: {worker?.phoneNumber}
          </Typography>
        </Container>
      </Box>
      <Typography variant="h4" p={2}>
        Description: {worker?.description}
      </Typography>
      <Button
        style={{ maxWidth: "100px" }}
        variant="contained"
        color="primary"
        onClick={() => {
          setIsEditActive(!isEditActive);
        }}
      >
        Edit
      </Button>
      <WorkerForm
        className={`workerForm ${isEditActive && "workerForm-open"}`}
      />
    </StyledWrapper>
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
    flex-direction: row;
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
  .workerForm {
    display: none;
  }
  .workerForm-open {
    display: block;
  }
`;
