import React from 'react';

function ClassroomCard({ classroomName, teacherName }) {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-bold mb-2 text-gray-800">{classroomName}</h3>
      <p className="text-gray-600">Teacher: {teacherName}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
        View Classroom
      </button>
    </div>
  );
}

export default ClassroomCard;
