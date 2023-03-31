import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;