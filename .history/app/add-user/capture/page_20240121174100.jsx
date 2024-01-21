import { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';

const Page = () => {
    const [uniqueId, setUniqueId] = useState('');

    useEffect(() => {
        // Generate a unique ID here
        const generatedId = generateUniqueId();
        setUniqueId(generatedId);
    }, []);

    const generateUniqueId = () => {
        // Generate a unique ID logic here
        // ...
        return 'uniqueId123';
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">StackFinder Search</h1>
            <QRCode value={uniqueId} size={256} />
        </div>
    );
};

export default Page;
