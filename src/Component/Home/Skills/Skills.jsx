import SkillBar from 'react-skillbars';
import development from '../../../../public/dev.jpg'
import Aos from 'aos';
import { useEffect } from 'react';
const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);
    const skills = [
        { type: 'React', level: 100 },
        { type: 'Javascript', level: 90 },
        { type: 'Tailwind', level: 100 },
        { type: 'Bootstrap', level: 100 },
        { type: 'HTML', level: 100 },
        { type: 'CSS', level: 98 },
        { type: 'NodeJS', level: 90 },
        { type: 'Mongodb', level: 90 },
        { type: 'ExpressJs', level: 90 },
        // { type: 'TypeScript', level: 90 },
    ];
    const colors = {
        bar: "#3498db",
        title: {
            text: "#white",
            background: "#2980b9"
        }
    };

    return (
        <div className='mt-20' id='skill'>
            <p data-aos='fade-up' className='text-center text-4xl font-bold text-white'>My Skills</p>
            <div className=' lg:flex justify-center items-center'>
                
                <div className='justify-center items-center flex lg:mx-auto'>
                <img data-aos='fade-right' className='h-96 mt-7 rounded-xl' src={development} alt="" />
                </div>
               
                <div data-aos='fade-left' className='lg:w-1/2 w-3/4 mt-5 sm:mt-5 mx-auto'>
                    <SkillBar skills={skills} colors={colors} />
                </div>
               
            </div>
        </div>
    );
};

export default Skills;