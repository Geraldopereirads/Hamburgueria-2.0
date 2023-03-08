import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { IUserRegister } from '../../../providers/UserContext/@types';
import { UserContext } from '../../../providers/UserContext/UserContext';
import { schemaRegister } from '../../schemas/registerSchemas copy';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(schemaRegister),
  });
  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<IUserRegister> = (data) => {
    userRegister(data);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        type='text'
        label='Nome'
        register={register('name')}
        error={errors.name}
      />
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
      <Input
        type='password'
        label='Confirmar Senha'
        register={register('confirmarPassword')}
        error={errors.confirmarPassword}
      />
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
