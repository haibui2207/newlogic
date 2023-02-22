import styled from '@emotion/styled';

interface LabelProps {
  label?: string;
  className?: string;
}

const Label = ({ label, className }: LabelProps) => <StyledLabel className={className}>{label}</StyledLabel>;

const StyledLabel = styled.label`
  display: block;
  font-size: 14px;
  padding-left: 16px;
  margin-bottom: 8px;
`;

export default Label;
