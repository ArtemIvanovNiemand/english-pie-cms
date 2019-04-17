import React from 'react';
import styled from 'styled-components';

import Logo from 'src/components/Logo';

const BrandWrapper = styled.div`
  position: relative;
  padding: 15px 15px;
  z-index: 4;
  
  &:after {
   content: "";
   position: absolute;
   bottom: 0;

   height: 1px;
   right: 15px;
   width: calc(100% - 30px);
  }
`;

const BrandInner = styled.span`
  text-transform: uppercase;
  padding: 5px 0;
  display: block;
  font-size: 18px;
  text-align: left;
  font-weight: 400;
  line-height: 30px;
  color: #ffffff;
  background-color: transparent;
`;

const Brand = () => (
  <BrandWrapper>
    <BrandInner>
      <Logo />
        English pie
    </BrandInner>
  </BrandWrapper>
);

export default Brand;
