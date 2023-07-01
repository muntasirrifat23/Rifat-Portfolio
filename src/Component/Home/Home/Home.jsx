import Header from '../Header/Header';
import Skills from '../Skills/Skills';
import MySelf from '../MySelf/MySelf';
import Contact from '../Contact/Contack';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects></Projects>
            <Skills></Skills>
            <MySelf></MySelf>
            <Contact></Contact>
        </div>
    );
};

export default Home;