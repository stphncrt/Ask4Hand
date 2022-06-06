import React from "react";
import {
  TextField,
  Grid,
  Container,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import Button from "@mui/material/Button";




const styleFunc = makeStyles({
  wrapper: {
    marginTop: "5rem",
  },
});

const RegisterPage = () => {
  const signUpStyles = styleFunc();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  return (
    <Container className={signUpStyles.wrapper} maxWidth="sm">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              name="firstName"
              label="First Name"
              variant="outlined"
              fullWidth
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
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
              fullWidth
            >
              <MenuItem value={"Repair"}>Repair</MenuItem>
              <MenuItem value={"Plumber"}>Plumber</MenuItem>
              <MenuItem value={"Painter"}>Painter</MenuItem>
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
              fullWidth
            >
              <MenuItem value={"Repair"}>Repair</MenuItem>
              <MenuItem value={"Plumber"}>Plumber</MenuItem>
              <MenuItem value={"Painter"}>Painter</MenuItem>
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
        />

          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
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
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default RegisterPage;
