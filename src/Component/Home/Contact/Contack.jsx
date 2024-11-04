import { useEffect, useRef } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { RiMessageFill } from 'react-icons/ri'
import { MdLocationOn } from 'react-icons/md'
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import Aos from 'aos';

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    const form = useRef();
    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_zrdaq8m', 'template_c0opmoz', form.current, 'MFLg2Xg-fHwvvYuMW')
            .then((result) => {
                console.log(result.text);
                toast.success("Successfully Sent Email")
            }, (error) => {
                console.log(error.text);
            });
            event.target.reset();
    };

    return (
        <div data-aos='fade-up' id='contact' className='lg:p-15 p-4 mt-12'>
            <h1 className='font-bold text-center mt-5 mb-8 text-white text-5xl'>Contact Me</h1>
            <div className='lg:flex justify-evenly p-14 mb-10 bg-gray-900'>
                <div className='rounded-lg lg:p-8'>
                    <h1 className='text-3xl font-bold mb-14'>Please fill out the form and I will respond to you within 24 hours.</h1>
                    <a href=' ' className='flex text-xl font-bold mb-8'><BsFillTelephoneFill className='mt-1 mr-5'></BsFillTelephoneFill> +8801982742757</a>
                    <a href=' ' className='flex text-xl font-bold mb-8'><RiMessageFill className='mt-1 mr-5 text-2xl'></RiMessageFill>rifat2002m@gmail.com</a>
                    <h1 className='flex text-xl font-bold'><MdLocationOn className='mr-5 text-3xl'></MdLocationOn>Gazipur, Bangladesh</h1>
                 
                </div>
                <div data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className='rounded-xl lg:mt-0 mt-12 lg:p-8 bg-white shadow-xl'>
                    <h1 className='title text-center text-3xl font-bold mb-8'>Text Me</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='login-form flex justify-evenly'>
                            <label htmlFor="name" className='text-xl  text-black font-bold'>Name : </label>
                            <input type="text" className='p-2 lg:w-80 bg-black text-white rounded-xl' name='name' placeholder='Enter Your Name' required/>
                        </div>
                        <br />
                        <div className='login-form flex justify-evenly'>
                            <label htmlFor="email" className='text-xl  text-black font-bold'>Email : </label>
                            <input type="email" className='p-2 lg:w-80 bg-black text-white rounded-xl' name='email' placeholder='Your Email Address' required />
                        </div>
                        <br />
                        
                        <textarea  name='message' className="textarea textarea-success text-black bg-white h-50 ml-3 w-96" placeholder="Send Message...." required></textarea> <br />
                        <button type='submit' className='btn bg-black text-white ml-3 mb-3'>Submit</button>
                    </form>  
                </div>
            </div>
        </div>
    );
};

export default Contact;