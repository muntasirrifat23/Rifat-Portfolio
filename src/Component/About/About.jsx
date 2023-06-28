import cover from '../../../public/Cover.jpg'
const About = () => {
    return (
        <div>
            <p className='text-center mx-auto border-black text-3xl text-white font-bold mt-10'>About My-Self</p>

            <div className="hero">

            <div className="hero-content flex-col lg:flex-row">
                <div className='w-6/12'>
                <img src={cover} alt="" className='rounded-full' style={{ width: '400px', height: '440px' }} />
                <div className='text-center'>
                   <p>Hi....</p> 
                   <h1>I live in Dhaka Bangladesh. I have been establishing myself in the web development sector for a year. I like to see, understand and learn new things. So I never get tired of learning.</h1>
                </div>
                </div>

                <div>
                    <p className='text-xl font-bold'>Programming Knowledge and skills</p>
                    <div>
                        <p className='text-center mt-5'>Expertise</p>
                    </div>
                </div>
             
            </div>
            </div>
        </div>
    );
};

export default About;