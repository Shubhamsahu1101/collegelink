import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import arrowSvg from '/assets/up-arrow.svg';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

// const broadcasts = [
//   {
//     id: 1,
//     sender: 'John Doe',
//     subject: 'Meeting Reminder',
//     message: 'Don\'t forget the meeting tomorrow at 10 AM in the conference room.',
//   },
//   {
//     id: 2,
//     sender: 'Jane Smith',
//     subject: 'New Resources Added',
//     message: 'New resources have been added to the shared folder. Please review them at your earliest convenience.',
//   },
//   {
//     id: 3,
//     sender: 'Emily Johnson',
//     subject: 'Weekly Update',
//     message: 'Here is the weekly update for the project. Please let me know if you have any questions.',
//   },
//   {
//     id: 4,
//     sender: 'Jane Smith',
//     subject: 'New Resources Added',
//     message: 'New resources have been added to the shared folder. Please review them at your earliest convenience.',
//   },
//   {
//     id: 5,
//     sender: 'Emily Johnson',
//     subject: 'Weekly Update',
//     message: 'Here is the weekly update for the project. Please let me know if you have any questions.',
//   },
//   {
//     id: 6,
//     sender: 'Jane Smith',
//     subject: 'New Resources Added',
//     message: 'New resources have been added to the shared folder. Please review them at your earliest convenience.',
//   },
//   {
//     id: 7,
//     sender: 'Emily Johnson',
//     subject: 'Weekly Update',
//     message: 'Here is the weekly update for the project. Please let me know if you have any questions.',
//   },
//   {
//     id: 8,
//     sender: 'Jane Smith',
//     subject: 'New Resources Added',
//     message: 'New resources have been added to the shared folder. Please review them at your earliest convenience.',
//   },
//   {
//     id: 9,
//     sender: 'Emily Johnson',
//     subject: 'Weekly Update',
//     message: 'Here is the weekly update for the project. Please let me know if you have any questions.',
//   },
//   {
//     id: 10,
//     sender: 'Jane Smith',
//     subject: 'New Resources Added',
//     message: 'New resources have been added to the shared folder. Please review them at your earliest convenience.',
//   },
//   {
//     id: 11,
//     sender: 'Emily Johnson',
//     subject: 'Weekly Update',
//     message: 'Here is the weekly update for the project. Please let me know if you have any questions.',
//   },
//   {
//     id: 12,
//     sender: 'Jane Smith',
//     subject: 'New Resources Added',
//     message: 'New resources have been added to the shared folder. Please review them at your earliest convenience.',
//   },
//   {
//     id: 13,
//     sender: 'Emily Johnson',
//     subject: 'Weekly Update',
//     message: 'Here is the weekly update for the project. Please let me know if you have any questions.',
//   },
// ];

const Broadcasts = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [broadcasts, setBroadcasts] = useState([]);
  const { currentUser } = useSelector((state) => state.user);


  React.useEffect(() => {
    const fetchBroadcasts = async () => {
      try {
        setLoading(true);

        const res = await fetch('/api/broadcast/get-broadcasts');
        const data = await res.json();

        if (data.message) {
          toast.error(data.message);
        }
        else {
          toast.success('Broadcasts fetched successfully');
          setBroadcasts(data);
        }

      } catch (error) {
        console.log(error.message);
        toast.error('Failed to fetch broadcasts');
      } finally {
        setLoading(false);
      }
    }

    fetchBroadcasts();
  }, []);

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
        <div className='flex flex-row items-center justify-between mb-4'>
          <h1 className="text-2xl font-bold mb-6">Broadcasts</h1>
          {currentUser.role === 'student' && <Link to="/add-broadcast">
            <button className='bg-teal-500 text-white text-lg p-3 rounded-lg'>Add Broadcast</button>
          </Link>}
        </div>
        <div className="flex-1 overflow-y-auto space-y-4">
          {loading && <p>Loading...</p>}
          {broadcasts.length === 0 && <p>No broadcasts available</p>}
          {broadcasts.length !== 0 && broadcasts.map((broadcast) => (
            <div
              key={broadcast._id}
              className={`p-4 rounded-lg shadow-sm bg-white border border-gray-200 cursor-pointer ${expandedId === broadcast._id ? 'shadow-lg' : ''}`}
              onClick={() => handleExpand(broadcast._id)}
            >
              <div className="flex justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{broadcast.senderName}</h2>
                  <p className="text-gray-600">{broadcast.subject}</p>
                </div>
                <div className="flex items-center">
                  <img src={arrowSvg} alt="arrow" width={20} height={20} className={`${expandedId === broadcast._id ? 'rotate-180' : ''}`} />
                </div>
              </div>
              <div className={`mt-2 text-gray-700 bg-gray-50 rounded-lg shadow-inner transition-all duration-500 ease-in-out overflow-hidden ${expandedId === broadcast._id ? 'max-h-screen opacity-100 p-3' : 'max-h-0 opacity-0'}`}>
                {broadcast.message}
                {broadcast.document !== '' && broadcast.document}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Broadcasts;
