import './Project.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


//Food Court Images
import food1 from '../../../../public/Food/UserPage/home1.png'
import food2 from '../../../../public/Food/UserPage/home2.png'
import food3 from '../../../../public/Food/UserPage/home3.png'
import food4 from '../../../../public/Food/UserPage/items.png'
import food5 from '../../../../public/Food/UserPage/order.png'
import food6 from '../../../../public/Food/UserPage/payment.png'
import food7 from '../../../../public/Food/UserPage/pOrder.png'
import food8 from '../../../../public/Food/UserPage/reserve.png'
import food9 from '../../../../public/Food/UserPage/login.png'
import food10 from '../../../../public/Food/UserPage/registration.png'
import foodAdd1 from '../../../../public/Food/Admin Interface/admin h1.png'
import foodAdd2 from '../../../../public/Food/Admin Interface/admin h2.png'
import foodAdd3 from '../../../../public/Food/Admin Interface/admin items.png'
import foodAdd4 from '../../../../public/Food/Admin Interface/admin revenue.png'
import foodAdd5 from '../../../../public/Food/Admin Interface/admin updateItems.png'
import foodAdd6 from '../../../../public/Food/Admin Interface/admin addItems.png'
import foodAdd7 from '../../../../public/Food/Admin Interface/admin user.png'

//Toy Images
import toy1 from '../../../../public/Toy/Screenshot_1.png'
import toy2 from '../../../../public/Toy/Screenshot_2.png'
import toy3 from '../../../../public/Toy/Screenshot_3.png'
import toy4 from '../../../../public/Toy/Screenshot_4.png'
import toy5 from '../../../../public/Toy/Screenshot_5.png'
import toy6 from '../../../../public/Toy/Screenshot_6.png'

// Camp Images
import camp1 from '../../../../public/Camp/Screenshot_1.png'
import camp2 from '../../../../public/Camp/Screenshot_2.png'
import camp3 from '../../../../public/Camp/Screenshot_3.png'
import camp4 from '../../../../public/Camp/Screenshot_4.png'
import camp5 from '../../../../public/Camp/Screenshot_5.png'
import camp6 from '../../../../public/Camp/Screenshot_6.png'
import camp7 from '../../../../public/Camp/Screenshot_6.png'
import camp8 from '../../../../public/Camp/Screenshot_1.png'
import camp9 from '../../../../public/Camp/Screenshot_2.png'
import camp10 from '../../../../public/Camp/Screenshot_3.png'


import { BsGithub, BsEye } from "react-icons/bs";

