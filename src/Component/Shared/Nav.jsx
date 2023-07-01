import { AiOutlineHome, AiOutlineProject, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";

const Nav = () => {
    return (
        <div >
            <div className="navbar text-white bg-base-800">
                
                <div className="navbar-start">
                    <div className="flex justify-center items-center text-center">
                    <div className="btm-nav text-black w-2/3 navbar bg-black p-5 fixed mb-15 z-10 bg-opacity-70 text-white bottom-0 rounded-xl text-xl lg:hidden flex justify-center items-center text-center">
                        {/* small */}  
                        <a className='ml-3 mt-2' href='#header'><AiOutlineHome /></a>
                        <a className='ml-3 mt-2' href='#project'><AiOutlineProject /></a>
                        <a className='ml-3 mt-2' href='#mySelf'><AiOutlineUser /></a>
                        <a className='ml-3 mt-2' href='#contact'> <AiOutlineMessage /></a>
                    </div>
                    </div>
                   

                    {/* name */}
                    <div className='font-bold text-4xl ml-2' style={{ display: 'flex', alignItems: 'center' }}>
                        MERN Stack Developer
                    </div>
                </div>
                {/* big */}
                
                <div className="navbar-center hidden lg:flex top-0 p-5  mb-15 z-10 bg-opacity-70 text-white flex justify-center items-center">
                    <ul className="menu menu-horizontal px-1 text-xl text-white bg-slate-800">
                        <a className='ml-3 mt-2' href='#header'> Home</a>
                        <a className='ml-3 mt-2' href='#project'>Project</a>
                        <a className='ml-3 mt-2' href='#mySelf'>My-Self</a>
                        <a className='ml-3 mt-2' href='#contact'> Contact</a>
                    </ul>
                </div>


                <div className="navbar-end">
                    <button></button>

                </div>



            </div>


        </div>
    );
};

export default Nav;