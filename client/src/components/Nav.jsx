import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import MenuPopupState from "./PopUpMenu";

export default function ButtonAppBar() {
  const { worker } = React.useContext(AppContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color="primary"
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Ask4Hand
          </Typography>
          {!worker ? (
            <>
              <StyledButton to="/register" variant="outlined" sx={{ mr: 2 }}>
                Register
              </StyledButton>
              <StyledButton to="/login" variant="outlined">
                Login
              </StyledButton>
            </>
          ) : (
            <MenuPopupState />
          )}
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
export const StyledToolbar = styled(Toolbar)`
  background-color: #f1faee;
`;

export const StyledButton = styled(Link)`
  text-decoration: none;
  margin: 3px;
`;


