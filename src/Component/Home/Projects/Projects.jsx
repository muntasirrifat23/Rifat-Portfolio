import './Project.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import toy1 from '../../../../public/Toy/Screenshot_1.png'
import toy2 from '../../../../public/Toy/Screenshot_2.png'
import toy3 from '../../../../public/Toy/Screenshot_3.png'
import toy4 from '../../../../public/Toy/Screenshot_4.png'
import toy5 from '../../../../public/Toy/Screenshot_5.png'
import toy6 from '../../../../public/Toy/Screenshot_6.png'
import { BsGithub, BsEye } from "react-icons/bs";
import ai1 from '../../../../public/AI/Screenshot_1.png'
import ai2 from '../../../../public/AI/Screenshot_2.png'
import ai3 from '../../../../public/AI/Screenshot_3.png'
import ai4 from '../../../../public/AI/Screenshot_4.png'
import ai5 from '../../../../public/AI/Screenshot_5.png'
import ai6 from '../../../../public/AI/Screenshot_6.png'
import ai7 from '../../../../public/AI/Screenshot_6.png'

import camp1 from '../../../../public/AI/Screenshot_1.png'
import camp2 from '../../../../public/AI/Screenshot_2.png'
import camp3 from '../../../../public/AI/Screenshot_3.png'
import camp4 from '../../../../public/AI/Screenshot_4.png'
import camp5 from '../../../../public/AI/Screenshot_5.png'
import camp6 from '../../../../public/AI/Screenshot_6.png'
import camp7 from '../../../../public/AI/Screenshot_6.png'
import camp8 from '../../../../public/AI/Screenshot_1.png'
import camp9 from '../../../../public/AI/Screenshot_2.png'
import camp10 from '../../../../public/AI/Screenshot_3.png'



const Projects = () => {
return (
  <div id='project'>
    <>
   <p data-aos='fade-up' className='text-center text-4xl font-bold text-white'>Some of my Projects</p>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex justify-center mt-5'>
      

      {/* Card 1 */}
      <div className='justify-center items-center flex'>
      <div className="card w-96 bg-white text-black shadow-xl">
        <div className="card-body">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide><img src={ai1}></img></SwiperSlide>
            <SwiperSlide><img src={ai2}></img></SwiperSlide>
            <SwiperSlide><img src={ai3}></img></SwiperSlide>
            <SwiperSlide><img src={ai4}></img></SwiperSlide>
            <SwiperSlide><img src={ai5}></img></SwiperSlide>
            <SwiperSlide><img src={ai6}></img></SwiperSlide>
            <SwiperSlide><img src={ai7}></img></SwiperSlide>
          </Swiper>
          <h2 className="card-title font-bold text-2xl">Ai Universe</h2>
          <p className='text-lg'>Technologies </p>

          {/* Technology */}
          <div className='flex text-white '>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3'>HTML5</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3 ml-2'>CSS3</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3 ml-2'>Bootstrap</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-sky-600 rounded-xl p-3 ml-2'>JavaScript</p>
          </div>
          </div>
         {/* Link */}
          <div className="flex justify-between mt-5">
                    <a href='https://transcendent-sprite-491db2.netlify.app/' className="card-link flex" target='blank'><BsEye className='mr-2 mt-1'></BsEye> Live Site</a>
                    <a href='https://github.com/muntasirrifat23/ai-universe' className="card-link flex"><BsGithub className='mr-2 mt-1' target='_blank'></BsGithub> Client Code</a>
                </div>
        </div>
      </div>
      </div>


      {/* Card 2 */}
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
                    <a href='https://toy-shop-5ed6f.web.app/' className="card-link flex" target='blank'><BsEye className='mr-2 mt-1'></BsEye> Live Site</a>
                    <a href='https://github.com/muntasirrifat23/Toy-Shop-Client' className="card-link flex"><BsGithub className='mr-2 mt-1' target='_blank'></BsGithub> Client Code</a>
                    <a href='https://github.com/muntasirrifat23/Toy-Shop-Server' className="card-link flex"><BsGithub className='mr-2 mt-1' target='_blank'></BsGithub> Server Code</a>
                </div>
        </div>
      </div>
      </div>

      {/* Card 3 */}
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