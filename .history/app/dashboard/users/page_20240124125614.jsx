import React from 'react';

const users = [
    { name: 'John Doe', arrivalTime: '09:00 AM', departureTime: '05:00 PM' },
    { name: 'Jane Smith', arrivalTime: '10:30 AM', departureTime: '04:00 PM' },
    { name: 'Bob Johnson', arrivalTime: '08:45 AM', departureTime: '03:30 PM' },
    { name: 'Alice Brown', arrivalTime: '09:15 AM', departureTime: '' },
];

const UserTable = () => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Arrival Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Departure Time
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.arrivalTime}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {user.departureTime ? user.departureTime : 'Still on premises'}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;
