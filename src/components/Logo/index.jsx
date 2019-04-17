import React from 'react';
import styled from 'styled-components';

import logo from './assets/reactlogo.png';

const LogoWrapper = styled.div`
  width: 30px;
  display: inline-block;
  max-height: 30px;
  
  margin-left: 10px;
  margin-right: 15px;
`;

const LogoImage = styled.img`
  width: 35px;
  top: 22px;
  position: absolute;
  vertical-align: middle;
  border: 0;
`;

const Logo = () => (
  <LogoWrapper>
    <LogoImage src={logo} alt="logo" />
  </LogoWrapper>
);

export default Logo;
