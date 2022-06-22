import React, { useState, useContext, useEffect } from "react";
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
import AppContext from "../../context/AppContext";
import { getLatLng } from "../../api/getlatlng";
import searchBackgroundImage from "../../../assets/search-bar-background.jpeg";

const styleFunc = makeStyles({
  wrapper: {
    // margin: "3rem auto",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    padding: "3rem",
    backgroundColor: "white",
  },
  text: {
    margin: "1rem 0rem",
    textAlign: "center",
    fontSize: "1.4rem",
  },
  page: {
    padding: "5rem",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${searchBackgroundImage})`,
  },
});

const ProfilePage = () => {
  const { titles, getTitles, updateWorker, worker } = useContext(AppContext);
  const [imageList, setImageList] = useState([""]);
  const [profileImage, setProfileImage] = useState([""]);

  useEffect(() => {
    getTitles("/occupations");
  }, []);
  const signUpStyles = styleFunc();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const RegisterValidationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    title: Yup.string(),
    email: Yup.string().email("Invalid email address").required("Required"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .max(10, "Must be 10 characters or less")
      .required("Required"),
    category: Yup.string(),
    description: Yup.string().required("Required"),
    postalCode: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    hourlyRate: Yup.number().required("Required"),
    workRange: Yup.string().required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-z]/, "Password must have a lowercase letter")
      .matches(/[A-Z]/, "Password must have a uppercase letter"),

    validatePassword: Yup.string()
      .required("No password provided.")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: worker.firstName,
      lastName: worker.lastName,
      occupationId: worker.occupationId,
      email: worker.email,
      phoneNumber: worker.phoneNumber,
      description: worker.description,
      postalCode: worker.postalCode,
      city: worker.city,
      hourlyRate: worker.hourlyRate,
      workRange: worker.workRange,
      password: "",
      validatePassword: "",
    },
    validationSchema: RegisterValidationSchema,

    onSubmit: async (values) => {
      try {
        const location = await getLatLng(values.postalCode, values.city);
        const newValues = { ...values, location, profileImage };
        newValues.categoryId = titles.find(
          (title) => title._id === formik.values.occupationId
        )?.categoryId;
        delete newValues.validatePassword;

        updateWorker(`/profile/${worker._id}`, newValues);
      } catch (error) {
        return error;
      }
    },
  });

  const addImageInputField = () => {
    setImageList([...imageList, ""]);
  };

  const handleImageUrlChange = (index, event) => {
    const updatedImageList = [...imageList];
    updatedImageList[index] = event.target.value;
    setImageList(updatedImageList);
  };

  return (
    <div className={signUpStyles.page}>
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
                variant="outlined"
                value={formik.values.occupationId}
                label="title"
                name="occupationId"
                onChange={formik.handleChange}
                fullWidth
                error={formik.errors.occupationId}
                helperText={formik.errors.occupationId}
              >
                {titles?.map((title) => (
                  <MenuItem key={title._id} value={title._id}>
                    {title.name}
                  </MenuItem>
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
                label="Profile Image Url"
                variant="outlined"
                fullWidth
                value={profileImage}
                onChange={(e) => setProfileImage(e.target.value)}
                name="profileImageUrl"
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
              <TextField
                id="outlined-multiline-static"
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                defaultValue="Describe Your Job"
                value={formik.values.description}
                onChange={formik.handleChange}
                name="description"
                error={formik.errors.description}
                helperText={formik.errors.description}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-multiline-static"
                label="Postal Code"
                variant="outlined"
                fullWidth
                value={formik.values.postalCode}
                onChange={formik.handleChange}
                name="postalCode"
                error={formik.errors.postalCode}
                helperText={formik.errors.postalCode}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-multiline-static"
                label="City"
                variant="outlined"
                fullWidth
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
                label="Confirm Password"
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                UPDATE
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default ProfilePage;
