import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useFormValidation, validateInputs} from 'features/validation';
import Input from '../Input';
import Button from '../Button';
import classes from './LoginPage.module.css';

const LoginPage = () => {
  const [disabled, setDisabled] = useState(true);
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
  } = useFormValidation({email: '', password: ''}, validateInputs, setDisabled);
  const onSubmit = () => console.log('submitted');
  console.log(classes);
  return (
    <div className={classes.login}>
      <h1 className={classes.login__header}>Log in to continue</h1>
      <form
        className={classes.login__form}
        onSubmit={event => handleSubmit(event, onSubmit)}>
        <Input
          type="email"
          id="email"
          text="Email"
          value={values.email}
          error={!!errors.email || false}
          errorMessage={errors.email || ''}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          type="password"
          id="password"
          text="Password"
          value={values.password}
          error={!!errors.password || false}
          errorMessage={errors.password || ''}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Button
          disabled={disabled}
          type="submit"
          btnRole="submit"
          text="Log in"
        />
      </form>
    </div>
  );
};

export default LoginPage;
