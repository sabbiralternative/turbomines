import { useEffect, useState } from "react";
import BetSlip from "./BetSlip";
import Boxes from "./Boxes";
import Navbar from "./Navbar";
const minesNumber = {
  3: [2, 3, 5, 7],
  5: [3, 5, 7, 10],
  7: [5, 7, 10, 12],
  9: [10, 12, 15, 20],
};
const boxes = {
  3: 9,
  5: 20,
  7: 49,
  9: 81,
};

const Home = () => {
  const [betAmount, setBetAmount] = useState(100);
  const [boxGrid, setBoxGrid] = useState(5);
  const [mines, setMines] = useState(3);
  const [isStartGame, setIsStartGame] = useState(false);
  const [showWinModal, setShowWinModal] = useState(false);
  // const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const [isDesktop, setIsDesktop] = useState(false);
  const initialBoxData = Array.from({ length: boxes[boxGrid] }, (_, i) => ({
    name: `box${i + 1}`,
    id: i + 1,
    mine: (i + 1) % boxGrid === 0,
    showBox: true,
    win: false,
    roundEnd: false,
    opacityFull: false,
  }));
  const [boxData, setBoxData] = useState(initialBoxData);
  const isAtLeastOneBoxWin = boxData.some((box) => box.win);

  const handleChangeBetAmount = (type) => {
    if (type === "minus") {
      if (betAmount > 0 && betAmount <= 100) {
        setBetAmount((prev) => Math.max(prev - 10, 0));
      } else if (betAmount > 100 && betAmount <= 1000) {
        setBetAmount((prev) => Math.max(prev - 100, 0));
      } else if (betAmount > 1000) {
        setBetAmount((prev) => Math.max(prev - 500, 0));
      }
    }
    if (type === "plus") {
      if (betAmount >= 0 && betAmount < 100) {
        setBetAmount((prev) => prev + 10);
      } else if (betAmount >= 100 && betAmount < 1000) {
        setBetAmount((prev) => prev + 100);
      } else if (betAmount >= 1000) {
        setBetAmount((prev) => prev + 500);
      }
    }
  };

  const handleStartGame = () => {
    setIsStartGame((prev) => !prev);
    setBoxData(initialBoxData);
  };

  const handleCashOut = async () => {
    const findBoxAndChange = boxData?.map((boxObj) => ({
      ...boxObj,
      win: boxObj?.mine ? false : boxObj.win,
      roundEnd: true,
      showBox: boxObj.mine ? false : boxObj.win ? false : true,
    }));

    setBoxData(findBoxAndChange);
    setIsStartGame(false);
    setShowWinModal(true);

    setTimeout(() => {
      setShowWinModal(false);
    }, 2000);

    setTimeout(() => {
      setBoxData(initialBoxData);
    }, 2500);
  };

  useEffect(() => {
    setMines(minesNumber?.[boxGrid]?.[0]);
    setBoxData(initialBoxData);
  }, [boxGrid]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        console.log(window.innerWidth);
        // setDeviceWidth(400);
        setIsDesktop(true);
      } else {
        // setDeviceWidth(window.innerWidth);
        setIsDesktop(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="app"
      style={{
        width: isDesktop ? "420px" : "100%",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <Navbar isDesktop={isDesktop} />
      <div className="template _isLogo">
        <div className="template__inner">
          <div className="template__portrait-logo" />
          <Boxes
            betAmount={betAmount}
            showWinModal={showWinModal}
            setIsStartGame={setIsStartGame}
            boxGrid={boxGrid}
            boxData={boxData}
            setBoxData={setBoxData}
            isStartGame={isStartGame}
          />
          <BetSlip
            handleCashOut={handleCashOut}
            isAtLeastOneBoxWin={isAtLeastOneBoxWin}
            isStartGame={isStartGame}
            handleStartGame={handleStartGame}
            boxGrid={boxGrid}
            mines={mines}
            setBoxGrid={setBoxGrid}
            setMines={setMines}
            handleChangeBetAmount={handleChangeBetAmount}
            betAmount={betAmount}
            setBetAmount={setBetAmount}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
