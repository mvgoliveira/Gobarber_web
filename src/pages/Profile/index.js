import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

function Profile() {
   const profile = useSelector(state => state.user.profile);
   
   function handleSubmit(data) {
      console.tron.log(data);
   }

   return (
   <Container> 
      <Form initialData={profile} onSubmit={handleSubmit}>
         <Input name="name" placeholder="Nome completo"/>
         <Input name="email" type="email" placeholder="Seu endereço de e-mail"/>

         <hr/>

         <Input name="oldPassword" type="password" placeholder="Senha atual"/>
         <Input name="password" type="password" placeholder="Nova senha"/>
         <Input name="confirmPassword" type="password" placeholder="Confirme nova senha"/>

         <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button">Sair</button>
   </Container>
  );
}

export default Profile;