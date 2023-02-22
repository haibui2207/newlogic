/** @jsxImportSource @emotion/react */
import React from 'react';
import { Header } from './components';
import Routes from './Routes';

const Consents = () => {
  return (
    <div css={{ padding: '24px', maxWidth: '450px', margin: '0 auto' }}>
      <Header />

      <div css={{ marginTop: '48px' }}>
        <Routes />
      </div>
    </div>
  );
};

export default Consents;
