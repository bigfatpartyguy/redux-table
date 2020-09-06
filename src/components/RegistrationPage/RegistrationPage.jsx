import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import {validateRegistration} from 'features/validation';
import Field from './Field';
import Button from '../Button';
import classes from './RegistrationPage.module.css';

const Registration = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div className={classes.registration}>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          repeatedPassword: '',
        }}
        validate={values => {
          const errors = validateRegistration(values);
          if (Object.keys(errors).length) {
            setIsDisabled(true);
          } else {
            setIsDisabled(false);
          }
          return errors;
        }}
        onSubmit={(values, ...rest) => {
          const {repeatedPassword, ...user} = {...values, role: 'master'};
          console.log(JSON.stringify(user, null, 2));
        }}>
        <Form>
          <Field
            id="firstName"
            label="First Name"
            name="firstName"
            type="text"
          />
          <Field id="lastName" label="Last Name" name="lastName" type="text" />
          <Field id="email" label="Email" name="email" type="email" />
          <Field
            id="password"
            label="Password"
            name="password"
            type="password"
          />
          <Field
            id="repeatedPassword"
            label="Repeat Password"
            name="repeatedPassword"
            type="password"
          />
          <Button
            disabled={isDisabled}
            type="submit"
            btnRole="submit"
            text="Sign Up"
          />
        </Form>
      </Formik>
      <Test />
    </div>
  );
};

class Test extends React.Component {
  getThis = () => console.log(this);

  render = () => (
    <button type="button" onClick={this.getThis}>
      Click
    </button>
  );
}

export default Registration;
