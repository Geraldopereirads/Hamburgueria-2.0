import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInput {
  label: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
  type: 'text' | 'email' | 'password';
}

const Input = ({ label, register, error, type }: IInput) => (
  <fieldset>
    <StyledTextField {...register} label={label} type={type} />
    {error && (
      <StyledParagraph fontColor='red'>{error?.message}</StyledParagraph>
    )}
  </fieldset>
);

export default Input;
