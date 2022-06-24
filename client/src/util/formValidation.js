import * as Yup from "yup";

const phoneRegex =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const RegisterValidationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  title: Yup.string(),
  profileImage: Yup.string(),
  email: Yup.string().email("Invalid email address").required("Required"),
  phoneNumber: Yup.string()
    .matches(phoneRegex, "Phone number is not valid")
    .max(10, "Must be 10 characters or less")
    .required("Required"),
  category: Yup.string(),
  images: Yup.array().of(Yup.string()),
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
