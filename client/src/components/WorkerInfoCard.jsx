import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ModalCard from "./ModalCard";

export default function WorkerInfoCard({ worker }) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
						R
					</Avatar>
				}
				title={`${worker?.firstName} ${worker?.lastName}`}
				subheader={worker.occupationId}
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{worker?.description}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<ModalCard images={worker.images} />
			</CardActions>
		</Card>
	);
}
