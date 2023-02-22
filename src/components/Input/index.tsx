import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import Label from '../Label';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, className, ...restProps }, ref) => {
  return (
    <div className={className}>
      {label && <Label label={label} />}
      <StyledInput ref={ref} {...restProps} />
    </div>
  );
});

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 8px;
  border: 1px solid #ddd;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 1px solid #333;
  }
`;

export default Input;
