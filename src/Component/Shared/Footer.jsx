import React from 'react';
import { BsWhatsapp, BsGithub } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

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

                            <div className="flex items-center justify-center">
                                <a href="https://api.whatsapp.com/send?phone=+8801982742757" target="_blank" rel="noopener noreferrer" className='flex'>
                                    <BsWhatsapp /> <span className='ml-2'>Whats App</span>
                                </a>
                            </div>

                        <div className="flex items-center justify-center">
                            <a href='https://github.com/muntasirrifat23' className='flex'>
                                <BsGithub /><span className='ml-2'> GitHub </span>
                            </a>
                        </div>

                        <div className="flex items-center justify-center">
                            <a href='mailto:rifat2002m@gmail.com' className='flex'>
                                <BiLogoGmail /><span className='ml-2'> Gmail </span>
                            </a>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;