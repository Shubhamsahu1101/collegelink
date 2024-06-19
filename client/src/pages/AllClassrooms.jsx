import React from 'react';
import { Link } from 'react-router-dom';

const classrooms = [
  { id: 1, name: 'Math 101', teacher: 'Mr. Smith', description: 'Introduction to Algebra and Geometry.' },
  { id: 2, name: 'Biology 201', teacher: 'Dr. Brown', description: 'Basics of Cell Biology and Genetics.' },
  { id: 3, name: 'History 301', teacher: 'Ms. Lee', description: 'World History from Ancient to Modern Times.' },
  { id: 4, name: 'Art 101', teacher: 'Ms. Gonzalez', description: 'Fundamentals of Drawing and Painting.' },
  { id: 5, name: 'Physics 101', teacher: 'Mr. Johnson', description: 'Mechanics and Thermodynamics.' },
  { id: 6, name: 'Chemistry 101', teacher: 'Dr. Green', description: 'Introduction to Chemical Reactions.' },
  { id: 7, name: 'English 101', teacher: 'Ms. Black', description: 'English Literature and Composition.' },
  { id: 8, name: 'Computer Science 101', teacher: 'Mr. White', description: 'Basics of Programming and Algorithms.' },
];

const AllClassrooms = () => {
  return (
    <div className="h-[calc(100vh-70px)] bg-gray-100 flex">
    <aside className="w-64 bg-white shadow-md h-[calc(100vh-70px)]">
      <nav className="mt-4">
        <Link to="/teachers-group" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium text-lg">Teachers Group</Link>
        <Link to="/broadcast" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium text-lg">Broadcasts</Link>
        <Link to="/all-classrooms" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium text-lg">Classrooms</Link>
      </nav>
    </aside>
      <div className="flex-1 flex flex-col mx-8 p-6 mt-4">
        <h1 className="text-2xl font-bold mb-6">Available Classrooms</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {classrooms.map(({ id, name, teacher, description }) => (
            <div key={id} className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
              <p className="text-gray-600">Teacher: {teacher}</p>
              <p className="text-gray-600 mt-2">{description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Join Class</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllClassrooms;
