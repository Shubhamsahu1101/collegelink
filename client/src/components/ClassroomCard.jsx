import React from 'react';
import { Link } from 'react-router-dom';

function ClassroomCard({ classroomId, classroomName, subject, teacherName }) {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-bold mb-2 text-gray-800">{classroomName}</h3>
      <p className="text-gray-600">Subject: {subject}</p>
      <p className="text-gray-600">Teacher: {teacherName}</p>
      <Link to={`/classroom/${classroomId}`}>
        <button className="mt-4 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors duration-300">
          View Classroom
        </button>
      </Link>
    </div>
  );
}

export default ClassroomCard;
