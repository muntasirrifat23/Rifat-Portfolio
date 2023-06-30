import { BiLogoGmail } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { ImFacebook2 } from 'react-icons/im';
const Footer = () => {
    return (
        <div className='mt-10'>
            <footer className="footer footer-center p-10 bg-neutral text-neutral-content">
                <div>

                    <p className="text-lg">
                        <p className='font-bold text-xl'> Munshi Muntasir Rifat </p>
                        MERN Stack Developer <br />
                        Dhaka, Bangladesh
                    </p>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <span className='mr-4 text-2xl'><a href="https://github.com/muntasirrifat23" target='blank' rel="noopener noreferrer"><FaGithub></FaGithub></a></span>

                        <span className='mr-4 text-2xl'><a href='mailto:rifat2002m@gmail.com' className='flex'><BiLogoGmail /></a></span>

                        <span className='mr-4 text-2xl'><a href="https://www.linkedin.com/in/munshi-muntasir-rifat/" target='blank'><GrLinkedin></GrLinkedin></a> </span>

                        <span className='mr-4 text-2xl'><a href="https://www.facebook.com/muntasir.rifat.iubat.cse" target='blank'><ImFacebook2></ImFacebook2></a></span>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;