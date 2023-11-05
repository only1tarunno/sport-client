import team1 from "../../assets/t-1.jpg";
import team2 from "../../assets/t2.jpg";
import team3 from "../../assets/t3.jpg";
import team4 from "../../assets/t4.jpg";
import team5 from "../../assets/t5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Team = () => {
  return (
    <div className="container mx-auto px-5 lg:px-0 my-10 lg:my-16">
      <div>
        <h3 className="text-xl text-[#212121] uppercase font-semibold text-center">
          OUR TRAINERS
        </h3>
        <h2 className="font-bold text-[#212121] text-3xl lg:text-5xl my-3 text-center max-w-3xl mx-auto">
          Meet our skilled team of professionals.
        </h2>
      </div>
      <div className=" mt-10 md:mt-14">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@1.00": {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            "@1.50": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@2.50": {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img src={team1} alt="" />
              <h3 className="text-[#212121] text-2xl font-bold text-center mt-5 mb-1">
                John Williams
              </h3>
              <p className="text-center text-[#3C8599] font-medium text-base">
                BOX TRAINER
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={team2} alt="" />
              <h3 className="text-[#212121] text-2xl font-bold text-center mt-5 mb-1">
                Kate Moore
              </h3>
              <p className="text-center text-[#3C8599] font-medium text-base">
                PILATES TRAINER
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={team3} alt="" />
              <h3 className="text-[#212121] text-2xl font-bold text-center mt-5 mb-1">
                Morgan Cooper
              </h3>
              <p className="text-center text-[#3C8599] font-medium text-base">
                CROSSFIT TRAINER
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={team4} alt="" />
              <h3 className="text-[#212121] text-2xl font-bold text-center mt-5 mb-1">
                Alisa Fox
              </h3>
              <p className="text-center text-[#3C8599] font-medium text-base">
                PILATES TRAINER
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={team5} alt="" />
              <h3 className="text-[#212121] text-2xl font-bold text-center mt-5 mb-1">
                James Taylor
              </h3>
              <p className="text-center text-[#3C8599] font-medium text-base">
                CROSSFIT TRAINER
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
