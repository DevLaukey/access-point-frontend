import React from 'react';
import NavbarComponent from '../../components/navbar-component';
import  Footer  from '../../components/footer';

const AuthLayout = ({ children }) => {
    return (
        <div className='h-screen overflow-y-hidden'>
           <NavbarComponent />
            <main>
                {children}
            </main>
        </div>
    );
};

export default AuthLayout;
