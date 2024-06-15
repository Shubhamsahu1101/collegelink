import React from 'react';
import { Link } from 'react-router-dom';

const messages = [
  {
    id: 1,
    name: 'John Doe',
    dp: 'https://via.placeholder.com/40',
    message: 'Welcome to the Teachers Group!'
  },
  {
    id: 2,
    name: 'Jane Smith',
    dp: 'https://via.placeholder.com/40',
    message: 'Don\'t forget the meeting tomorrow at 10 AM.'
  },
  {
    id: 3,
    name: 'Emily Johnson',
    dp: 'https://via.placeholder.com/40',
    message: 'New resources have been added to the shared folder.'
  },
  {
    id: 4,
    name: 'Jane Smith',
    dp: 'https://via.placeholder.com/40',
    message: 'Don\'t forget the meeting tomorrow at 10 AM.'
  },
  {
    id: 5,
    name: 'Emily Johnson',
    dp: 'https://via.placeholder.com/40',
    message: 'New resources have been added to the shared folder.'
  },
  {
    id: 6,
    name: 'Jane Smith',
    dp: 'https://via.placeholder.com/40',
    message: 'Don\'t forget the meeting tomorrow at 10 AM.'
  },
  {
    id: 7,
    name: 'Emily Johnson',
    dp: 'https://via.placeholder.com/40',
    message: 'New resources have been added to the shared folder.'
  },
  {
    id: 8,
    name: 'Jane Smith',
    dp: 'https://via.placeholder.com/40',
    message: 'Don\'t forget the meeting tomorrow at 10 AM.'
  },
  {
    id: 9,
    name: 'Emily Johnson',
    dp: 'https://via.placeholder.com/40',
    message: 'New resources have been added to the shared folder.'
  },
];

const userType = 'teacher'; // Variable to check the logged-in user type

const TeachersGroup = () => {
  return (
    <div className="h-[calc(100vh-74px)] bg-gray-100 flex">
      <aside className="w-64 bg-white shadow-md py-4 h-full">
        <nav className="space-y-2 mt-16">
          <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Teacher Group</Link>
          <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Broadcast</Link>
          <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Classroom</Link>
          <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Quick Access</Link>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col mx-8 p-6 mt-4">
        <h1 className="text-2xl font-bold mb-6">Teachers Group</h1>
        <div className="flex-1 overflow-y-auto space-y-4">
          {messages.map(({ id, name, dp, message }) => (
            <div key={id} className="flex items-start space-x-4 p-4 rounded-lg shadow-sm bg-white border border-gray-200">
              <img src={dp} alt={name} className="w-10 h-10 rounded-full" />
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
                <p className="mt-1 text-gray-700 bg-gray-50 p-3 rounded-lg shadow-inner">{message}</p>
              </div>
            </div>
          ))}
        </div>
        {userType === 'teacher' && (
          <div className="mt-6 flex-shrink-0">
            <div className="flex">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full p-3 rounded-lg border shadow-md"
              />
              <button className="px-4 ml-4 py-2 bg-blue-500 text-white rounded-lg">Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeachersGroup;
