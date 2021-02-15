import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/headerLogo.svg';


export default function index() {
   return (
      <Container>
         <Content>
            <nav>
               <img src={logo} alt=""/>
               <Link to="/dashboard">DASHBOARD</Link>
            </nav>

            <aside>
               <Notifications/>
               <Profile>
                  <div>
                     <strong>Marcus Oliveira</strong>
                     <Link to="/profile">Meu perfil</Link>
                  </div>
                  <img src="https://ui-avatars.com/api/?size=50&name=M+O" alt="Marcus Oliveira"/>
               </Profile>
            </aside>
         </Content>
      </Container>
   )
}
