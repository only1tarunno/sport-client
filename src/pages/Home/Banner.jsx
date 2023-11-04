import banner1 from "../../assets/b-1.jpg";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner1})`,
      }}
      className="bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-center"
    >
      <div className="container mx-auto px-5 lg:px-0">
        <h3 className="text-base text-[#212121] uppercase font-semibold">
          You Are more than just a member
        </h3>
        <h1 className="font-bold text-4xl md:text-5xl lg:text-8xl text-[#212121] my-5">
          No matter your <br /> fitness level.
        </h1>
        <button className="btn">Get started</button>
      </div>
    </div>
  );
};

export default Banner;
