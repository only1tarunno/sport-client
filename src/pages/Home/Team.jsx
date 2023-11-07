import team1 from "../../assets/t-1.jpg";
import team2 from "../../assets/t2.jpg";
import team3 from "../../assets/t3.jpg";
import team4 from "../../assets/t4.jpg";
import team5 from "../../assets/t5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Typewriter } from "react-simple-typewriter";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="container mx-auto px-5 xl:px-0 my-10 lg:my-16"
    >
      <div>
        <h3 className="text-xl text-[#212121] uppercase font-semibold text-center">
          OUR TRAINERS
        </h3>
        <h2 className="font-bold text-[#212121] text-3xl lg:text-5xl my-3 text-center max-w-3xl mx-auto">
          Our skilled team of {""}
          <span style={{ color: "red", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["Experts", "Trainers", "Coaches"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
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
              slidesPerView: 3,
              spaceBetween: 20,
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
    </motion.div>
  );
};

export default Team;
