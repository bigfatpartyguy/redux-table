import React from 'react';
import {Formik, Form, Field, ErrorMessage, useField} from 'formik';
import {validateRegistration} from 'features/validation';
import Button from '../Button';
import classes from './RegistrationPage.module.css';

const Registration = () => {
  return (
    <div className={classes.registration}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          repeatedPassword: '',
        }}
        validate={validateRegistration}
        onSubmit={(values, ...rest) => {
          console.log(rest);
          alert(JSON.stringify(values, null, 2));
        }}>
        <Form>
          <div>
            <label className={classes.regLabel} htmlFor="firstName">
              <span>First Name</span>
              <Field id="firstName" name="firstName" type="text" />
            </label>
            <ErrorMessage
              className={classes.errorMsg}
              name="firstName"
              component="div"
            />
          </div>
          <label className={classes.regLabel} htmlFor="lastName">
            <span>Last Name</span>
            <Field id="lastName" name="lastName" type="text" />
          </label>
          <ErrorMessage name="lastName" />
          <label className={classes.regLabel} htmlFor="email">
            <span>Email</span>
            <Field id="email" name="email" type="email" autoComplete="off" />
          </label>
          <ErrorMessage name="email" />
          <label className={classes.regLabel} htmlFor="password">
            <span>Password</span>
            <Field id="password" name="password" type="password" />
          </label>
          <ErrorMessage name="password" />
          <label className={classes.regLabel} htmlFor="repeatedPassword">
            <span>Repeat Password</span>
            <Field
              id="repeatedPassword"
              name="repeatedPassword"
              type="password"
            />
          </label>
          <ErrorMessage name="repeatedPassword" />
          <Button type="submit" btnRole="submit" text="Sign Up" />
        </Form>
      </Formik>
    </div>
  );
};

export default Registration;
