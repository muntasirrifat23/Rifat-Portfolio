import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const navOption = <>
            <Link className='ml-3 mt-2' to='/'>Home</Link>
            <Link className='ml-3 mt-2' to='/instructors'>Project</Link>
            <Link className='ml-3 mt-2' to='/classes'>About</Link>
            <Link className='ml-3 mt-2' to='/dashboard'> Contack</Link>
            <Link className='ml-3 mt-2' to='/login'>Blog</Link>
           
    </>

    return (
        <div className='text-white bg-slate-800'>
             {/* <div className="navbar bg-base-100 p-5 fixed mb-15 z-10 w-full bg-opacity-40 bg-black text-white top-0"> */}
             <div className="navbar text-white text-white bg-slate-800">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 font-semibold text-white bg-slate-800">
                            {navOption}
                        </ul>
                    </div>

                    {/* Logo name */}
                    <div className='font-bold text-3xl ml-2' style={{ display: 'flex', alignItems: 'center' }}>
                        MERN Stack
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 text-xl">
                        {navOption}
                    </ul>
                </div>


                <div className="navbar-end">
                    <button>Resume</button>
                   
                </div>


            </div>
        </div>
    );
};

export default Nav;