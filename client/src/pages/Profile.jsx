import React from 'react'
import { useSelector } from 'react-redux'
import { userUpdated, userDeleted, userLoggedOut } from '../redux/user/userSlice'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user)
  const [formData, setFormData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }


  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    try {

      const res = await fetch(`/api/user/update/${currentUser._id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData),
        }
      )
      const data = await res.json();

      if (data.message) {
        toast.error(data.message);
      }
      else {
        toast.success('User updated successfully');
        dispatch(userUpdated(data));
        setTimeout(() => {window.location.reload()}, 1000);
      }

    } catch (error) {
      console.log(error);
      toast.error('User could not be updated');
    } finally {
      setLoading(false);
    }
  }

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/logout');
      const data = await res.json();
      if (data.message) {
        toast.error(data.message);
      }
      else {
        toast.success('User logged out successfully');
        dispatch(userLoggedOut(data));
      }
    } catch (error) {
      console.log(error);
      toast.error('User could not be logged out');
    }
  }

  const deleteDialog = async () => {
    await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete();
      } else {
        return toast.error('User not deleted');
      }
    });
  }

  const handleDelete = async () => {
    try {
      setLoading(true);

      const res = await fetch(`/api/user/delete/${currentUser._id}`,
        {
          method: 'DELETE',
        }
      )
      const data = await res.json();

      if (data.message) {
        toast.error(data.message);
      }
      else {
        toast.success('User deleted successfully');
        dispatch(userDeleted(data));
      }

    } catch (error) {
      console.log(error);
      toast.error('User could not be deleted');
    } finally {
      setLoading(false);
    }
  }

  console.log(currentUser);

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font font-semibold text-center mt-8'>Profile</h1>

      <div className='flex flex-col gap-4 mt-4'>
        <img src={currentUser.avatar} alt="avatar" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' />
        <input type='text' onChange={handleChange} id='avatar' placeholder='Url for your new avatar...' className='border p-3 rounded-lg' />
      </div>

      <hr className='border-t-2 border-gray-300 my-8' />
      <div className='px-2'>
        <div className='flex flex-row'>
          <p className='text-lg text-gray-600 pr-[19px]'>Name</p>
          <p className='text-lg'>{currentUser.name}</p>
        </div>
        <div className='flex flex-row'>
          <p className='text-lg text-gray-600 pr-[24px]'>Email</p>
          <p className='text-lg'>{currentUser.email}</p>
        </div>
        <div className='flex flex-row'>
          <p className='text-lg text-gray-600 pr-[32px]'>Role</p>
          <p className='text-lg'>{currentUser.role}</p>
        </div>
        <div className='flex flex-row'>
          <p className='text-lg text-gray-600 pr-[49px]'>At</p>
          <p className='text-lg'>{currentUser.instituteName}</p>
        </div>
        {currentUser.role === 'student' &&
          <div className='flex flex-row'>
            <p className='text-lg text-gray-600 pr-[18px]'>Batch</p>
            <p className='text-lg'>{currentUser.batch}</p>
          </div>}
      </div>
      <form onSubmit={handleUpdate} className='flex flex-col gap-4 mt-4'>
        <input type="password" onChange={handleChange} id='password' placeholder='Got a new password?' className='border p-3 rounded-lg' />
        <button type='submit' disabled={loading} className='bg-teal-700 text-white p-3 rounded-lg hover:opacity-95'>{loading ? "Loading..." : "Update Password"}</button>
      </form>

      <hr className='border-t-2 border-gray-300 my-8' />

      <div className='flex gap-4 mt-4'>
        <button disabled={loading} onClick={handleLogout} className='bg-teal-500 min-w-32 text-white p-3 rounded-lg hover:opacity-95'>Logout</button>
        {/* <button disabled={loading} onClick={deleteDialog} className='bg-red-800 min-w-32 text-white p-3 rounded-lg hover:opacity-95'>Delete Account</button> */}
      </div>
    </div>
  )
}

export default Profile