import profile from '../../../../public/Profile.jpg'
import { Helmet } from 'react-helmet';
import Aos from 'aos';
import resume from '../../Resume/Resume of Rifat.pdf'
import { TypeAnimation } from 'react-type-animation';
import { BiDownload } from 'react-icons/bi';
import { useEffect } from 'react';
const Header = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <div className='mx-auto'>
        <Helmet>
            <title>Rifat | Portfolio</title>
        </Helmet>

        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:text-left">
                <div data-aos='fade-right' data-aos-offset="300"
            data-aos-easing="ease-in-sine" className="header-text mt-10 p-7 ">
            <h1 className='text-2xl'>Hello,</h1>
            <TypeAnimation
                sequence={[
                    'I Munshi Muntasir Rifat, a Designer',
                    1500,
                    'I Munshi Muntasir Rifat, a Developer',
                    1500,
                ]}
                speed={10} 
                style={{ fontSize: '2.2em' }}
                wrapper="span" 
                repeat={Infinity} 
            />
            <p className='mt-5'>A self-motivated and proactive web developer with good experience in MERN Stack development, and responsiveness. Seeking a Web Developer position in a company where I can use my skills and develop my skills.
            </p>
            <a className="btn mt-5 border-white text-sky-200 hover:bg-sky-800 border-white text-white bg-black hover:text-white hover:border-white" href={resume} download="Resume_of_Rifat.pdf"
            >
                <BiDownload className='mr-2'></BiDownload> Download Resume
            </a>
        </div>
                </div>
                <div className="card w-full max-w-sm" >
                    
                    <img src={profile} alt="" className='rounded-full ml-3' />
                </div>
            </div>
        </div>
        
        {/* Projects */}
        {/* <div className='text-center mx-auto border-black text-3xl text-white font-bold'>
           <p>Some Of My Projects</p> 
           <Card></Card>
            </div>
            
            <About></About> */}
    </div>
    );
};

export default Header;