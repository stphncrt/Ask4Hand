import React, { useState, useEffect } from "react";
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
import * as Yup from "yup";

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
	const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

	const RegisterValidationSchema = Yup.object({
		firstName: Yup.string()
			.max(15, "Must be 15 characters or less")
			.required("Required"),
		lastName: Yup.string()
			.max(20, "Must be 20 characters or less")
			.required("Required"),
		title: Yup.string()
			.required("Required"),
		email: Yup.string().email("Invalid email address").required("Required"),
		phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').max(10, "Must be 10 characters or less").required("Required"),
    category: Yup.string()
			.required("Required"),
    desc: Yup.string()
    .required("Required"),
    street: Yup.string()
			.required("Required"),
    postalCode: Yup.string().required("Required"),
    city: Yup.string()
			.required("Required"),
    hourlyRate: Yup.number()
			.required("Required"),
    workRange: Yup.string()
			.required("Required"),
    password: Yup.string()
      .required('No password provided.') 
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
      validatePassword: Yup.string()
      .required('No password provided.') 
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')

	})
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
        validatePassword: "",
    },
		validationSchema: RegisterValidationSchema,
		
    
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const titles = ["repairer", "painter", "electrician"];
  const [imageList, setImageList] = useState([""]);

  const addImageInputField = () => {
    setImageList([...imageList, ""]);
  };
  const handleImageUrlChange = (index, event) => {
    const updatedImageList = [...imageList];
    updatedImageList[index] = event.target.value;
    setImageList(updatedImageList);
  };

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
              error={formik.errors.firstName}
              helperText={formik.errors.firstName}
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
              error={formik.errors.lastName}
              helperText={formik.errors.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel id="demo-simple-select-label">Title</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              variant="outlined"
              value="title"
              label="title"
              name="title"
              onChange={formik.handleChange}
              fullWidth
              error={formik.errors.title}
              helperText={formik.errors.title}
            >
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
              error={formik.errors.email}
              helperText={formik.errors.email}
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
              error={formik.errors.phoneNumber}
              helperText={formik.errors.phoneNumber}
             />
          </Grid>

          {imageList.map((item, index) => (
            <Grid item xs={12} key={index}>
              <TextField
                label="Image Url"
                variant="outlined"
                fullWidth
                value={item}
                onChange={(event) => handleImageUrlChange(index, event)}
                name="imageUrl"
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={addImageInputField}
            >
              Add Image
            </Button>
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
              fullWidth
              error={formik.errors.category}
              helperText={formik.errors.category}
            >
            {titles.map((title) => (
                <MenuItem value={title} key={title}>
                  {title}
                </MenuItem>
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
              error={formik.errors.desc}
              helperText={formik.errors.desc}
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
              error={formik.errors.street}
              helperText={formik.errors.street}
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
              error={formik.errors.postalCode}
              helperText={formik.errors.postalCode}
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
              error={formik.errors.city}
              helperText={formik.errors.city}
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
              error={formik.errors.hourlyRate}
              helperText={formik.errors.hourlyRate}
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
              error={formik.errors.workRange}
              helperText={formik.errors.workRange}
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
              error={formik.errors.password}
              helperText={formik.errors.password}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Validate Password"
              variant="outlined"
              fullWidth
              value={formik.values.validatePassword}
              onChange={formik.handleChange}
              name="validatePassword"
              type="password"
              error={formik.errors.validatePassword}
              helperText={formik.errors.validatePassword}
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
