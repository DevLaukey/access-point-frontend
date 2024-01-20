import NavbarComponent from '../components/navbar-component';
import React from 'react';
import {AuthForm} from '../components/auth/auth-form';
const Page = () => {
    return (
      <div>
        <NavbarComponent />
        <AuthForm />

        <h1>Welcome to Next.js 14!</h1>
        <p>This is the page component.</p>
      </div>
    );
};

export default Page;
