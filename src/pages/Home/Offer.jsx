import offer1 from "../../assets/offer1.png";
import offer2 from "../../assets/offer2.png";
import offer3 from "../../assets/offer3.png";
import offer4 from "../../assets/offer4.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Offer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="py-10 lg:py-16 bg-[#181818]"
    >
      <div className="container mx-auto px-5 xl:px-0">
        <div className="">
          <h3 className="text-xl text-center text-white uppercase font-semibold">
            WHAT WE OFFER
          </h3>
          <h2 className="font-bold text-center text-white text-3xl lg:text-5xl mt-5">
            The best standards <br /> anywhere
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center">
          <div className="mt-10 lg:mt-14">
            <img
              src={offer1}
              alt="Skilled trainers"
              className="w-20 mx-auto mb-5"
            />
            <h3 className="text-white font-bold text-2xl mb-2">
              Skilled trainers
            </h3>
            <p className="text-[#D6D6D6] w-64 mx-auto">
              Our expert trainers with over 150 hours of education will work
              with you to create a custom plan
            </p>
          </div>
          <div className="mt-10 lg:mt-14">
            <img
              src={offer2}
              alt="Quality equipment"
              className="w-20 mx-auto mb-5"
            />
            <h3 className="text-white font-bold text-2xl mb-2">
              Quality equipment
            </h3>
            <p className="text-[#D6D6D6] w-64 mx-auto">
              Our expert trainers with over 150 hours of education will work
              with you to create a custom plan
            </p>
          </div>
          <div className="mt-10 lg:mt-14">
            <img
              src={offer3}
              alt="Skilled trainers"
              className="w-20 mx-auto mb-5"
            />
            <h3 className="text-white font-bold text-2xl mb-2">
              Shower cabins
            </h3>
            <p className="text-[#D6D6D6] w-64 mx-auto">
              Our expert trainers with over 150 hours of education will work
              with you to create a custom plan
            </p>
          </div>
          <div className="mt-10 lg:mt-14">
            <img
              src={offer4}
              alt="Skilled trainers"
              className="w-20 mx-auto mb-5"
            />
            <h3 className="text-white font-bold text-2xl mb-2">
              Sport nutrition
            </h3>
            <p className="text-[#D6D6D6] w-64 mx-auto">
              Our expert trainers with over 150 hours of education will work
              with you to create a custom plan
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Offer;
