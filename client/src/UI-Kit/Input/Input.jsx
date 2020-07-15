import React  from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({
  value,
  onChange,
  name,
  placeholder,
  type,
}) => (
  <input
    type={type}
    className={styles.input}
    value={value}
    onChange={onChange}
    name={name}
    placeholder={placeholder}
  />
);

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
