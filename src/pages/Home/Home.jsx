import BetSlip from "./BetSlip";
import Boxes from "./Boxes";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div id="app">
      <Navbar />
      <div className="template _isLogo">
        <div className="template__inner">
          <div className="template__portrait-logo" />
          <Boxes />
          <BetSlip />
        </div>
      </div>
    </div>
  );
};

export default Home;
