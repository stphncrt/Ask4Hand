import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		justifyContent: "center",
	},
}));
export default function PaginationComponent({ display }) {
	const classes = useStyles();
	return (
		<Stack
			spacing={2}
			sx={{ display: display, textAlign: "center", width: "35%", margin: "0 auto" }}>
			<Pagination
				count={10}
				renderItem={(item) => (
					<PaginationItem
						components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
						{...item}
					/>
				)}
			/>
		</Stack>
	);
}
