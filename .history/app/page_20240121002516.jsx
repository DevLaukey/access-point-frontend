import React from 'react';
import NavbarComponent from "../components/navbar-component";
const Page = () => {
    return (
        <div className='flex flex-col w-full'>
            <NavbarComponent/>

           <h1>Welcome to Next.js 14!</h1>
            <p>This is the page component.</p>
        </div>
    );
};

export default Page;
