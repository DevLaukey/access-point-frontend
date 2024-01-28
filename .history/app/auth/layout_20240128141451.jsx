import React from 'react';
import NavbarComponent from '../../components/navbar-component';
import  Footer  from '../../components/footer';

const AuthLayout = ({ children }) => {
    return (
        <div>
           <NavbarComponent />
            <main>
                {children}
            </main>
        </div>
    );
};

export default AuthLayout;
