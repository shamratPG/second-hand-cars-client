import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const userLogOut = () => logOut().then(() => { }).catch(error => console.error(error))
    const menu = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/blogs'>Blog</Link></li>
        {
            user ?
                <>
                    <li className='font-semibold'><Link to='/dashboard'>Dashboard</Link></li>
                    <li className='font-semibold'><Link onClick={userLogOut}>Log Out</Link></li>
                    <Link className='font-semibold flex items-center text-primary pl-3' to="/dashboard">
                        <FaUser></FaUser>
                        <p className='pl-1'>{user.displayName}</p>
                    </Link>
                </>
                :
                <>
                    <li className='font-semibold'><Link to='/login'>Log In</Link></li>
                    <li className='font-semibold'><Link to='/signup'>Sign Up</Link></li>
                </>
        }

    </>
    return (
        <div className="">
            <div className="navbar bg-base-100 max-w-[1220px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">

                        {/* drawer btn  */}
                        {
                            useLocation().pathname.includes('/dashboard') &&
                            <label htmlFor="side-menu" tabIndex={1} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                        }


                    </div>
                    <Link className="btn btn-ghost normal-case text-xl" to="/">Second-Hand Cars</Link>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal p-0 hidden lg:flex">
                        {menu}
                    </ul>

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='h-1 bg-gradient-to-r from-primary to-secondary' />
        </div>

    );
};

export default Header;