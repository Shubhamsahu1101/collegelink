import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const classroomData = {
  className: 'Math 101',
  teacher: 'Mr. Smith',
  assignments: [
    {
      id: 1,
      title: 'Assignment 1',
      description: 'Solve the equations in the attached document.',
      dueDate: '2024-06-20',
      grade: 'A',
    },
    {
      id: 2,
      title: 'Assignment 2',
      description: 'Write an essay on the given topic.',
      dueDate: '2024-07-01',
      grade: 'B+',
    },
    {
      id: 3,
      title: 'Assignment 3',
      description: 'Complete the worksheet on linear algebra.',
      dueDate: '2024-07-10',
      grade: 'A-',
    },
    {
      id: 4,
      title: 'Assignment 4',
      description: 'Prepare a presentation on quadratic equations.',
      dueDate: '2024-07-15',
      grade: 'B',
    },
    {
      id: 5,
      title: 'Assignment 5',
      description: 'Solve the provided practice problems.',
      dueDate: '2024-07-20',
      grade: 'A+',
    },
    {
      id: 6,
      title: 'Assignment 6',
      description: 'Write a report on the applications of calculus.',
      dueDate: '2024-07-25',
      grade: 'A',
    },
    {
      id: 7,
      title: 'Assignment 7',
      description: 'Review the chapter on differential equations.',
      dueDate: '2024-07-30',
      grade: 'B+',
    },
  ],
  communications: [
    {
      id: 11,
      type: 'text',
      content: 'Please read chapters 1-3 before the next class.',
    },
    {
      id: 12,
      type: 'document',
      content: 'Chapter 1 Notes',
      url: '#',
    },
    {
      id: 13,
      type: 'text',
      content: 'Make sure to revise the solved examples.',
    },
    {
      id: 14,
      type: 'document',
      content: 'Equations Worksheet',
      url: '#',
    },
    {
      id: 15,
      type: 'text',
      content: 'Submit your assignments by the due date.',
    },
    {
      id: 16,
      type: 'document',
      content: 'Practice Problems',
      url: '#',
    },
    {
      id: 17,
      type: 'text',
      content: 'Prepare for the upcoming quiz.',
    },
    {
      id: 18,
      type: 'document',
      content: 'Equations Worksheet',
      url: '#',
    },
    {
      id: 19,
      type: 'text',
      content: 'Submit your assignments by the due date.',
    },
    {
      id: 20,
      type: 'document',
      content: 'Practice Problems',
      url: '#',
    },
    {
      id: 21,
      type: 'text',
      content: 'Prepare for the upcoming quiz.',
    },
  ],
};

const ClassroomPage = () => {
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
        <h1 className="text-2xl font-bold mb-6">{classroomData.className}</h1>
        <h2 className="text-xl font-semibold mb-4">Teacher: {classroomData.teacher}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow overflow-hidden">
          <section className="flex flex-col space-y-4 overflow-y-auto">
            <h3 className="text-xl font-semibold mb-2">Assignments</h3>
            {classroomData.assignments.map(({ id, title, description, dueDate, grade }) => (
              <div
                key={id}
                className={`p-4 rounded-lg shadow-sm bg-white border border-gray-200 cursor-pointer ${expandedId === id ? 'shadow-lg' : ''}`}
                onClick={() => handleExpand(id)}
              >
                <div className="flex justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
                  </div>
                  <div className="flex items-center">
                    <p className="text-gray-600">Due: {dueDate}</p>
                    <svg
                      className={`w-5 h-5 ml-4 transform transition-transform ${expandedId === id ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
                {expandedId === id && (
                  <div className="mt-2 text-gray-700 bg-gray-50 p-3 rounded-lg shadow-inner transition-all duration-300 ease-in-out overflow-hidden max-h-screen opacity-100">
                    {description}
                  </div>
                )}
              </div>
            ))}
          </section>

          <section className="flex flex-col space-y-4 overflow-y-auto">
            <h3 className="text-xl font-semibold mb-2">Messages</h3>
            {classroomData.communications.map(({ id, type, content, url }) => (
              <div
                key={id}
                className={`p-4 rounded-lg shadow-sm bg-white border border-gray-200 cursor-pointer ${expandedId === id ? 'shadow-lg' : ''}`}
                // onClick={() => handleExpand(id)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    {type === 'text' && <p className="text-gray-700">{content}</p>}
                    {type === 'document' && (
                      <a href={url} className="text-teal-500 hover:underline">{content}</a>
                    )}
                  </div>
                  {/* <svg
                    className={`w-5 h-5 ml-4 transform transition-transform ${expandedId === id ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg> */}
                </div>
                {/* {expandedId === id && type === 'text' && (
                  <div className="mt-2 text-gray-700 bg-gray-50 p-3 rounded-lg shadow-inner transition-all duration-300 ease-in-out overflow-hidden max-h-screen opacity-100">
                    {content}
                  </div>
                )} */}
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ClassroomPage;
