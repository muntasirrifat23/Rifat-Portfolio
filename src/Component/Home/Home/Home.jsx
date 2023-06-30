import Header from '../Header/Header';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import MySelf from '../MySelf/MySelf';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Skills></Skills>
            <MySelf></MySelf>
            <Projects></Projects>
        </div>
    );
};

export default Home;