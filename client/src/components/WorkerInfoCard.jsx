import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ModalCard from "./ModalCard";
import { Grid } from "@mui/material";

export default function WorkerInfoCard({ worker, titles }) {
	const selectedTitle = titles?.find((title) => title._id === worker.occupationId);

	return (
		<Grid
			container
			sx={{
				boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
				height: "23rem",
				padding: "1rem",
			}}>
			<Grid item xs={6} md={6} sx={{ margin: "auto" }}>
				<Avatar
					src={worker?.profileImage}
					sx={{ bgcolor: red[500], width: 92, height: 92 }}></Avatar>
			</Grid>
			<Grid item xs={6} md={6} sx={{ margin: "auto" }}>
				<Typography color="text.primary" sx={{ fontWeight: "bold" }}>
					{worker?.firstName} {worker?.lastName}
				</Typography>
				<Typography variant="subtitle2" color="text.secondary">
					{selectedTitle.name}
				</Typography>
			</Grid>
			<Grid item xs={6} md={6} sx={{ margin: "auto" }}>
				<Typography variant="subtitle2" color="text.secondary">
					{worker?.email}
				</Typography>
				<Typography variant="subtitle2" color="text.secondary">
					Tel: {worker?.phoneNumber}
				</Typography>
			</Grid>
			<Grid item xs={6} md={6} sx={{ margin: "auto" }}>
				<Typography variant="subtitle2" color="text.secondary">
					Hourly Rate: {worker?.hourlyRate} €
				</Typography>
				<Typography variant="subtitle2" color="text.secondary">
					City: {worker?.city}
				</Typography>
			</Grid>
			<Grid
				item
				xs={12}
				sx={{
					overflow: "hidden",
					textOverflow: "ellipsis",
					display: "-webkit-box",
					"	-webkit-line-clamp": "5",
					"	-webkit-box-orient": "vertical",
				}}>
				<Typography variant="body2" color="text.secondary">
					{worker?.description}
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<ModalCard images={worker?.images} />
			</Grid>
		</Grid>
	);
}
