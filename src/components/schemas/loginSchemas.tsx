import * as yup from 'yup';

export const schemaLogin = yup
  .object()
  .shape({
    email: yup
      .string()
      .required('Email é obrigatório')
      .email('Deve informar o email no formato correto'),
    password: yup.string().required('password é obrigatório'),
  })
  .required();
