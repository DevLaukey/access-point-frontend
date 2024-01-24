import React from 'react';
import NavbarComponent from '../../components/navbar-component';

const AuthLayout = ({ children }) => {
    return (
        <div>
           <NavbarComponent>
            <main>
                {children}
            </main>
            <footer>
                {/* Add your footer content here */}
            </footer>
        </div>
    );
};

export default AuthLayout;
