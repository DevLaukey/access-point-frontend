import React from 'react';
import NavbarComponent from "../components/navbar-component";
const Page = () => {
    return (
        <>
        
            <NavbarComponent/>
        <div className='flex flex-col w-full mt-5'>

           <h1>Welcome to Next.js 14!</h1>
            <p>This is the page component.</p>
        </div>
        </>
    );
};

export default Page;
