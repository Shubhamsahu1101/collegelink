import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
const AddBroadcastPage = () => {
  const [formData, setFormData] = useState('');
  const [loading , setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddBroadcast = async () => {
    try {
      setLoading(true);

      const res = await fetch('http://localhost:5004/broadcasts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.message) {
        toast.error(data.message);
      }
      else {
        toast.success('Broadcast sent successfully');
        setFormData('');
      }

    } catch (error) {
      console.log(error.message);
      toast.error('Failed to send broadcast, Please try again.');
    } finally {
      setLoading(false);
    }
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
      <div className="flex-1 flex flex-col mx-8 p-6 mt-4">
        <h1 className="text-2xl font-bold mb-6">Add Broadcast</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <input
              type="text"
              placeholder="subject"
              id='subject'
              onChange={(e) => handleChange(e.target.value)}
              className="w-full p-3 rounded-lg border shadow-md mb-2"
            />
            <textarea
              placeholder="message"
              id='message'
              onChange={(e) => handleChange(e.target.value)}
              className="w-full p-3 rounded-lg border shadow-md mb-2"
              rows="5"
            ></textarea>
          </div>
          <button onClick={handleAddBroadcast} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Send Broadcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBroadcastPage;
