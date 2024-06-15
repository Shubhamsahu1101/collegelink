import React from 'react'
import ClassroomCard from '../components/ClassroomCard'
import { Link } from 'react-router-dom'


const Home = () => {
  return (

    <div className="h-[calc(100vh-74px)] bg-gray-100">
      
      <div className="flex">
        <aside className="w-64 bg-white shadow-md py-4 h-[calc(100vh-74px)]">
          <nav className="space-y-2">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Teacher Group</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Broadcast</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Classroom</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Quick Access</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">

          {/* teacher group section */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Teacher Group</h2>
            <div className="p-4 bg-white shadow rounded-lg">
              <p>Latest Message Preview (unread)</p>
              <Link to="/teachers-group" className="mt-2 text-blue-500 hover:underline">View All</Link>
            </div>
          </section>

          {/* broadcast section */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Broadcast</h2>
            <div className="p-4 bg-white shadow rounded-lg">
              <p>Latest Broadcast Preview (unread)</p>
              <button className="mt-2 text-blue-500 hover:underline">View All</button>
            </div>
          </section>

          {/* classroom section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Classroom</h2>
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