import React from 'react';

// Next
import Head from 'next/head';

// Styles
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>NavBar</nav>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;