import React from 'react';
import Container from './styles';

const Button = ({
  children, variant, margin, ...rest
}) => (
  <Container
    variant={variant}
    margin={margin}
    {...rest}
  >
    {children}
  </Container>
);

export default Button;
