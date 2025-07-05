import { useState } from "react";
import { cn } from "../../utils/cn";

const Boxes = ({
  isStartGame,
  setIsStartGame,
  setBoxData,
  boxData,
  boxGrid,
  showWinModal,
  betAmount,
}) => {
  const [showWarning, setShowWarning] = useState(false);
  const [loadingBoxId, setLoadingBoxId] = useState(null);

  const handleBoxClick = (box) => {
    if (isStartGame) {
      setLoadingBoxId(box.id);
      setTimeout(() => {
        setLoadingBoxId(null);
        if (box.mine) {
          const updatedBoxes = boxData?.map((boxObj) => ({
            ...boxObj,
            roundEnd: true,
            win: boxObj?.mine ? false : boxObj.win,
            showBox: boxObj.mine ? false : boxObj.win ? false : true,
            opacityFull: boxObj.mine && box.id === boxObj.id ? true : false,
          }));
          setBoxData(updatedBoxes);
          setIsStartGame(false);
        } else {
          const updatedBoxes = boxData?.map((boxObj) =>
            box?.id === boxObj.id
              ? {
                  ...boxObj,
                  win: true,
                  showBox: false,
                }
              : boxObj
          );
          setBoxData(updatedBoxes);
        }
      }, 200);
    } else {
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 2000);
    }
  };

  console.log(loadingBoxId);

  return (
    <div className="template__game">
      <div className="game _isLogo">
        <div className={`game__grid _${boxGrid}x${boxGrid} _disabled--`}>
          {boxData?.map((box) => {
            return (
              <div
                onClick={() => handleBoxClick(box)}
                key={box?.id}
                className={cn(
                  "game__item",
                  box?.win && "_diamondBlue",
                  box?.mine && box?.roundEnd && box?.opacityFull && "_bomb",
                  box?.mine &&
                    box?.roundEnd &&
                    !box?.opacityFull &&
                    "_bomb _end"
                )}
              >
                <div className="game__item-layout1">
                  <div className="game__item-layout2" />
                  {box?.mine && box?.roundEnd && box?.opacityFull && (
                    <div className="game__item-layout4"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Warning */}
        {showWarning && (
          <div className="start-alert _show">
            <div className="start-alert__alert">Please press Start Game</div>
          </div>
        )}

        {showWinModal && (
          <div className="win">
            <div className="win__inner">
              <div className="win__title">You win!</div>
              <div className="win__sum">{betAmount}</div>
              <div className="win__coefficient">
                Multiplier <span>x1.19</span>
              </div>
              <div className="win__wave"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Boxes;
