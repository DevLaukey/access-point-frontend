import NavbarComponent from '@/components/navbar-component';
import { ModeToggle } from '@/components/toggle-component';
import React from 'react';

const Page = () => {
    return (
        <div>
            <NavbarComponent/>
            <ModeToggle/>
            <h1>Welcome to Next.js 14!</h1>
            <p>This is the page component.</p>
        </div>
    );
};

export default Page;
