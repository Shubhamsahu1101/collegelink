import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const broadcasts = [
  {
    id: 1,
    sender: 'John Doe',
    subject: 'Meeting Reminder',
    message: 'Don\'t forget the meeting tomorrow at 10 AM in the conference room.',
  },
  {
    id: 2,
    sender: 'Jane Smith',
    subject: 'New Resources Added',
    message: 'New resources have been added to the shared folder. Please review them at your earliest convenience.',
  },
  {
    id: 3,
    sender: 'Emily Johnson',
    subject: 'Weekly Update',
    message: 'Here is the weekly update for the project. Please let me know if you have any questions.',
  },
  {
    id: 4,
    sender: 'Jane Smith',
    subject: 'New Resources Added',
    message: 'New resources have been added to the shared folder. Please review them at your earliest convenience.',
  },
  {
    id: 5,
    sender: 'Emily Johnson',
    subject: 'Weekly Update',
    message: 'Here is the weekly update for the project. Please let me know if you have any questions.',
  },
  {
    id: 6,
    sender: 'Jane Smith',
    subject: 'New Resources Added',
    message: 'New resources have been added to the shared folder. Please review them at your earliest convenience.',
  },
  {
    id: 7,
    sender: 'Emily Johnson',
    subject: 'Weekly Update',
    message: 'Here is the weekly update for the project. Please let me know if you have any questions.',
  },
  {
    id: 8,
    sender: 'Jane Smith',
    subject: 'New Resources Added',
    message: 'New resources have been added to the shared folder. Please review them at your earliest convenience.',
  },
  {
    id: 9,
    sender: 'Emily Johnson',
    subject: 'Weekly Update',
    message: 'Here is the weekly update for the project. Please let me know if you have any questions.',
  },
  {
    id: 10,
    sender: 'Jane Smith',
    subject: 'New Resources Added',
    message: 'New resources have been added to the shared folder. Please review them at your earliest convenience.',
  },
  {
    id: 11,
    sender: 'Emily Johnson',
    subject: 'Weekly Update',
    message: 'Here is the weekly update for the project. Please let me know if you have any questions.',
  },
  {
    id: 12,
    sender: 'Jane Smith',
    subject: 'New Resources Added',
    message: 'New resources have been added to the shared folder. Please review them at your earliest convenience.',
  },
  {
    id: 13,
    sender: 'Emily Johnson',
    subject: 'Weekly Update',
    message: 'Here is the weekly update for the project. Please let me know if you have any questions.',
  },
];

const BroadcastPage = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleExpand = (id) => {
    setExpandedId(id === expandedId ? null : id);
  };

  return (
    <div className="h-[calc(100vh-70px)] bg-gray-100 flex">
    <aside className="w-64 bg-white shadow-md h-[calc(100vh-70px)]">
      <nav className="mt-4">
        <Link to="/teachers-group" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium text-lg">Teachers Group</Link>
        <Link to="/broadcast" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium text-lg">Broadcasts</Link>
        <Link to="/all-classrooms" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium text-lg">Classrooms</Link>
      </nav>
    </aside>
      <div className="flex-1 flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-6">Broadcasts</h1>
        <div className="flex-1 overflow-y-auto space-y-4">
          {broadcasts.map(({ id, sender, subject, message }) => (
            <div
              key={id}
              className={`p-4 rounded-lg shadow-sm bg-white border border-gray-200 cursor-pointer ${expandedId === id ? 'shadow-lg' : ''}`}
              onClick={() => handleExpand(id)}
            >
              <div className="flex justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{sender}</h2>
                  <p className="text-gray-600">{subject}</p>
                </div>
                <div className="flex items-center">
                  <svg
                    className={`w-5 h-5 transform transition-transform ${expandedId === id ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              <div
                className={`mt-2 text-gray-700 bg-gray-50 rounded-lg shadow-inner transition-all duration-500 ease-in-out overflow-hidden ${expandedId === id ? 'max-h-screen opacity-100 p-3' : 'max-h-0 opacity-0'}`}
              >
                {message}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BroadcastPage;
