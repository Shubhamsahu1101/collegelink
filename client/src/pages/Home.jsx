import React from 'react'
import ClassroomCard from '../components/ClassroomCard'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = React.useState(false);
  const [userClassrooms, setUserClassrooms] = React.useState([]);

  React.useEffect(() => {
    const fetchClassrooms = async () => {
      try {
        setLoading(true);

        const res = await fetch('/api/classroom/get-user-classrooms');
        const data = await res.json();

        if(data.message) {
          toast.error(data.message);
        }
        else {
          toast.success('Classrooms fetched successfully');
          setUserClassrooms(data);
        }

      } catch (error) {
        console.log(error.message);
        toast.success('Failed to fetch classroom data');
      } finally {
        setLoading(false);
      }
    }

    fetchClassrooms();
  }, [currentUser])

  console.log(userClassrooms)
  return (

    <div className="h-[calc(100vh-70px)] bg-gray-100">

      <div className="flex">
        <aside className="w-64 bg-white shadow-md h-[calc(100vh-70px)]">
          <nav className="mt-4">
            <Link to="/teachers-group" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium text-lg">Teachers Group</Link>
            <Link to="/broadcast" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium text-lg">Broadcasts</Link>
            <Link to="/all-classrooms" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium text-lg">Classrooms</Link>
          </nav>
        </aside>
        <main className="flex-1 p-6">

          {/* teacher group section */}
          <Link to="/teachers-group">
            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Teachers Group</h2>
              <div className="p-4 bg-white shadow rounded-lg">
                <p>Latest Message Preview (unread)</p>
              </div>
            </section>
          </Link>

          {/* broadcast section */}
          <Link to="/broadcast">
            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Broadcasts</h2>
              <div className="p-4 bg-white shadow rounded-lg">
                <p>Latest Broadcast Preview (unread)</p>
              </div>
            </section>
          </Link>

          {/* classroom section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Classrooms</h2>
            <div className="p-4 bg-white shadow rounded-lg mb-6">
              <p>Pending Assignments: None</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {loading && <p>Loading...</p>}
              {userClassrooms.map((classroom) => (
                <ClassroomCard key={classroom._id} classroomId={classroom._id} classroomName={classroom.name} subject={classroom.subject} teacherName={classroom.teacherName}/>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>

  )
}

export default Home