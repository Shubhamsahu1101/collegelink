import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import ClassroomCard from '../components/ClassroomCard';

// const classrooms = [
//   { id: 1, name: 'Math 101', teacher: 'Mr. Smith', description: 'Introduction to Algebra and Geometry.' },
//   { id: 2, name: 'Biology 201', teacher: 'Dr. Brown', description: 'Basics of Cell Biology and Genetics.' },
//   { id: 3, name: 'History 301', teacher: 'Ms. Lee', description: 'World History from Ancient to Modern Times.' },
//   { id: 4, name: 'Art 101', teacher: 'Ms. Gonzalez', description: 'Fundamentals of Drawing and Painting.' },
//   { id: 5, name: 'Physics 101', teacher: 'Mr. Johnson', description: 'Mechanics and Thermodynamics.' },
//   { id: 6, name: 'Chemistry 101', teacher: 'Dr. Green', description: 'Introduction to Chemical Reactions.' },
//   { id: 7, name: 'English 101', teacher: 'Ms. Black', description: 'English Literature and Composition.' },
//   { id: 8, name: 'Computer Science 101', teacher: 'Mr. White', description: 'Basics of Programming and Algorithms.' },
// ];

const AllClassrooms = () => {
  const  { currentUser } = useSelector((state) => state.user);
  const [classrooms, setClassrooms] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchClassrooms = async () => {
      try {
        setLoading(true);

        const res = await fetch('/api/classroom/get-classrooms');
        const data = await res.json();

        if(data.message) {
          toast.error(data.message);
        }
        else {
          toast.success('Classrooms fetched successfully');
          setClassrooms(data);
        }

      } catch (error) {
        console.log(error.message);
        toast.success('Failed to fetch classroom data');
      } finally {
        setLoading(false);
      }
    }

    fetchClassrooms();
  }, []);

  console.log(classrooms)
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
        <h1 className="text-2xl font-bold mb-6">Available Classrooms</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && <p>Loading...</p>}
          {classrooms.length === 0 && <p>No classrooms available</p>}
          {classrooms.map((classroom) => (
            <ClassroomCard key={classroom._id} classroomId={classroom._id} classroomName={classroom.name} subject={classroom.subject} teacherName={classroom.teacherName}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllClassrooms;
