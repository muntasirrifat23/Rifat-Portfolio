import Aos from 'aos';
import cover from '../../../../public/Cover.jpg'
import { useEffect } from 'react';
const MySelf = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className='mt-20 mb-10'>
            <div data-aos='fade-right' className='flex justify-center'>
                <h1 className='text-4xl font-bold mb-5'>About My-Self </h1>
            </div>
            <div className='lg:flex lg:justify-evenly'>
                <div data-aos='fade-right' className="avatar flex flex-col">


                    <div className="h-96 w-96 rounded-full ring ring-success flex justify-center items-center shadow-xl ring-offset-base-100 ring-offset-2 ml-7"
                        data-aos="fade-right"
                        data-aos-duration="800">
                        <img src={cover} alt="" />
                    </div>

                    <h1 className='text-3xl font-bold text-white mt-5 lg:text-left text-center'>Hello....</h1>
                    <p className='text-white lg:w-96 lg:text-left text-center lg:p-0 p-3'>
                        I live in Gazipur, Bangladesh. Over the past year, I have been developing myself in the field of web development. I have a strong passion for exploring the latest technologies and continuously expanding my knowledge. I like to see explore and learn new things.
                    </p>
                </div>
                <div className=' lg:pl-8 lg:text-center'>
                    <div data-aos='fade-left' className='flex mt-4 ml-12 justify-center mr-4 mb-6'>

                    </div>
                    <div className=''>
                        <h1 className='text-2xl  font-bold text-white text-center'>My Programming Knowledge</h1>
                        <div data-aos='fade-left' className='text-white lg:text-left text-center'>
                            <h1 className='text-xl font-bold text-white mb-2 lg:mt-0 mt-5'>Expertise:</h1>
                            <div className='lg:p-0 p-10 grid grid-cols-3 lg:grid-cols-5 gap-3'>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-black'>HTML5</p>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-black'>CSS3</p>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-black'>Bootstrap</p>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-black'>Tailwind</p>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-black'>daisyUI</p>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-black'>JavaScript</p>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-black'>ReactJS</p>
                                <p className='bg-teal-700 h-10 w-32 text-sm rounded-xl p-2 text-center hover:bg-black'>React Bootstrap</p>
                                <p className='bg-teal-700 h-10 w-32 text-sm rounded-xl p-2 text-center hover:bg-black'>React Router</p>
                            </div>
                        </div>

                        <div data-aos='fade-right' className='text-white lg:text-left text-center'>
                            <h1 className='text-xl font-bold text-white mb-2 mt-5'>Comfortable:</h1>
                            <div className='lg:p-0 p-10 grid grid-cols-3 lg:grid-cols-5 gap-3'>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-black'>MongoDB</p>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-black'>Express.js</p>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-black'>Node.js</p>
                                <p className='bg-teal-700 h-10 w-32 text-sm rounded-xl p-2 text-center hover:bg-black'>Context API</p>
                                <p className='bg-teal-700 h-10 w-28 h-14 text-sm rounded-xl p-2 text-center hover:bg-black'>Firebase Authentication</p>
                            </div>
                        </div>

                        <div data-aos='fade-up' className='text-white lg:text-left text-center'>
                            <h1 className='text-xl font-bold text-white mb-2 mt-5'>Tools:</h1>
                            <div className='lg:p-0 p-10 grid grid-cols-3 lg:grid-cols-5 gap-3'>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>VS Code</p>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>GitHub</p>
                                <p className='bg-teal-700 h-10 w-32 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>Netlify</p>
                                <p className='bg-teal-700 w-28 h-10 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>Firebase</p>
                                <p className='bg-teal-700 w-28 h-10 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>npm</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default MySelf;