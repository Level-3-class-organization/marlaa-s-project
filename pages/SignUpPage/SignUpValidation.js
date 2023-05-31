import * as yup from "yup";

const validationSchema = yup.object().shape({
  firstName: yup.string().min(3).required(),
  lastName: yup.string().required(),
  email: yup.string().email(),
  password: yup.string().required().min(6, "Must be 6 characters or more"),
  confirm: yup.string().required().min(6, "Must be 6 characters or more"),
});

export default validationSchema;
