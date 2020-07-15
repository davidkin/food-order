import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import TextField from '../TextField/TextField';
import styles from './ReduxInputWrapper.module.scss';

const ReduxInputWrapper = ({
  input,
  meta: { touched, error },
  label,
  classNameWrapper,
  type,
  placeholder,
  isTextInput,
}) => {
  const FieldTag = isTextInput ? Input : TextField;

  return (
    <div className={cx(styles.wrapper, classNameWrapper)}>
      {label && (
        <label
          htmlFor={input.name}
          className={styles.label}
        >
          {label}
        </label>
      )}
      <FieldTag
        {...input}
        type={type}
        placeholder={placeholder}
      />
      {touched
      && error && (
        <p className={styles.errorText}>{error}</p>
      )}
    </div>
  );
};

ReduxInputWrapper.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string,
  }),
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string,
  }),
  classNameWrapper: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default ReduxInputWrapper;
