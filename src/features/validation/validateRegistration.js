const validateRegistration = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (!/^[A-Z.]+$/i.test(values.firstName)) {
    errors.firstName = 'Only Latin letters allowed';
  } else if (values.firstName.length > 50) {
    errors.firstName = 'Max length exceeded';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (!/^[A-Z.]+$/i.test(values.lastName)) {
    errors.lastName = 'Only Latin letters allowed';
  } else if (values.lastName.length > 50) {
    errors.lastName = 'Max length exceeded';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[\w%.+-]+@[\w.-]+\.[\w]{2,}$/.test(values.email)) {
    errors.email = 'Invalid email';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  if (!values.repeatedPassword) {
    errors.repeatedPassword = 'Required';
  } else if (values.password !== values.repeatedPassword) {
    errors.repeatedPassword = "Passwords don't match";
  }

  return errors;
};

export default validateRegistration;
