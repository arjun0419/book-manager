import React from 'react';
import { Image, CustomTypography, Container } from '../base-kits';
import bmLogo from '../../assets/img/bm-logo-white.svg';

const WelcomePageLogo = () => (
  <Container align="center">
    <Image src={bmLogo} width="150px" />
    <CustomTypography
      variant="h5"
      align="center"
      customcolor="#ffffff"
      customfont="Arima"
      mt="16px"
    >
      Manage your dreams
    </CustomTypography>
  </Container>
);

export default WelcomePageLogo;
