import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import AppContext from "../../context/AppContext";
import { Button, TextField, Grid, Container, Typography } from "@mui/material";
import { LoginValidationSchema } from "../../util/formValidation";
import { StyledWrapper } from "../RegisterPage/RegisterPage";

const styleFunc = makeStyles({
	wrapper: {
		margin: "3rem auto",
		boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
		padding: "5rem",
		backgroundColor: "rgb(241,250,238)",
	},
	text: {
		margin: "1rem 0rem",
		textAlign: "center",
		fontSize: "1.4rem",
	},
});

const LoginPage = () => {
	const { postWorker } = useContext(AppContext);
	const signUpStyles = styleFunc();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: LoginValidationSchema,
		onSubmit: (values, props) => {
			postWorker("/auth/login", values);
			setTimeout(() => {
				props.resetForm();
				props.setSubmitting(false);
			}, 500);
		},
	});

	return (
		<>
			<StyledWrapper style={{ minHeight: "calc(100vh - 266px)" }}>
				<Container className={signUpStyles.wrapper} maxWidth="sm">
					<Typography className={signUpStyles.text}>
						Pleaser enter your email and password to login..
					</Typography>
					<form onSubmit={formik.handleSubmit}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<TextField
									label="Enter Your Email"
									variant="outlined"
									fullWidth
									value={formik.values.email}
									onChange={formik.handleChange}
									name="email"
								/>
							</Grid>
							{formik.touched.email && formik.errors.email ? (
								<Grid item xs={12} style={{ color: "red" }}>
									{formik.errors.email}
								</Grid>
							) : null}

							<Grid item xs={12}>
								<TextField
									label="Enter Your Password"
									variant="outlined"
									fullWidth
									value={formik.values.password}
									onChange={formik.handleChange}
									name="password"
									type="password"
								/>
							</Grid>
							{formik.touched.password && formik.errors.password ? (
								<Grid item xs={12} style={{ color: "red" }}>
									{formik.errors.password}
								</Grid>
							) : null}
							<Grid item xs={12}>
								<Button
									type="submit"
									disabled={formik.isSubmitting}
									variant="contained"
									color="primary"
									fullWidth>
									{formik.isSubmitting ? "Checking" : "Login"}
								</Button>
							</Grid>
						</Grid>
					</form>
				</Container>
			</StyledWrapper>
		</>
	);
};

export default LoginPage;
