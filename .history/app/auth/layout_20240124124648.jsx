import React from 'react';
import NavbarComponent from '../../components/navbar-component';
import  Footer  from '../../components/footer';

const AuthLayout = ({ children }) => {
    return (
        <>
           <NavbarComponent />
           children
            <Footer />
        </>
    );
};

export default AuthLayout;
