import styled, { css } from 'styled-components';
import { lighten } from 'polished';

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
   position: absolute;
   width: 260px;
   left: calc(50% - 130px);
   top: calc(100% + 30px);
   background: rgba(0, 0, 0, 0.6);
   border-radius: 4px;
   padding: 20px;

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
      font-size: 12px;
      opacity: 0.6;
   }

   button {
      font-size: 12px;
      border: 0;
      background: none;
      color: ${lighten(0.2, '#41d98e')};
      padding: 0 5px;
      margin: 0 5px;
      border-left: 1px solid rgba(255, 255, 255, 0.2);
   }
`;