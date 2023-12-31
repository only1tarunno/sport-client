import img1 from "../../assets/benefit1.jpg";
import img2 from "../../assets/benefit-2.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Benefit = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="py-10 lg:py-16 bg-[#181818]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="container mx-auto px-5 xl:px-0 flex items-center justify-between gap-10 flex-wrap"
      >
        <div className="lg:w-[40%] w-full order-2 lg:order-1">
          <img src={img1} className="w-full" alt="" />
        </div>
        <div className="lg:w-[40%] w-full order-1 lg:order-2 text-center lg:text-start">
          <h3 className="text-xl text-white uppercase font-semibold">
            OUR BENEFITS
          </h3>
          <h2 className="font-bold text-white text-3xl lg:text-5xl mt-5">
            Unlimited group & <br /> personal trainings <br /> anywhere
          </h2>
        </div>
        <div className="lg:w-[40%] w-full order-3 text-center lg:text-start">
          <h3 className="font-bold text-white text-2xl mb-5 lg:text-4xl ">
            Personal trainings
          </h3>
          <p className="text-[#D6D6D6] max-w-lg text-xl">
            As the absolute opposite of clean and mess free moderation, rooms
            are crammed with mixed.
          </p>
          <h3 className="font-bold text-white text-2xl mb-5 lg:text-4xl mt-5">
            Group trainings
          </h3>
          <p className="text-[#D6D6D6] max-w-lg text-xl">
            As the absolute opposite of clean and mess free moderation, rooms
            are crammed with mixed.
          </p>
        </div>
        <div className="lg:w-[40%] w-full order-4">
          <img src={img2} className="w-full" alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default Benefit;