const Projects = () => {
return (
  <div id='project'>
    <>
   <p data-aos='fade-up' className='text-center text-4xl font-bold text-white'>Some of my Projects</p>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex justify-center mt-5'>
      

      {/* Card 1 Food */}
      <div className='justify-center items-center flex'>
      <div className="card w-96 bg-white text-black shadow-xl">
        <div className="card-body">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide><img src={food1}></img></SwiperSlide>
            <SwiperSlide><img src={food2}></img></SwiperSlide>
            <SwiperSlide><img src={food3}></img></SwiperSlide>
            <SwiperSlide><img src={food4}></img></SwiperSlide>
            <SwiperSlide><img src={food5}></img></SwiperSlide>
            <SwiperSlide><img src={food6}></img></SwiperSlide>
            <SwiperSlide><img src={food7}></img></SwiperSlide>
            <SwiperSlide><img src={food8}></img></SwiperSlide>
            <SwiperSlide><img src={food9}></img></SwiperSlide>
            <SwiperSlide><img src={food10}></img></SwiperSlide>
            <SwiperSlide><img src={foodAdd1}></img></SwiperSlide>
            <SwiperSlide><img src={foodAdd2}></img></SwiperSlide>
            <SwiperSlide><img src={foodAdd3}></img></SwiperSlide>
            <SwiperSlide><img src={foodAdd4}></img></SwiperSlide>
            <SwiperSlide><img src={foodAdd5}></img></SwiperSlide>
            <SwiperSlide><img src={foodAdd6}></img></SwiperSlide>
            <SwiperSlide><img src={foodAdd7}></img></SwiperSlide>
          </Swiper>
          <h2 className="card-title font-bold text-2xl">Food Court</h2>
          <p className='text-lg'>Restaurant </p>

          {/* Technology */}
          <div className='flex text-white '>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3'>ReactJs</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3 ml-2'>Tailwind</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3 ml-2'>daisyUi</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3 ml-2'>Firebase</p>
          </div>
          </div>
          <div className='flex text-white '>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3'>NodeJS</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3 ml-2'>ExpressJS</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3 ml-2'>MongoDB</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3 ml-2'>SSL</p>
          </div>
          </div>

         {/* Link */}
         <div className="flex justify-between mt-5">
                    <a href='https://food-court-33137.web.app' className="card-link flex" target='blank'><BsEye className='mr-2 mt-1'></BsEye> Live Site</a>
                    <a href='https://github.com/muntasirrifat23/restaurant-front' className="card-link flex"><BsGithub className='mr-2 mt-1' target='_blank'></BsGithub> Client Code</a>
                    <a href='https://github.com/muntasirrifat23/restaurant-backend' className="card-link flex"><BsGithub className='mr-2 mt-1' target='_blank'></BsGithub> Server Code</a>
         </div>
        </div>
      </div>
      </div>


      {/* Card 2 Toy*/}
      <div className='justify-center items-center flex'>
      <div className="card w-96 bg-white text-black shadow-xl">
        <div className="card-body">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide><img src={toy1}></img></SwiperSlide>
            <SwiperSlide><img src={toy2}></img></SwiperSlide>
            <SwiperSlide><img src={toy3}></img></SwiperSlide>
            <SwiperSlide><img src={toy4}></img></SwiperSlide>
            <SwiperSlide><img src={toy5}></img></SwiperSlide>
            <SwiperSlide><img src={toy6}></img></SwiperSlide>
          </Swiper>
          <h2 className="card-title font-bold text-2xl">Toy Shop</h2>
          <p className='text-lg'>Technologies </p>

          {/* Technology */}
          <div className='flex text-white '>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3'>ReactJs</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3 ml-2'>Tailwind</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3 ml-2'>daisyUi</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3 ml-2'>Firebase</p>
          </div>
          </div>
          <div className='flex text-white '>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3'>NodeJS</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3 ml-2'>ExpressJS</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3 ml-2'>MongoDB</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3 ml-2'>JWT</p>
          </div>
          </div>
         
         {/* Link */}
          <div className="flex justify-between mt-5">
                    <a href='https://amazing-toy.netlify.app/' className="card-link flex" target='blank'><BsEye className='mr-2 mt-1'></BsEye> Live Site</a>
                    <a href='https://github.com/muntasirrifat23/Toy-Shop-Client' className="card-link flex"><BsGithub className='mr-2 mt-1' target='_blank'></BsGithub> Client Code</a>
                    <a href='https://github.com/muntasirrifat23/Toy-Shop-Server' className="card-link flex"><BsGithub className='mr-2 mt-1' target='_blank'></BsGithub> Server Code</a>
                </div>
        </div>
      </div>
      </div>

      {/* Card 3 Camp */}
      <div className='justify-center items-center flex'>
      <div className="card w-96 bg-white text-black shadow-xl">
        <div className="card-body">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide><img src={camp1}></img></SwiperSlide>
            <SwiperSlide><img src={camp2}></img></SwiperSlide>
            <SwiperSlide><img src={camp3}></img></SwiperSlide>
            <SwiperSlide><img src={camp4}></img></SwiperSlide>
            <SwiperSlide><img src={camp5}></img></SwiperSlide>
            <SwiperSlide><img src={camp6}></img></SwiperSlide>
            <SwiperSlide><img src={camp7}></img></SwiperSlide>
            <SwiperSlide><img src={camp8}></img></SwiperSlide>
            <SwiperSlide><img src={camp9}></img></SwiperSlide>
            <SwiperSlide><img src={camp10}></img></SwiperSlide>
          </Swiper>
          <h2 className="card-title font-bold text-2xl">School Camp</h2>
          <p className='text-lg'>Technologies </p>

          {/* Technology */}
          <div className='flex text-white '>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3'>React</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3 ml-2'>Tailwind</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3 ml-2'>daisyUi</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3 ml-2'>Firebase</p>
          </div>
          </div>

          <div className='flex text-white '>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3'>Node JS</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3 ml-2'>Express JS</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3 ml-2'>MongoDB</p>
          </div>
          </div>
         
         {/* Link */}
          <div className="flex justify-between mt-5">
                    <a href='https://milestone-12-e2b37.web.app/' className="card-link flex" target='blank'><BsEye className='mr-2 mt-1'></BsEye> Live Site</a>
                    <a href='https://github.com/muntasirrifat23/Crazy-Camp-Client-' className="card-link flex"><BsGithub className='mr-2 mt-1' target='_blank'></BsGithub> Client Code</a>
                    <a href='https://github.com/muntasirrifat23/Crazy-Camp-Server' className="card-link flex"><BsGithub className='mr-2 mt-1' target='_blank'></BsGithub>Server Code</a>
                </div>
                </div>
        </div>
      </div>

    </div>
  
  </>
  </div>
   
  );
};

export default Projects;