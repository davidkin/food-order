import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Field, reduxForm, Form } from 'redux-form';
import Button from '../../../UI-Kit/Button/Button';
import ReduxInputWrapper from '../../../UI-Kit/ReduxInputWrapper/ReduxInputWrapper';
import { required } from '../../../utils';
import { createRecipe, updateRecipe } from '../../../actions/menu';
import styles from './Form.module.scss';

const FormMenu = ({
  handleSubmit,
  submitting,
  closePopup,
  popupContent,
  initialize,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    initialize({ title: popupContent?.title, description: popupContent?.description });
  }, []);

  const onSubmit = (values) => {
    if (popupContent) {
      const oldUpdates = popupContent.updates;
      dispatch(updateRecipe(popupContent.id, {
        ...values,
        updates: [...oldUpdates,
          {
            id: oldUpdates[oldUpdates.length - 1].id + 1,
            date: new Date().toLocaleString(),
          }],
      }));
    } else {
      dispatch(createRecipe({
        ...values,
        updates: [{
          id: 1,
          date: new Date().toLocaleString(),
        }],
      }));
    }
    closePopup();
  };

  return (
    <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>{popupContent ? 'Update' : 'Create'} recipe</h2>
      <Field
        name="title"
        type="text"
        placeholder="title"
        classNameWrapper={styles.inputWrapper}
        validate={required}
        component={ReduxInputWrapper}
      />
      <Field
        name="description"
        placeholder="description"
        classNameWrapper={styles.inputWrapper}
        validate={required}
        component={(ReduxInputWrapper)}
      />
      <Button
        type="submit"
        classNameWrapper={styles.buttonWrapper}
        disabled={submitting}
      >
        {popupContent ? 'update' : 'create'}
      </Button>
    </Form>
  );
};

FormMenu.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  closePopup: PropTypes.func,
  initialize: PropTypes.func,
  popupContent: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    updates: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      date: PropTypes.string,
    })),
  }),
};

export default reduxForm({
  form: 'menuForm',
})(FormMenu);
