// Generated with util/create-component.js
import React, { useEffect } from 'react';

import { SelloxCommerceProps } from './SelloxCommerce.types';
import {
  Bootstrap,
  Auth,
  IUser,
  ICart,
  EMPTY_CART,
  Cart,
  Shop,
} from '@sellox/sellox-sdk';
import './SelloxCommerce.scss';

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const SelloxCommerceContext = React.createContext(null);

const SelloxCommerce: React.FC<SelloxCommerceProps> = (props) => {
  // Get config vars
  const { environment, firebase } = props;

  if (!environment) {
    throw new Error('Oops! Did you pass the correct environment');
  }

  if (!firebase) {
    throw new Error('We need an instance of firebase');
  }

  // where it all starts?
  useEffect(() => {
    Bootstrap(environment, firebase);
  }, []);

  return (
    <div data-testid="SelloxCommerce" className="sellox-commerce">
      <h1>Thank you for using sellox commerce</h1>

      <SelloxCommerceContext.Provider value={{ Auth, Shop, Cart }}>
        {props.children}
      </SelloxCommerceContext.Provider>
    </div>
  );
};

export default SelloxCommerce;
