import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import { signInRequest } from '~/store/modules/auth/actions';


const schema = Yup.object().shape({
   email: Yup.string().email('Insira um e-mail válido').required('Campo e-mail é obrigatório'),
   password: Yup.string().required('Campo senha é obrigatório'),
});

export default function SignIn() {
   const dispatch = useDispatch();
   const loading = useSelector(state => state.auth.loading);

   function handleSubmit({ email, password }) {
      dispatch(signInRequest(email, password));
   }

   return (
      <>
         <img src={logo} alt="Gobarber" />

         <Form schema={schema} onSubmit={handleSubmit}>
            <Input type="email" placeholder="Seu e-mail" name="email"/>
            <Input type="password" placeholder="Sua senha" name="password"/>

            <button type="submit">{ loading ? 'Carregando...' : 'Acessar' }</button>
            <Link to="/register">Cadastre-se gratuitamente</Link>
         </Form>
      </>
   )
}
