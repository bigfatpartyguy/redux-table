import React from 'react';
import PropTypes from 'prop-types';
import {useField} from 'formik';
import classes from './Field.module.css';

const Field = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div className={classes.field}>
      <label className={classes.label} htmlFor={props.id || props.name}>
        <span>{label}</span>
        {meta.touched && meta.error ? (
          <span className={classes.errorMsg}>{meta.error}</span>
        ) : null}
      </label>
      <input {...field} {...props} />
    </div>
  );
};

export default Field;

Field.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

Field.defaultProps = {
  label: '',
  id: '',
  name: '',
};
