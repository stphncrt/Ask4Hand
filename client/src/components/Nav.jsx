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
  const navigate = useNavigate();
  return (
    <StyledAppBar
      position="static"
      sx={{
        backgroundColor: "#f1faee",
        boxShadow: "none",
        padding: "1.5rem",
      }}
    >
      <Toolbar>
        <StyledTypography
          color="primary"
          variant="h4"
          component="div"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Ask4Hand
        </StyledTypography>
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
    </StyledAppBar>
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

export const StyledAppBar = styled(AppBar)`
  @media screen and (max-width: 600px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const StyledTypography = styled(Typography)`
  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
  }
`;
