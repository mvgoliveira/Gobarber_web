import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
   max-width: 600px;
   margin: 40px auto;
   
   justify-content: center;

   form {
      display: flex;
      flex-direction: column;
      margin-top: 30px;

      input {
         background: rgba(0,0,0,0.1);
         border: 0;
         border-radius: 4px;
         height: 44px;
         padding: 0 15px;
         color: #FFF;
         margin: 0 0 10px;

         &::placeholder {
            color: rgba(255,255,255,0.7);
         }   

         &:-webkit-autofill {
            background: #333;
         }

      }

      span {
         color: #ff2b5e;
         align-self: flex-start;
         margin: 0 0 10px;
         font-weight: bold;
         font-size: 12px;

         &:first-of-type {
            margin-bottom: 14px;
         }
      }

      hr {
         border: 0;
         height: 1px;
         background: rgba(255,255,255,0.2);
         margin: 10px 0 20px;
      }

      button {
         margin: 5px 0 0;
         height: 44px;
         background: #6e54e3;
         font-weight: bold;
         color: #FFF;
         border: 0;
         border-radius: 4px;
         font-size: 15px;
         transition: background 0.2s;

         &:hover {
            background: ${darken(0.03, '#6e54e3')}
         }
      }

      a {
         color: #FFF;
         margin-top: 15px;
         font-size: 16px;
         opacity: 0.8;
         font: 14px, 'Roboto', sans-serif;

         &:hover {
            opacity: 1;
         }
      }
   }

   > button {
      width: 100%;
      margin: 10px 0 0;
      height: 44px;
      background: #f24b64;
      font-weight: bold;
      color: #FFF;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
         background: ${darken(0.05, '#f24b64')}
      }
   }
`;
