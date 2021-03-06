import React from 'react';
import NavBar from './NavBar';
import Wrapper from './Wrapper';

const Layout= ({ children, variant }) => {
  return (
    <>
      <NavBar />
      <Wrapper variant={variant}>{children}</Wrapper>
    </>
  );
};

export default Layout;