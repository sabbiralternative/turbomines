import { useState } from "react";
import Settings from "./Settings";

const BetSlip = ({
  betAmount,
  setBetAmount,
  handleChangeBetAmount,
  boxGrid,
  mines,
  setBoxGrid,
  setMines,
  isStartGame,
  handleStartGame,
  isAtLeastOneBoxWin,
  handleCashOut,
}) => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      {showSettings && (
        <Settings
          boxGrid={boxGrid}
          mines={mines}
          setBoxGrid={setBoxGrid}
          setMines={setMines}
          betAmount={betAmount}
          handleChangeBetAmount={handleChangeBetAmount}
          setBetAmount={setBetAmount}
          setShowSettings={setShowSettings}
        />
      )}
      <div className="template__control">
        <div className="control">
          <div className="control__group">
            <div className="button-primary _w48 _br-tr0 _br-br0">
              <div
                onClick={() => setBetAmount(100)}
                className="button-primary__inner"
              >
                <div className="button-primary__content">min</div>
              </div>
            </div>
            <div
              onClick={() => handleChangeBetAmount("minus")}
              className="button-primary _w48 _br-tl0 _br-bl0"
            >
              <div className="button-primary__inner">
                <div className="button-primary__content">
                  <i className="iconFont iconFont-minus" />
                </div>
              </div>
            </div>
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
                htmlFor="8690695f-4837-4edb-a4c6-7f862150b296"
                className="input__label"
              />
              <div className="input__error">
                <input
                  id="8690695f-4837-4edb-a4c6-7f862150b296"
                  type="text"
                  inputMode="decimal"
                  autoComplete="off"
                  spellCheck="false"
                  value={betAmount}
                  className="input__input"
                />
              </div>
            </div>
            <div
              onClick={() => handleChangeBetAmount("plus")}
              className="button-primary _w48 _br-tr0 _br-br0"
            >
              <div className="button-primary__inner">
                <div className="button-primary__content">
                  <i className="iconFont iconFont-plus" />
                </div>
              </div>
            </div>
            <div
              onClick={() => setBetAmount(10000)}
              className="button-primary _w48 _br-tl0 _br-bl0"
            >
              <div className="button-primary__inner">
                <div className="button-primary__content">max</div>
              </div>
            </div>
          </div>
          <div className="control__box">
            <div className="control__history">
              <div className="history">
                <div
                  className="history__inner _await _22"
                  style={{ transform: "translateY(0%)" }}
                >
                  <div className="history__item">
                    <div className="history__content">
                      <div className="history__value">x1.08</div>
                      <div className="history__value">$1.08</div>
                    </div>
                  </div>
                  <div className="history__item">
                    <div className="history__content">
                      <div className="history__value">x1.23</div>
                      <div className="history__value">$1.23</div>
                    </div>
                  </div>
                  <div className="history__item">
                    <div className="history__content">
                      <div className="history__value">x1.42</div>
                      <div className="history__value">$1.42</div>
                    </div>
                  </div>
                  <div className="history__item">
                    <div className="history__content">
                      <div className="history__value">x1.64</div>
                      <div className="history__value">$1.64</div>
                    </div>
                  </div>
                  <div className="history__item">
                    <div className="history__content">
                      <div className="history__value">x1.92</div>
                      <div className="history__value">$1.92</div>
                    </div>
                  </div>
                  <div className="history__item">
                    <div className="history__content">
                      <div className="history__value">x2.25</div>
                      <div className="history__value">$2.25</div>
                    </div>
                  </div>
                  <div className="history__item">
                    <div className="history__content">
                      <div className="history__value">x2.68</div>
                      <div className="history__value">$2.68</div>
                    </div>
                  </div>
                  <div className="history__item">
                    <div className="history__content">
                      <div className="history__value">x3.21</div>
                      <div className="history__value">$3.21</div>
                    </div>
                  </div>
                  <div className="history__item">
                    <div className="history__content">
                      <div className="history__value">x3.9</div>
                      <div className="history__value">$3.9</div>
                    </div>
                  </div>
                  <div className="history__item">
                    <div className="history__content">
                      <div className="history__value">x4.8</div>
                      <div className="history__value">$4.8</div>
                    </div>
                  </div>
                  <div className="history__item">
                    <div className="history__content">
                      <div className="history__value">x6</div>
                      <div className="history__value">$6</div>
                    </div>
                  </div>
                  <div className="history__item">
                    <div className="history__content">
                      <div className="history__value">x7.64</div>
                      <div className="history__value">$7.64</div>
                    </div>
                  </div>
                  <div className="history__item">
                    <div className="history__content">
                      <div className="history__value">x9.93</div>
                      <div className="history__value">$9.93</div>
                    </div>
                  </div>
                  <div className="history__item">
                    <div className="history__content">
                      <div className="history__value">x13.24</div>
                      <div className="history__value">$13.24</div>
                    </div>
                  </div>
                  <div className="history__item">
                    <div className="history__content">
                      <div className="history__value">x18.21</div>
                      <div className="history__value">$18.21</div>
                    </div>
                  </div>
                  <div className="history__item">
                    <div className="history__content">
                      <div className="history__value">x26.01</div>
                      <div className="history__value">$26.01</div>
                    </div>
                  </div>
                  <div className="history__item">
                    <div className="history__content">
                      <div className="history__value">x39.02</div>
                      <div className="history__value">$39.02</div>
                    </div>
                  </div>
                  <div className="history__item">
                    <div className="history__content">
                      <div className="history__value">x62.43</div>
                      <div className="history__value">$62.43</div>
                    </div>
                  </div>
                  <div className="history__item">
                    <div className="history__content">
                      <div className="history__value">x109.25</div>
                      <div className="history__value">$109.25</div>
                    </div>
                  </div>
                  <div className="history__item">
                    <div className="history__content">
                      <div className="history__value">x218.5</div>
                      <div className="history__value">$218.5</div>
                    </div>
                  </div>
                  <div className="history__item">
                    <div className="history__content">
                      <div className="history__value">x546.25</div>
                      <div className="history__value">$546.25</div>
                    </div>
                  </div>
                  <div className="history__item">
                    <div className="history__content">
                      <div className="history__value">x2.18k</div>
                      <div className="history__value">$2.18k</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {isAtLeastOneBoxWin && isStartGame ? (
              <div onClick={handleCashOut} className="control__button">
                <div className="cashout">
                  <div className="cashout__layout1"></div>
                  <div className="cashout__layout2"></div>
                  <div className="cashout__layout3"></div>
                  <div className="cashout__layout4">
                    <div className="cashout__sum">{betAmount}</div>
                  </div>
                  <div className="cashout__layout5"></div>
                  <div className="cashout__text">Cash Out</div>
                </div>
              </div>
            ) : isStartGame ? (
              <div onClick={handleStartGame} className="control__button">
                <div className="cancel">
                  <div className="cancel__layout1"></div>
                  <div className="cancel__layout2"></div>
                  <div className="cancel__layout3"></div>
                  <div className="cancel__layout4"></div>
                  <div className="cancel__text">Cancel</div>
                </div>
              </div>
            ) : (
              <div onClick={handleStartGame} className="control__button">
                <div className="place">
                  <div className="place__layout1" />
                  <div className="place__layout2" />
                  <div className="place__layout3" />
                  <div className="place__layout4" />
                  <div className="place__text">Start Game</div>
                </div>
              </div>
            )}

            <div
              onClick={() => setShowSettings(true)}
              className="control-portrait"
            >
              <div className="control-portrait__info">
                <i className="iconFont iconFont-cells" />
                {boxGrid}x{boxGrid}
              </div>
              <div className="button-primary _icon56">
                <div className="button-primary__inner">
                  <div className="button-primary__content">
                    <i className="iconFont iconFont-menu" />
                  </div>
                </div>
              </div>
              <div className="control-portrait__info">
                <i className="iconFont iconFont-mines" />
                {mines}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BetSlip;
