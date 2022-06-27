import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import MenuPopupState from "./PopUpMenu";

export default function ButtonAppBar() {
  const { worker } = React.useContext(AppContext);
  let navigate = useNavigate();
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#f1faee",
        boxShadow: "none",
        padding: "1.5rem",
      }}
    >
      <Toolbar>
        <Typography
          color="primary"
          variant="h4"
          component="div"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Ask4Hand
        </Typography>
        {!worker ? (
          <>
            <StyledButton to="/register" variant="outlined">
              Register
            </StyledButton>
            <StyledButton to="/login" variant="outlined">
              Login
            </StyledButton>
          </>
        ) : (
          <MenuPopupState />
        )}
      </Toolbar>
    </AppBar>
  );
}

export const StyledButton = styled(Link)`
  text-decoration: none;
  margin-left: 1rem;
  color: #1565c0;
  font-size: 20px;
  font-weight: 500;

  :hover {
    color: #4c91db;
  }
`;
