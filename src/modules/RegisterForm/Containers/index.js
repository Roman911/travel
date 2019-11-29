import { withFormik } from "formik";
import RegisterForm from './../Components/index';
import validateForm from "../../../utils/validate";

export default withFormik({
  mapPropsToValues: () => ({ name: '', email: '', password: '', password2: '' }),
  validate: values => {
    let errors = {};

    validateForm({ values, errors });

    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'RegisterForm'
})(RegisterForm)