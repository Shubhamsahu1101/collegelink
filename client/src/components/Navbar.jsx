import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const {currentUser} = useSelector((state) => state.user);
    return (
        <nav className='bg-slate-200 shadow-md z-20'>
            <div className='flex justify-between items-center py-3 px-12'>
                <Link to='/'>
                    <h1 className=' font-bold text-sm sm:text-3xl flex flex-wrap py-1'>
                        <span className='text-teal-500'>College</span>
                        <span className='text-teal-700'>Link</span>
                    </h1>
                </Link>
                
                
                <ul className='flex items-center gap-4'>
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
                        currentUser ? (
                            <img
                                className='rounded-full h-12 w-12 object-cover'
                                src={currentUser.avatar}
                                alt='profile'
                            />
                        ) : (
                            <li className='hover:underline hidden sm:inline text-slate-700 hover:opacity-75 text-xl'> Sign in</li>
                        )
                        }
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar