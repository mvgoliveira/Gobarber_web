import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt'

import api from '~/services/api';

import { Container, Badge, NotificationList, Notification, Scroll } from './styles';

function Notifications() {
   const [visible, setVisible] = useState(false);
   const [notifications, setNotifications] = useState([]);

   const hasUnread = useMemo(
      () => !!notifications.find(notification => notification.read === false),
      [notifications]
   );

   const hasNotification = useMemo(
      () => !!notifications.find(notification => notification),
      [notifications]
   );

   useEffect(() => {
      async function loadNotifications() {
         const response = await api.get('notifications');

         const data = response.data.map(notification => ({
            ...notification,
            timeDistance: formatDistance(
               parseISO(notification.createdAt),
               new Date(),
               { addSuffix: true, locale: pt }
            )
         }));

         setNotifications(data);
      }

      loadNotifications();
   }, [])

   function handleToggleVisible() {
      setVisible(!visible);
   }

   async function handleMarkAsRead(id) {
      await api.put(`notifications/${id}`);

      setNotifications(
         notifications.map(notification => 
            notification._id === id ? { ...notification, read: true } : notification
         )
      )
   }

   return (
     <Container>
         <Badge onBlur={ visible ? handleToggleVisible : null } onClick={handleToggleVisible} hasUnread={hasUnread}>
            <MdNotifications color="#41d98e" size={20}/>
         </Badge>

         <NotificationList visible={visible}>
            <Scroll hasNotification={hasNotification}>
               {notifications.map(notification => (
                  <Notification key={notification._id} unread={!notification.read}>
                     <p>{notification.content}</p>
                     <time>{notification.timeDistance}</time>
                     {!notification.read && (
                        <button 
                           type="button" 
                           onClick={() => handleMarkAsRead(notification._id)}
                        > 
                           Marcar como lida 
                        </button>
                     )}
                  </Notification>
               ))}

               <p></p>
            </Scroll>
         </NotificationList>
     </Container>
  );
}

export default Notifications;