import React from 'react';
import Header from '../../../components/layout/header';

const Layout = ({ children }) => {
    return (
      <div>
        <Header />

        {/* Your main content */}
        <main>{children}</main>

        {/* Your footer component */}
        <footer>{/* Footer content */}</footer>
      </div>
    );
};

export default Layout;
