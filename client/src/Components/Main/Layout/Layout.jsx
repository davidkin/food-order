import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { menuSelector } from '../../../selectors';
import { getMenu, deleteRecipe } from '../../../actions/menu';
import withPopup from '../../../HOC/withPopup';
import Button from '../../../UI-Kit/Button/Button';
import Loader from '../../../UI-Kit/Loader/Loader';
import FormMenu from '../Form/Form';
import styles from './Layout.module.scss';

const Layout = ({ openPopup }) => {
  const menu = useSelector(menuSelector);
  const isDataReceived = useSelector(state => state.menu.isDataReceived);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenu());
  }, []);

  if (!isDataReceived) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <Button
        type="button"
        classNameWrapper={styles.buttonCreate}
        onClick={() => openPopup({
          PopupComponent: FormMenu,
        })}
      >
        Create recipe
      </Button>
      {!!menu.length ? (
        <ul className={styles.menuList}>
          {menu.map(item => (
            <li key={item.id} className={styles.menuItem}>
              <h2 className={styles.menuItemTitle}>{item.title}</h2>
              <p className={styles.menuItemDesc}>{item.description}</p>
              <div className={styles.menuItemButtons}>
                <Button
                  classNameWrapper={styles.menuItemButton}
                  type="button"
                  onClick={() => openPopup({
                    PopupComponent: FormMenu,
                    content: item,
                  })}
                >
                  update
                </Button>
                <Button
                  classNameWrapper={styles.menuItemButton}
                  type="button"
                  onClick={() => dispatch(deleteRecipe(item.id))}
                >
                  delete
                </Button>
              </div>
              <div className={styles.updatesWrapper}>
                <p className={styles.toggleHistory}>history of changes</p>
                <div className={styles.updatesListWrapper}>
                  <p>Updates:</p>
                  <ul>
                    {item.updates.map(item => (
                      <li key={item.id}>{item.date}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have not had recipes yet</p>
      )}
    </div>
  );
};

export default withPopup(Layout);
