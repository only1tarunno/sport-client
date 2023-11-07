import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

import { EffectCoverflow } from "swiper/modules";

const Banner = () => {
  const itemsData = [
    {
      name: "No matter your fitness level",
      bgimg: "https://i.ibb.co/37CDxTd/b-1.jpg",
      description:
        " Whether you're a beginner taking your first steps towards a healthier lifestyle or an advanced athlete striving for peak performance, our fitness and sports services are designed to meet you where you are.",
    },
    {
      name: "MAKE REAL RESULTS HAPPEN",
      bgimg: "https://i.ibb.co/BcS0ntJ/b-2.jpg",
      description:
        "Turn your fitness aspirations into tangible achievements with our dedicated training programs. Our expert instructors are committed to helping you achieve real, lasting results. Experience the difference and unlock your full potential today!",
    },
    {
      name: "MORE THAN WORKOUT",
      bgimg: "https://i.ibb.co/9W7VdJ4/b-3.jpg",
      description:
        "It's a lifestyle. Elevate your fitness journey with our holistic approach, combining exercise, nutrition, and expert guidance. Discover a path to well-being, strength, and vitality.",
    },
  ];

  const { name, image, description, bgimg } = itemsData[0];
  const bannerInfo = { name, image, description, bgimg };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [curentinfo, setCurrentinfo] = useState(bannerInfo);
  const [my_swiper, set_my_swiper] = useState({});

  const handleNextClick = () => {
    const current = (currentIndex + 1) % itemsData.length;
    setCurrentIndex(current);
    my_swiper.slideNext();
    const singleSlider = itemsData.find(
      (singleSlider, index) => index === current
    );
    const { name, description, bgimg } = singleSlider;
    setCurrentinfo({ name, description, bgimg });
  };

  const handlePrevClick = () => {
    let current = currentIndex - 1;
    if (current < 0) {
      current = 0;
    }
    my_swiper.slidePrev();
    setCurrentIndex(current);
    const singleSlider = itemsData.find(
      (singleSlider, index) => index === current
    );
    const { name, description, bgimg } = singleSlider;
    setCurrentinfo({ name, description, bgimg });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${curentinfo.bgimg})`,
      }}
      className="home-banner  bg-no-repeat bg-cover"
    >
      <div className="container mx-auto min-h-[90vh] relative z-50 flex justify-center py-8 lg:py-0 lg:justify-between items-center flex-col lg:flex-row">
        <div className="w-full lg:w-[600px] space-y-4 px-5 xl:px-0 text-center lg:text-start">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-bold text-4xl uppercase lg:text-7xl text-white"
          >
            {curentinfo.name}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-base lg:text-lg text-white  font-semibold"
          >
            {curentinfo.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            <button className="btn">Get started</button>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
          <Swiper
            onInit={(ev) => {
              set_my_swiper(ev);
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow]}
            className="mySwiper"
          ></Swiper>
        </div>
      </div>
      <div className="button-group absolute bottom-10 z-50 left-1/2 -translate-x-2/4 flex gap-3">
        <button
          className="text-black flex justify-center items-center  text-3xl w-12 h-12 rounded-full bg-white "
          onClick={handlePrevClick}
        >
          <FaAngleLeft />
        </button>
        <button
          className="text-black  flex justify-center  items-center text-3xl w-12 h-12 rounded-full bg-white "
          onClick={handleNextClick}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;
