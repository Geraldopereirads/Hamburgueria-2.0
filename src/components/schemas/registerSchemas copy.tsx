import * as yup from 'yup';

export const schemaRegister = yup
  .object()
  .shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup
      .string()
      .required('Email é obrigatório')
      .email('Deve informar o email no formato correto'),
    password: yup.string().required('password é obrigatório'),
    confirmarPassword: yup
      .string()
      .required('Confirmação de senha Obrigatória')
      .oneOf(
        [yup.ref('password')],
        'Confirmação de senha deve ser igual a senha'
      ),
  })
  .required();
