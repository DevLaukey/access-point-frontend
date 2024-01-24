import React from 'react';
import NavbarComponent from '../../components/navbar-component';
import  Footer  from '../../components/footer';

const AuthLayout = ({ children }) => {
    return (
        <div className='h-screen'>
           <NavbarComponent />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default AuthLayout;
