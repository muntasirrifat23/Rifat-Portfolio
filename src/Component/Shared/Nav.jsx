import { Link } from 'react-router-dom';
const Nav = () => {
    const navOption = <>
        <Link className='ml-3 mt-2' to='/'>Home</Link>
        <Link className='ml-3 mt-2' to='/projects'>Project</Link>
        <a className='ml-3 mt-2' href='#myself'> About</a>
        <a className='ml-3 mt-2' href='#contact'> Contact</a>
        <a className='ml-3 mt-2' href='#skills'> Skills</a>

    </>

    return (
        <div >
            <div className="navbar text-white bg-base-800">
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
                    <ul className="menu menu-horizontal px-1 text-xl text-white bg-slate-800">
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