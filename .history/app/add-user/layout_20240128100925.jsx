import Head from 'next/head';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Access Point Management System</title>
                <meta name="description" content="Access Point Management System" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                {/* Your header component */}
            </header>

            <main>
                {children}
            </main>

            <footer>
                {/* Your footer component */}
            </footer>
        </>
    );
};

export default Layout;
