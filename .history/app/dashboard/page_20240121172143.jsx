import React from 'react';
import Button from './Button';
import { Card } from '../../components/ui/card';

const DashboardPage = () => {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Bob Johnson' },
    ];

    const handleAddUser = () => {
        // Logic to add a user
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <Button onClick={handleAddUser} className="mb-4">
                Add User
            </Button>
            <div className="grid grid-cols-3 gap-4">
                {users.map((user) => (
                    <Card key={user.id} user={user} />
                ))}
            </div>
            <p className="mt-4">Total users: {users.length}</p>
        </div>
    );
};

export default DashboardPage;
