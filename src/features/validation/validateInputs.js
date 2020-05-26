/* eslint-disable fp/no-mutation */
const validateInputs = values => {
  const errors = {};
  if (
    Object.prototype.hasOwnProperty.call(values, 'firstName') &&
    !values.firstName
  ) {
    errors.firstName = 'required';
  }
  if (
    Object.prototype.hasOwnProperty.call(values, 'secondName') &&
    !values.secondName
  ) {
    errors.secondName = 'required';
  }
  if (Object.prototype.hasOwnProperty.call(values, 'email') && !values.email) {
    errors.email = 'required';
  }
  if (
    values.email &&
    !/^[\w.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(values.email)
  ) {
    errors.email = 'invalid Email';
  }
  if (
    Object.prototype.hasOwnProperty.call(values, 'password') &&
    !values.password
  ) {
    errors.password = 'required';
  }
  if (values.password && values.password.length < 5) {
    errors.password = 'at least 5 characters';
  }
  if (
    Object.prototype.hasOwnProperty.call(values, 'birthday') &&
    !values.birthday
  ) {
    errors.birthday = 'required';
  }
  return errors;
};

export default validateInputs;
