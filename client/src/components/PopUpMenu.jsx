import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
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
      <Button variant="contained" {...bindTrigger(popupState)}>
        {worker?.firstName} {worker?.lastName} <KeyboardArrowDownIcon />{" "}
      </Button>
      <Menu {...bindMenu(popupState)}>
        <MenuItem
          onClick={() => {
            navigate("/profilePage");
            popupState.close;
          }}
        >
          MyProfile
        </MenuItem>
        <MenuItem
          onClick={() => {
            logoutWorker("/auth/logout");
            popupState.close;
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
