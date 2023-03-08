import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ILoginUser } from '../../../providers/UserContext/@types';
import { UserContext } from '../../../providers/UserContext/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { schemaLogin } from '../../schemas/loginSchemas';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginUser>({
    resolver: yupResolver(schemaLogin),
  });
  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<ILoginUser> = (data) => {
    userLogin(data);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        type='email'
        label='Email'
        register={register('email')}
        error={errors.email}
      />
      <Input
        type='password'
        label='Senha'
        register={register('password')}
        error={errors.password}
      />
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
