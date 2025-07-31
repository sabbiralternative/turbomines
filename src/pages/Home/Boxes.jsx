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
  activeBoxCount,
  addOrder,
}) => {
  const [showWarning, setShowWarning] = useState(false);
  // const [loadingBoxId, setLoadingBoxId] = useState(null);

  const handleBoxClick = async (box) => {
    if (isStartGame) {
      // setLoadingBoxId(box.id);

      const round_id = sessionStorage.getItem("round_id");
      const payload = [
        {
          round_id: Number(round_id),
          type: "select_box",
          box_id: box?.id,
          box_count: activeBoxCount,
          eventId: 20002,
        },
      ];
      const res = await addOrder(payload).unwrap();

      if (res.success) {
        // setLoadingBoxId(null);
        if (res?.gem === 0) {
          const updatedBoxes = boxData?.map((boxObj, i) => ({
            ...boxObj,
            roundEnd: true,
            win: res?.all?.[i] === 0 ? false : true,
            mine: res?.all?.[i] === 0 ? true : false,
            showBox: boxObj.mine ? false : boxObj.win ? false : true,
            opacityFull: boxObj.win || box.id === boxObj.id ? true : false,
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
                  opacityFull: true,
                }
              : boxObj
          );
          setBoxData(updatedBoxes);
        }
      }
    } else {
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 2000);
    }
  };

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
                    "_bomb _end",
                  box?.opacityFull ? "opacity-100" : "opacity-25"
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
