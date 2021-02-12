import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import Routes from './routes';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

import history from './services/history';

function App() {
   return ( 
      <Provider store={store}>
         <PersistGate persistor={persistor}>
            <Router history={history}>
               <Routes />
               <GlobalStyle />
               <ToastContainer autoClose={5000} />
            </Router>
         </PersistGate>
      </Provider>
   );
}

export default App;