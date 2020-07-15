import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextField.module.scss';

const TextField = ({
  value,
  onChange,
  name,
  placeholder,
}) => (
  <textarea
    value={value}
    onChange={onChange}
    name={name}
    placeholder={placeholder}
    className={styles.text}
  />
);

TextField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextField;
