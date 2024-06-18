import React from 'react'
import ClassroomCard from '../components/ClassroomCard'
import { Link } from 'react-router-dom'


const Home = () => {
  return (

    <div className="h-[calc(100vh-70px)] bg-gray-100">

      <div className="flex">
        <aside className="w-64 bg-white shadow-md h-[calc(100vh-70px)]">
          <nav className="mt-4">
            <Link to="/teachers-group" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium text-lg">Teachers Group</Link>
            <Link to="/broadcast" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium text-lg">Broadcasts</Link>
            <Link to="/classroom" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium text-lg">Classrooms</Link>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <ClassroomCard classroomName="Math 101" teacherName="Mr. Smith" />
              <ClassroomCard classroomName="Biology 202" teacherName="Dr. Johnson" />
              <ClassroomCard classroomName="History 303" teacherName="Mrs. Lee" />
              <ClassroomCard classroomName="Art 404" teacherName="Ms. Gonzalez" />
            </div>
          </section>
        </main>
      </div>
    </div>

  )
}

export default Home