import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Card/CartIcon';
import CardContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  const cartContext = useContext(CardContext);
  const { items } = cartContext;
  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item?.amount;
  }, 0);

  const buttonClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items.length, items]);

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
