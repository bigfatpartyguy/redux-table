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
          alert(JSON.stringify(values, null, 2));
        }}>
        <Form>
          <Field label="First Name" name="firstName" type="text" />
          <Field label="Last Name" name="lastName" type="text" />
          <Field label="Email" name="email" type="email" />
          <Field label="Password" name="password" type="password" />
          <Field
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
    </div>
  );
};

export default Registration;
