import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function MenuPopupState() {
  const navigate = useNavigate();
  const { worker, logoutWorker } = React.useContext(AppContext);
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });
  return (
    <div>
      <StyledButton variant="contained" {...bindTrigger(popupState)}>
        {worker?.firstName} {worker?.lastName} <KeyboardArrowDownIcon />{" "}
      </StyledButton>
      <Menu {...bindMenu(popupState)}>
        <MenuItem
          onClick={() => {
            navigate("/profilePage");
          }}
          onMouseDown={popupState.close}
        >
          MyProfile
        </MenuItem>
        <MenuItem
          onClick={() => {
            logoutWorker("/auth/logout");
          }}
          onMouseDown={popupState.close}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

export const StyledButton = styled(Button)`
  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
    padding: 4px 8px;
  }
`;
