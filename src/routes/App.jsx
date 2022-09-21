import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Checkout from '@templates/Checkout';
import CreateAccount from '@templates/CreateAccount';
import Login from '@templates/Login';
import RecoveryPassword from '@templates/RecoveryPassword';
import Home from '@templates/Home';
import MyAccount from '@templates/MyAccount';
import NewPassword from '@templates/NewPassword';
import NotFound from '@templates/NotFound';
import Orders from '@templates/Orders';
import SendEmail from '@templates/SendEmail';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/global.css';
import '@styles/NotFound.scss';


const App = () => {
  const initialState = useInitialState();
    return (
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/recovery-password" element={<RecoveryPassword />} />
                <Route path="/send-email" element={<SendEmail />} />
                <Route path="/new-password" element={<NewPassword/>} />
                <Route path="/my-account" element={<MyAccount/>} /> 
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/checkout" element={<Checkout />} /> 
                <Route path="/orders" element={<Orders />} />                                      
                <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout> 
        </BrowserRouter>
      </AppContext.Provider>
    );
};

export default App; 
