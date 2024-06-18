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
    <div className="h-[calc(100vh-70px)] bg-gray-100 flex">
    <aside className="w-64 bg-white shadow-md h-[calc(100vh-70px)]">
      <nav className="mt-4">
        <Link to="/teachers-group" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium text-lg">Teachers Group</Link>
        <Link to="/broadcast" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium text-lg">Broadcasts</Link>
        <Link to="/classroom" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium text-lg">Classrooms</Link>
      </nav>
    </aside>
      <div className="flex-1 flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-6">Teachers Group</h1>
        <div className="flex-1 overflow-y-auto space-y-4">
          {messages.map(({ id, name, dp, message }) => (
            <div key={id} className="flex items-start space-x-4 p-4 rounded-lg shadow-sm bg-white border border-gray-200">
              <img src={dp} alt={name} className="w-8 h-8 rounded-full" />
              <div className="flex flex-col">
                <p className="text-md font-semibold text-gray-800">{name}</p>
                <p className="text-gray-700 pt-3 pb-1 pr-3">{message}</p>
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
