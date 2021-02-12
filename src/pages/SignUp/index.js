import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions'

const schema = Yup.object().shape({
   name: Yup.string().required('Campo nome é obrigatório'),
   email: Yup.string().email('Insira um e-mail válido').required('Campo e-mail é obrigatório'),
   password: Yup.string().min(6, 'Use 6 ou mais caracteres').required('Campo senha é obrigatório'),
});

export default function SignUp() {
   const dispatch = useDispatch();

   function handleSubmit({ name, email, password }) {
      dispatch(signUpRequest(name, email, password));
   }

   return (
      <>
         <img src={logo} alt="Gobarber" />

         <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="name" type="text" placeholder="Seu nome completo"/>
            <Input name="email" type="email" placeholder="Seu e-mail"/>
            <Input name="password" type="text" placeholder="Sua senha"/>

            <button type="submit">Criar conta</button>
            <Link to="/">Já sou cadastrado</Link>
         </Form>
      </>
   )
}