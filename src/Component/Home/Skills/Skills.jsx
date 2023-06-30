import SkillBar from 'react-skillbars';
import development from '../../../../public/dev.jpg'
const Skills = () => {
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
            text: "#fff",
            background: "#2980b9"
        }
    };

    return (
        <div className='mt-10'>
            <p data-aos='fade-up' className='text-center text-4xl font-bold text-white mb-10'>My Skills</p>
            <div className='justify-evenly lg:flex justify-center items-center'>
                
                <img data-aos='fade-right' className='h-96 mt-7 rounded-xl' src={development} alt="" />
                <div data-aos='fade-left' className='lg:w-1/2 w-3/4 mt-5 sm:mt-5 justify-center items-center '>
                    <SkillBar skills={skills} colors={colors} />
                </div>
            </div>
        </div>
    );
};

export default Skills;