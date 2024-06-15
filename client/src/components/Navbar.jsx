import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
// import { useSelector } from 'react-redux'

const Navbar = () => {
    // const {currentUser} = useSelector((state) => state.user);
    return (
        <nav className='bg-slate-200 shadow-md z-20'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                    <h1 className=' font-bold text-sm sm:text-3xl flex flex-wrap'>
                        <span className='text-slate-500'>Clg</span>
                        <span className='text-slate-700'>Link</span>
                    </h1>
                </Link>
                <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                    <input
                        type='text'
                        placeholder='Search...'
                        className='bg-transparent focus:outline-none w-24 sm:w-64'
                    />
                    <button>
                        <FaSearch className='text-slate-600' />
                    </button>
                </form>
                <ul className='flex gap-4'>
                    <Link to='/'>
                        <li className='hidden sm:inline text-slate-700 hover:opacity-75 text-xl'>
                            Home
                        </li>
                    </Link>
                    <Link to='/about'>
                        <li className='hidden sm:inline text-slate-700 hover:opacity-75 text-xl'>
                            About
                        </li>
                    </Link>
                    <Link to='/profile'>
                        {
                        // currentUser ? (
                        //     <img
                        //         className='rounded-full h-9 w-9 object-cover'
                        //         src={currentUser.avatar}
                        //         alt='profile'
                        //     />
                        // ) : (
                            <li className='hover:underline hidden sm:inline text-slate-700 hover:opacity-75 text-xl'> Sign in</li>
                        // )
                        }
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar