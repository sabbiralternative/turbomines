import { useRef } from "react";
import useCloseModalClickOutside from "../../hooks/closeModal";
import { cn } from "../../utils/cn";
import { useSound } from "../../context/ApiProvider";
import { playSettingsSound, playStakeSound } from "../../utils/sound";

const Settings = ({
  setShowSettings,
  betAmount,
  setBetAmount,
  handleChangeBetAmount,
  boxGrid,
  mines,
  setMines,
  setBoxGrid,
}) => {
  const { sound } = useSound();
  const minesNumbers = {
    3: [2, 3, 5, 7],
    5: [3, 5, 7, 10],
    7: [5, 7, 10, 12],
    9: [10, 12, 15, 20],
  };
  const ref = useRef();

  const closeModal = () => {
    setShowSettings(false);
  };

  useCloseModalClickOutside(ref, () => {
    closeModal();
  });

  const handleDecreaseMines = (type) => {
    if (sound) {
      playSettingsSound();
    }
    const maxWicket = boxGrid * boxGrid - 1;

    if (type === "minus") {
      if (mines === 1) {
        return;
      } else {
        setMines((prev) => prev - 1);
      }
    } else {
      if (mines === maxWicket) {
        return;
      } else {
        setMines((prev) => prev + 1);
      }
    }
  };
  return (
    <div className="control-modal">
      <div className="control-modal__inner" ref={ref}>
        <div className="control-modal__close" onClick={closeModal}>
          <i className="iconFont iconFont-close" />
        </div>
        <div className="control__title">Grid</div>
        <div className="control-group _mt4">
          <div className="control-group__inner">
            <div className="control-group__row">
              {[3, 5, 7, 9].map((number) => (
                <div
                  key={number}
                  className={cn(
                    `button-secondary`,
                    number === boxGrid && "_active"
                  )}
                  onClick={() => {
                    setBoxGrid(number);
                    if (sound) {
                      playSettingsSound();
                    }
                  }}
                >
                  {number}x{number}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="control-group _mt24">
          <div className="control-group__inner">
            <div className="control-group__row">
              <div
                onClick={() => handleDecreaseMines("minus")}
                className="button-secondary"
              >
                <i className="iconFont iconFont-minus" />
              </div>
              <div className="input">
                <div className="input__title">Mines</div>
                <label
                  htmlFor="946efbcd-de72-41c3-b640-3a90dcc7a273"
                  className="input__label"
                />
                <div className="input__error">
                  <input
                    onChange={(e) => setMines(e.target.value)}
                    id="946efbcd-de72-41c3-b640-3a90dcc7a273"
                    type="text"
                    inputMode="decimal"
                    autoComplete="off"
                    spellCheck="false"
                    value={mines}
                    className="input__input"
                  />
                </div>
              </div>
              <div
                onClick={() => handleDecreaseMines("plus")}
                className="button-secondary"
              >
                <i className="iconFont iconFont-plus" />
              </div>
            </div>
            <div className="control-group__row">
              {minesNumbers[boxGrid].map((mine) => (
                <div
                  onClick={() => {
                    setMines(mine);
                    if (sound) {
                      playSettingsSound();
                    }
                  }}
                  key={mine}
                  className="button-secondary"
                >
                  {mine}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="control-group _mt24">
          <div className="control-group__inner">
            <div className="control-group__row">
              <div className="input">
                <div className="input__title">
                  Bet Amount <i className="iconFont iconFont-info" />
                  <div className="tooltip">
                    <div className="tooltip__inner">
                      <i className="iconFont iconFont-info" />
                      <span>Max Profit $10000</span>
                    </div>
                  </div>
                </div>
                <label
                  htmlFor="5f318bec-3953-430b-92cb-72ed88e698d8"
                  className="input__label"
                />
                <div className="input__error">
                  <input
                    onChange={(e) => setBetAmount(e.target.value)}
                    id="5f318bec-3953-430b-92cb-72ed88e698d8"
                    type="text"
                    inputMode="decimal"
                    autoComplete="off"
                    spellCheck="false"
                    value={betAmount}
                    className="input__input"
                  />
                </div>
              </div>
            </div>
            <div className="control-group__row">
              <div
                onClick={() => {
                  setBetAmount(10);
                  if (sound) {
                    playStakeSound();
                  }
                }}
                className="button-secondary"
              >
                min
              </div>
              <div
                onClick={() => handleChangeBetAmount("minus")}
                className="button-secondary"
              >
                <i className="iconFont iconFont-minus" />
              </div>
              <div
                onClick={() => handleChangeBetAmount("plus")}
                className="button-secondary"
              >
                <i className="iconFont iconFont-plus" />
              </div>
              <div
                onClick={() => {
                  setBetAmount(10000);
                  if (sound) {
                    playStakeSound();
                  }
                }}
                className="button-secondary"
              >
                max
              </div>
            </div>
          </div>
        </div>
        <div className="control-toggle _mt24">
          <div className="control-toggle__title">Turbo</div>
          <div className="toggle" />
        </div>
      </div>
    </div>
  );
};

export default Settings;
