import Nav from '../Shared/Nav';
import { Outlet } from 'react-router-dom';
// import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div className="bg-slate-800 text-white w-full">
            <Nav></Nav>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;