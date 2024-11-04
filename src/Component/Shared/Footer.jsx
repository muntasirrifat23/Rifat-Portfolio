import { BiLogoGmail } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { ImFacebook2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
const Footer = () => {
    return (
        <div className='mt-10'>
            <footer className="footer footer-center p-10 bg-neutral text-white">
                <div>

                    <p className="text-lg">
                        <p className='font-bold text-xl'> Munshi Muntasir Rifat </p>
                        MERN Stack Developer <br />
                        Dhaka, Bangladesh <br />
                        +8801982742757
                    </p>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4 mb-20">
                        <span className='mr-4 text-2xl bg-black text-white p-4 rounded-xl'><a href="https://github.com/muntasirrifat23" target='blank' rel="noopener noreferrer"><FaGithub></FaGithub></a></span>
                        <span className='mr-4 text-2xl bg-orange-600 p-4 rounded-xl'><a href='mailto:rifat2002m@gmail.com' className='flex'><MdEmail></MdEmail></a></span>
                        <span className='mr-4 text-2xl bg-blue-600 p-4 rounded-xl'><a href="https://www.linkedin.com/in/munshi-muntasir-rifat/" target='blank'><GrLinkedin></GrLinkedin></a> </span>
                        <span className='mr-4 text-2xl bg-blue-700 p-4 text-white rounded-xl'><a href="https://www.facebook.com/muntasir.rifat.iubat.csew" target='blank'><ImFacebook2></ImFacebook2></a></span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;