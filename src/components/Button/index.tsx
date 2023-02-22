import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  className?: string;
  children?: ReactNode;
}

const Button = ({ title, className, children, ...restProps }: ButtonProps) => {
  return (
    <StyledButton type="button" className={className} {...restProps}>
      {title || children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  flex: none;
  border: none;
  display: flex;
  padding: 8px 24px;
  align-items: center;
  background-color: #ddd;
  box-sizing: border-box;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:not(:disabled):hover {
    cursor: pointer;
    background-color: #d0d0d0;
  }
`;

export default Button;
