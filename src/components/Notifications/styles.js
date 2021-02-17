import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
   position: relative;
`;

export const Badge = styled.button`
   position: relative;
   background: none;
   border: 0;

   ${props => props.hasUnread && css`
      &::after {
         content: '';
         position: absolute;
         right: 0;
         top: 0;
         width: 8px;
         height: 8px;
         border-radius: 50px;
         background: #eb4034;
      }
   `}
`;

export const NotificationList = styled.div`
   display: ${props => (props.visible ? 'block' : 'none') };
   position: absolute;
   width: 260px;
   left: calc(50% - 130px);
   top: calc(100% + 30px);
   background: rgba(0, 0, 0, 0.6);
   border-radius: 4px;
   padding: 15px 5px;

   &::before {
      content: '';
      position: absolute;
      left: calc(50% - 20px);
      top: -20px;
      width: 0;
      height: 0;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 20px solid rgba(0, 0, 0, 0.6);

   }
`;

export const Notification = styled.div`
   color: #fff;

   & + div {
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
   }

   p {
      font-size: 13px;
      line-height: 18px;
   }

   time {
      display: block;
      font-size: 12px;
      opacity: 0.6;
      margin-bottom: 5px;
      margin-top: 3px;
   }

   button {
      font-size: 12px;
      border: 0;
      background: none;
      color: ${lighten(0.2, '#41d98e')};
   }

   ${props => props.unread && css `
      &::after {
         content: '';
         display: inline-block;
         width: 8px;
         height: 8px;
         background: #eb4034;
         border-radius: 50px;
         margin-left: 10px;
      }
   `}
`;

export const Scroll = styled(PerfectScrollbar)`
   max-height: 260px;
   padding: 5px 15px;

   ${props => !props.hasNotification && css `
      
      display: flex;
      flex-direction: column;
      align-items: center;  

      p {
         color: rgba(255, 255, 255, 0.5);
      
         &::before {
            content: 'ainda não há nenhuma notificação';
         }
      }
   `}
`;