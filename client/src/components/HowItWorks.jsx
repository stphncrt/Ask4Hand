import { Typography, Grid } from "@mui/material";
import React from "react";
import logoTell from "../../assets/hiw1.jpeg";
import logoReview from "../../assets/hiw2.jpeg";
import logoHire from "../../assets/hiw3.jpeg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	ImgContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "110px",
		height: "110px",
		borderRadius: "50%",
		backgroundColor: "#fff",
		" -webkit-box-shadow": " 2px 3px 30px rgb(188 207 219 / 65%)",
		"-moz-box-shadow": "2px 3px 30px rgba(188, 207, 219, 0.65)",
		boxShadow: "2px 3px 30px rgb(188 207 219 / 65%)",
		lineHeight: " 110px",
		margin: "0 auto",
	},
});
function HowItWorks() {
	const classes = useStyles();
	return (
		<Grid container bgcolor={" #f1faee"} p={3}>
			<Grid item xs={12} align="center">
				<Typography variant="h5" color="primary" mb={2} sx={{ fontWeight: "600" }}>
					How It Works
				</Typography>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={12} md={4}>
					<Grid className={classes.ImgContainer}>
						<img src={logoTell} />
					</Grid>
					<Typography align="center" variant="h6" color="primary" m={2} sx={{ fontWeight: "600" }}>
						Tell us what you need
					</Typography>
					<Typography align="center" variant="body1">
						Book & pay online. We’ll match you with a trusted, experienced house cleaner{" "}
					</Typography>
				</Grid>
				<Grid item xs={12} md={4}>
					<Grid className={classes.ImgContainer}>
						<img src={logoReview} />
					</Grid>
					<Typography align="center" variant="h6" color="primary" m={2} sx={{ fontWeight: "600" }}>
						Review service providers
					</Typography>
					<Typography align="center" variant="body1">
						Within seconds, you’ll receive expert service providers profile with their ratings.
						choose one among them.
					</Typography>
				</Grid>
				<Grid item xs={12} md={4}>
					<Grid className={classes.ImgContainer}>
						<img src={logoHire} />
					</Grid>
					<Typography align="center" variant="h6" color="primary" m={2} sx={{ fontWeight: "600" }}>
						Hire the right pro
					</Typography>
					<Typography align="center" variant="body1">
						Compare prices, profiles, and reviews, then hire the pro that’s right for you.
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default HowItWorks;
