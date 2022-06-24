import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function MenuPopupState() {
	const navigate = useNavigate();
	const { worker, logoutWorker } = React.useContext(AppContext);
	return (
		<PopupState variant="popover" popupId="demo-popup-menu">
			{(popupState) => (
				<React.Fragment>
					<Button variant="contained" {...bindTrigger(popupState)}>
						{worker.firstName} {worker.lastName} <KeyboardArrowDownIcon />
					</Button>
					<Menu {...bindMenu(popupState)}>
						<MenuItem
							onClick={() => {
								navigate("/profilePage");
								popupState.close;
							}}>
							My Profile
						</MenuItem>
						<MenuItem
							onClick={() => {
								logoutWorker("/auth/logout");
								popupState.close;
							}}>
							Logout
						</MenuItem>
					</Menu>
				</React.Fragment>
			)}
		</PopupState>
	);
}
