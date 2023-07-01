import SkillBar from 'react-skillbars';
import development from '../../../../public/dev.jpg'
import Aos from 'aos';
import { useEffect } from 'react';
const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);
    const skills = [
        { type: 'React', level: 95 },
        { type: 'Javascript', level: 90 },
        { type: 'Tailwind', level: 99 },
        { type: 'Bootstrap', level: 99 },
        { type: 'HTML', level: 100 },
        { type: 'CSS', level: 98 },
        { type: 'NodeJS', level: 70 },
        { type: 'Mongodb', level: 75 },
        { type: 'ExpressJs', level: 60 },
    ];
    const colors = {
        bar: "#3498db",
        title: {
            text: "#white",
            background: "#2980b9"
        }
    };

    return (
        <div className='mt-20' id='skills'>
            <p data-aos='fade-up' className='text-center text-4xl font-bold text-white'>My Skills</p>
            <div className='justify-evenly lg:flex justify-center items-center'>
                
                <div className='justify-center items-center flex'>
                <img data-aos='fade-right' className='h-96 mt-7 rounded-xl' src={development} alt="" />
                </div>
               
                {/* <div className='lg:justify-center lg:items-center lg:flex'> */}
                <div data-aos='fade-left' className='lg:w-1/2 w-3/4 mt-5 sm:mt-5 justify-center items-center '>
                    <SkillBar skills={skills} colors={colors} />
                </div>
                {/* </div> */}
               
            </div>
        </div>
    );
};

export default Skills;