import React from 'react';
import profile from '../../../public/Profile.jpg'
import { Helmet } from 'react-helmet';
import Card from './Card';
const Home = () => {
    return (
        <div className='mx-auto'>
            <Helmet>
                <title>Rifat | Home</title>
            </Helmet>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:text-left">
                        <div>
                            <p className='text-2xl mb-3'>Hello,</p>
                            <h2 className='text-4xl mb-3'>I am Munshi Muntasir Rifat, a Developer</h2>
                            <h2 className='mb-3'>
                                A self-motivated and proactive web developer with a deep interest in React. <p>
                                    Seeking a Web Developer position in a company where I can use my skills and develop my skills.
                                </p>
                            </h2>
                            <button className="btn btn-info btn-sm">Resume</button>
                        </div>
                    </div>
                    <div className="card  w-full max-w-sm">
                        <img src={profile} alt="" className='rounded-full ml-3' />
                    </div>
                </div>
            </div>
            
            {/* Projects */}
            <div className='text-center mx-auto border-black text-4xl text-white font-bold'>
               <p>Some Of My Projects</p> 
               <Card></Card>
                </div>




        </div>
    );
};

export default Home;