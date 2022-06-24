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
import { RegisterValidationSchema } from "../util/FormValidation";
import AppContext from "../context/AppContext";
import { getLatLng } from "../api/getlatlng";
import searchBackgroundImage from "../../assets/search-bar-background.jpeg";

const styleFunc = makeStyles({
  wrapper: {
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

const WorkerForm = () => {
  const { titles, getTitles, updateWorker, postWorker, worker } =
    useContext(AppContext);
  const [images, setImages] = useState(worker ? worker.images : [""]);
  const pathName = window.location.pathname;
  const signUpStyles = styleFunc();

  useEffect(() => {
    getTitles("/occupations");
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: worker?.firstName,
      lastName: worker?.lastName,
      occupationId: worker?.occupationId,
      email: worker?.email,
      profileImage: worker?.profileImage,
      phoneNumber: worker?.phoneNumber,
      images: worker?.images,
      description: worker?.description,
      postalCode: worker?.postalCode,
      city: worker?.city,
      hourlyRate: worker?.hourlyRate,
      workRange: worker?.workRange,
      password: "",
      validatePassword: "",
    },
    validationSchema: RegisterValidationSchema,
    enableReinitialize: true,

    onSubmit: async (values) => {
      try {
        const location = await getLatLng(values.postalCode, values.city);
        const newValues = { ...values, location, images };
        newValues.categoryId = titles.find(
          (title) => title._id === formik.values.occupationId
        )?.categoryId;
        delete newValues.validatePassword, handleWorkerSubmit(newValues);
      } catch (error) {
        return error;
      }
    },
  });

  const handleWorkerSubmit = (values) => {
    if (pathName === "/register") {
      postWorker("/auth/register", values);
    } else {
      updateWorker(`/profile/${worker._id}`, values);
    }
  };

  const addImageInputField = () => {
    setImages([...images, ""]);
  };

  const handleImageUrlChange = (index, event) => {
    const updatedImages = [...images];
    updatedImages[index] = event.target.value;
    setImages(updatedImages);
  };

  return (
    <div className={signUpStyles.page}>
      <Container className={signUpStyles.wrapper} maxWidth="sm">
        <Typography className={signUpStyles.text}>
          {pathName === "/register"
            ? "Please enter your credentials to get registered.."
            : "Update Your Credentials"}
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
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
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
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
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
                error={
                  formik.touched.occupationId &&
                  Boolean(formik.errors.occupationId)
                }
                helperText={
                  formik.touched.occupationId && formik.errors.occupationId
                }
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
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Profile Image Url"
                variant="outlined"
                fullWidth
                value={formik.values.profileImage}
                onChange={formik.handleChange}
                name="profileImage"
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
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
              />
            </Grid>
            {images.map((item, index) => (
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
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
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
                error={
                  formik.touched.postalCode && Boolean(formik.errors.postalCode)
                }
                helperText={
                  formik.touched.postalCode && formik.errors.postalCode
                }
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
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
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
                error={
                  formik.touched.hourlyRate && Boolean(formik.errors.hourlyRate)
                }
                helperText={
                  formik.touched.hourlyRate && formik.errors.hourlyRate
                }
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
                error={
                  formik.touched.workRange && Boolean(formik.errors.workRange)
                }
                helperText={formik.touched.workRange && formik.errors.workRange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label={
                  pathName === "/register"
                    ? "Enter Password"
                    : "Change Password"
                }
                variant="outlined"
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password"
                type="password"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
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
                error={
                  formik.touched.validatePassword &&
                  Boolean(formik.errors.validatePassword)
                }
                helperText={
                  formik.touched.validatePassword &&
                  formik.errors.validatePassword
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                {pathName === "/register" ? "REGISTER" : "UPDATE"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default WorkerForm;
