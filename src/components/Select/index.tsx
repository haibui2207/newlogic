import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import Label from '../Label';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  className?: string;
  options: { label: string; value: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ label, className, options, placeholder, ...restProps }, ref) => {
  return (
    <div className={className}>
      {label && <Label label={label} />}
      <StyledSelect ref={ref} {...restProps}>
        {placeholder && (
          <option value="" disabled hidden css={{ color: '#ddd' }}>
            {placeholder}
          </option>
        )}

        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
});

const StyledSelect = styled.select`
  width: 100%;
  height: 40px;
  padding: 0 8px;
  border: 1px solid #ddd;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 1px solid #333;
  }

  &:invalid {
    color: #ddd;
  }
`;

export default Select;
