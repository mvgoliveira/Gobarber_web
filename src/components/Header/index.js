import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/headerLogo.svg';

export default function Header() {
   const profile = useSelector(state => state.user.profile);

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
                     <strong>{profile.name}</strong>
                     <Link to="/profile">Meu perfil</Link>
                  </div>
                  <img src={profile.avatar.url || `https://ui-avatars.com/api/?size=100&name=${profile.name}`} alt=""/>
               </Profile>
            </aside>
         </Content>
      </Container>
   )
}