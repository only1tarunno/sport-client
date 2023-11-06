import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Offer from "./Offer";
import Services from "./Services";
import Team from "./Team";
import Work from "./Work";
import Benefit from "./benefit";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ClubFit | Home</title>
      </Helmet>
      <Banner></Banner>
      <Benefit></Benefit>
      <Services></Services>
      <Offer></Offer>
      <Team></Team>
      <Work></Work>
    </div>
  );
};

export default Home;
