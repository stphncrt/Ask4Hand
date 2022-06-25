import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ModalCard from "./ModalCard";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	container: {
		position: "relative",
		boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
		height: "100%",
	},
	desc: {
		marginTop: "0",
		marginBottom: "10px",
		overflow: "hidden",
		textOverflow: "ellipsis",
		display: "-webkit-box",
		"	-webkit-line-clamp": "5" /* number of lines to show */,
		"	-webkit-box-orient": "vertical",
	},
	modal: {
		position: "absolute",
		bottom: "1px",
		paddingBottom: "0px",
	},
}));
const Root = styled("div")(({ theme }) => ({
	padding: theme.spacing(1),
	[theme.breakpoints.down("sm")]: {
		width: "100%",
	},
	[theme.breakpoints.up("sm")]: {
		width: "32%",
	},
}));

export default function WorkerInfoCard({ worker, titles }) {
	const classes = useStyles();
	const selectedTitle = titles?.find((title) => title._id === worker.occupationId);

	return (
		<Root>
			<Card className={classes.container}>
				<CardHeader
					avatar={
						<Avatar
							src={worker.profileImage}
							sx={{ bgcolor: red[500], width: 92, height: 92 }}
							aria-label="recipe"></Avatar>
					}
					title={`${worker?.firstName} ${worker?.lastName}`}
					subheader={selectedTitle.name}
				/>
				<CardContent>
					<Typography className={classes.desc} variant="body2" color="text.secondary">
						{worker?.description}
					</Typography>
				</CardContent>
				<CardActions className={classes.modal}>
					<ModalCard images={worker.images} />
				</CardActions>
			</Card>
		</Root>
	);
}
