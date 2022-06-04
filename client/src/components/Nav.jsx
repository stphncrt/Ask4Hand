import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";

export default function ButtonAppBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<StyledToolbar>
					<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton>
					<Typography color="#E63946" variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Ask4Hand
					</Typography>
					<StyledButton color="inherit">Register</StyledButton>
					<StyledButton color="inherit">Login</StyledButton>
				</StyledToolbar>
			</AppBar>
		</Box>
	);
}
export const StyledToolbar = styled(Toolbar)`
	background-color: #a8dadc;
`;
export const StyledButton = styled(Button)`
	color: black;
`;
