import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import {
	Button,
	TextField,
	Grid,
	Container,
	Select,
	MenuItem,
	InputLabel,
	Typography,
} from "@mui/material";

const styleFunc = makeStyles({
	wrapper: {
		margin: "3rem auto",
		boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
		padding: "1rem",
	},
	text: {
		margin: "1rem 0rem",
		textAlign: "center",
		fontSize: "1.4rem",
	},
});

const RegisterPage = () => {
	const signUpStyles = styleFunc();
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			title: "",
			email: "",
			phoneNumber: "",
			category: "",
			desc: "",
			street: "",
			postalCode: "",
			city: "",
			hourlyRate: "",
			workRange: "",
			password: "",
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	const titles = ["repairer", "painter", "electrician"];
	return (
		<Container className={signUpStyles.wrapper} maxWidth="sm">
			<Typography className={signUpStyles.text}>
				Pleaser enter your credentials to get registered..
			</Typography>
			<form onSubmit={formik.handleSubmit}>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<TextField
							name="firstName"
							label="First Name"
							variant="outlined"
							fullWidth
							value={formik.values.firstName}
							onChange={formik.handleChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							label="Last Name"
							variant="outlined"
							fullWidth
							value={formik.values.lastName}
							onChange={formik.handleChange}
							name="lastName"
						/>
					</Grid>
					<Grid item xs={12}>
						<InputLabel id="demo-simple-select-label">Title</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							variant="outlined"
							value="Age"
							label="Age"
							onChange={formik.handleChange}
							fullWidth>
							{titles.map((title) => (
								<MenuItem value={title}>{title}</MenuItem>
							))}
						</Select>
					</Grid>

					<Grid item xs={12}>
						<TextField
							label="Email"
							variant="outlined"
							fullWidth
							value={formik.values.email}
							onChange={formik.handleChange}
							name="email"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Phone Number"
							variant="outlined"
							fullWidth
							value={formik.values.phoneNumber}
							onChange={formik.handleChange}
							name="phoneNumber"
							type="number"
						/>
					</Grid>
					<Grid item xs={12}>
						<InputLabel id="demo-simple-select-label">Category</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							variant="outlined"
							value="Category"
							label="Category"
							name="title"
							fullWidth>
							{titles.map((title) => (
								<MenuItem value={title}>{title}</MenuItem>
							))}
						</Select>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="outlined-multiline-static"
							label="Description"
							variant="outlined"
							fullWidth
							multiline
							rows={4}
							defaultValue="Describe Your Job"
							value={formik.values.desc}
							onChange={formik.handleChange}
							name="desc"
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							id="outlined-multiline-static"
							label="Street"
							variant="outlined"
							fullWidth
							rows={4}
							value={formik.values.street}
							onChange={formik.handleChange}
							name="street"
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							id="outlined-multiline-static"
							label="Postal Code"
							variant="outlined"
							fullWidth
							rows={4}
							value={formik.values.postalCode}
							onChange={formik.handleChange}
							name="postalCode"
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							id="outlined-multiline-static"
							label="City"
							variant="outlined"
							fullWidth
							rows={4}
							value={formik.values.city}
							onChange={formik.handleChange}
							name="city"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="outlined-multiline-static"
							label="Hourly Rate"
							variant="outlined"
							fullWidth
							rows={4}
							value={formik.values.hourlyRate}
							onChange={formik.handleChange}
							name="hourlyRate"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="outlined-multiline-static"
							label="Work Range"
							variant="outlined"
							fullWidth
							rows={4}
							value={formik.values.workRange}
							onChange={formik.handleChange}
							name="workRange"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							label="Create Password"
							variant="outlined"
							fullWidth
							value={formik.values.password}
							onChange={formik.handleChange}
							name="password"
							type="password"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							label="Validate Password"
							variant="outlined"
							fullWidth
							value={formik.values.password}
							onChange={formik.handleChange}
							name="password"
							type="password"
						/>
					</Grid>
					<Grid item xs={12}>
						<Button type="submit" variant="contained" color="primary" fullWidth>
							Register
						</Button>
					</Grid>
				</Grid>
			</form>
		</Container>
	);
};

export default RegisterPage;
