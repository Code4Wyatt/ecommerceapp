import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../app/store';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react"

const MyApp: React.FC<AppProps> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <ReduxProvider store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ReduxProvider>

  );
};

export default MyApp;