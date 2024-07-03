"use client"
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '@/app/redux/store';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default Providers;
