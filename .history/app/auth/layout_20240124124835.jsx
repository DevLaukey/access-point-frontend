import React from 'react';
import NavbarComponent from '../../components/navbar-component';
import  Footer  from '../../components/footer';

const AuthLayout = ({ children }) => {
    return (
        <div className='h-screen flex flex-1 flex-col'>
           <NavbarComponent />
            <main>
                {children}
            <Footer />
            </main>
        </div>
    );
};

export default AuthLayout;
