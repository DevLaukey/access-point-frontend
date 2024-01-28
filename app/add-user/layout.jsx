import Head from 'next/head';
import Header from '../../components/layout/header';

const Layout = ({ children }) => {
    return (
        <div className='h-screen overflow-hidden'>
        <Head>
          <title>Access Point Management System</title>
          <meta name="description" content="Access Point Management System" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main>{children}</main>

      </div>
    );
};

export default Layout;
