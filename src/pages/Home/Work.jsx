import Marquee from "react-fast-marquee";
import l1 from "../../assets/l1.jpg";
import l2 from "../../assets/l2.jpg";
import l3 from "../../assets/l3.jpg";
import l4 from "../../assets/l4.jpg";
import l5 from "../../assets/l5.jpg";

const Work = () => {
  return (
    <div className=" md:py-20 bg-[#3c8599] py-16 ">
      <div className="container mx-auto px-5 lg:px-0">
        <h2
          className={`pb-3 text-[#0a0b09] text-3xl text-center my-3 lg:text-5xl font-bold`}
        >
          We work with the best
        </h2>
        <div className="mt-10">
          <Marquee>
            <img src={l1} alt="" className="mx-10 h-32  object-cover" />
            <img src={l2} alt="" className="mx-10 h-32  object-cover" />
            <img src={l3} alt="" className="mx-10 h-32 object-cover" />
            <img src={l4} alt="" className="mx-10 h-32 object-cover" />
            <img src={l5} alt="" className="mx-10 h-32 object-cover" />
            <img src={l1} alt="" className="mx-10 h-32  object-cover" />
            <img src={l2} alt="" className="mx-10 h-32  object-cover" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Work;
