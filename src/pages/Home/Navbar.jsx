import { useSelector } from "react-redux";
import { useSound } from "../../context/ApiProvider";
import { Settings } from "../../api";

const Navbar = ({ isDesktop }) => {
  const { sound, setSound } = useSound();
  const { token, balance } = useSelector((state) => state.auth);

  const handleSoundToggle = () => {
    if (sound) {
      sessionStorage.setItem("sound", false);
      setSound(false);
    } else {
      sessionStorage.removeItem("sound");
      setSound(true);
    }
  };

  const handleOpenLobby = () => {
    const url = `${Settings.lobby}/${token}`;
    window.location.href = url;
  };
  return (
    <div
      style={{
        width: isDesktop ? "420px" : "100%",
        margin: "0 auto",
      }}
    >
      {/* <div
        id="ModuleLayoutDiv"
        style={{
          position: "fixed",
          zIndex: 1000,
          left: "0px",
          top: "0px",
          width: isDesktop ? "420px" : "100%",
          height: "40px",
          background:
            "linear-gradient(rgba(34, 34, 34, 0.5) 0%, rgba(34, 34, 34, 0) 100%)",
        }}
      /> */}
      {/* <div className="demo--Ig8fs">
        <div className="demoIcon--ozzEI" />
        <div>Demo Mode</div>
      </div> */}
      <div
        data-track="balance"
        className="balance--Kjiqa"
        style={{ position: "absolute", zIndex: 1000, left: "8px", top: "8px" }}
      >
        <div className="balanceTitle--JnSFJ">Balance:</div>

        <i className="fm-iconFont fm-iconFont-ios-creditcard" />
        <span className="balanceSum--_ab3Z">{balance}</span>
      </div>

      {/* <div
        className="name--TP6Ls"
        style={{ position: "fixed", zIndex: 1000, left: "8px", bottom: "0px" }}
      >
        Turbo Games • Turbo Mines
      </div> */}
      {/* <div
        style={{ position: "fixed", zIndex: 1000, right: "8px", bottom: "0px" }}
      >
        <div className="time--tHxDp">05 Jul, 2025 | 12:33:42</div>
      </div> */}
      {/* <div
        id
        style={{
          position: "fixed",
          zIndex: 1000,
          right: "0px",
          top: "68px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          pointerEvents: "none",
        }}
      /> */}
      <div
        id
        style={{
          width: isDesktop ? "420px" : "100%",
          margin: "0 auto",
          position: "fixed",
          zIndex: 1000,
          right: isDesktop ? "40px" : "8px",
          top: "8px",
          left: "0px",
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
        }}
      >
        <div
          onClick={handleOpenLobby}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
            padding: "3px 6px",
            fontSize: "12px",
            fontWeight: 600,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "gray",
            borderRadius: "9999px",
            cursor: "pointer",
            width: "fit-content",
            color: "white",
            zIndex: 99999999,
            marginLeft: "10px",
          }}
        >
          <svg
            style={{ width: "1rem", height: "1rem" }}
            width={25}
            height={24}
            viewBox="0 0 139 127"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.6002 85.1415L7.5002 97.3415C6.7002 96.4415 6.0002 95.4415 5.4002 94.3415C3.0002 90.5415 1.5002 86.4415 0.700195 82.1415C1.1002 79.6415 1.7002 77.1415 2.5002 74.6415L18.9002 69.2415C19.0002 74.0415 20.3002 78.4415 22.8002 82.4415C23.3002 83.4415 23.9002 84.2415 24.6002 85.1415Z"
              fill="#929292"
            />
            <path
              d="M25.4002 46.3414L20.7002 45.3414C25.5002 40.2414 31.0002 35.4414 37.2002 31.0414C37.7002 30.6414 38.3002 30.3414 38.8002 29.9414L39.2002 30.3414H39.1002C33.5002 35.3414 28.9002 40.7414 25.4002 46.3414Z"
              fill="#929292"
            />
            <path
              d="M74.1001 123.041C73.4001 123.241 72.7001 123.441 72.0001 123.541C61.7001 126.041 51.6001 126.941 42.4001 126.141L36.1001 112.241C36.8001 112.341 37.5001 112.441 38.3001 112.541C47.7001 113.541 58.1001 112.441 68.7001 109.241V108.941L74.1001 123.041Z"
              fill="#929292"
            />
            <path
              d="M68.8002 109.141C58.2002 112.341 47.8002 113.441 38.4002 112.441C37.7002 112.341 36.9002 112.341 36.2002 112.141L46.2002 95.3415C52.7002 96.0415 59.9002 95.3415 67.2002 93.2415L67.9002 106.241L68.8002 108.641V109.141Z"
              fill="#929292"
            />
            <path
              d="M64.9999 18.0415L64.8999 16.4415C67.8999 15.2415 70.9999 14.3415 73.9999 13.4415C79.1999 11.9415 84.3999 10.8415 89.3999 10.2415L86.5999 15.3415C79.8999 14.7415 72.4999 15.6415 64.9999 18.0415Z"
              fill="#929292"
            />
            <path
              d="M87.4001 77.7414C86.1001 78.6414 84.8001 79.5414 83.5001 80.4414C77.7001 84.1414 71.6001 86.7414 65.6001 88.2414C57.5001 90.3414 49.7001 90.5414 43.1001 88.7414C40.0001 87.9414 37.2001 86.6414 34.7001 85.0414C32.1001 83.3414 30.0001 81.1414 28.3001 78.5414C26.7001 76.0414 25.7001 73.2414 25.3001 70.2414C24.5001 65.0414 25.4001 59.3414 27.7001 53.7414C31.0001 45.8414 37.2001 37.8414 45.7001 31.4414C47.3001 30.2414 48.9001 29.1414 50.6001 28.0414C55.7001 24.8414 61.0001 22.4414 66.2001 20.8414C71.4001 19.2414 76.5001 18.4414 81.3001 18.4414C85.1001 18.4414 88.7001 18.9414 92.0001 19.9414C93.6001 20.4414 95.2001 21.0414 96.6001 21.7414C100.4 23.6414 103.6 26.3414 105.8 29.9414C108 33.3414 109 37.3414 109.1 41.4414C109.2 46.1414 108 51.2414 105.7 56.2414C102.2 63.9414 95.9001 71.6414 87.4001 77.7414Z"
              fill="currentColor"
            />
            <path
              d="M129.2 81.8414C123.9 93.0414 117.2 99.8414 110.9 104.041C110.7 104.241 110.4 104.341 110.2 104.541L106.3 88.9414L105.1 84.3414L96.7998 77.2414C101.7 72.9414 105.8 68.2414 109 63.3414L126.2 66.3414V66.4414C127.2 71.5414 128.2 76.7414 129.2 81.8414Z"
              fill="#929292"
            />
            <path
              d="M138.5 42.9414L134 34.3414L114.7 41.2414C114.6 36.3414 113.4 31.7414 110.8 27.7414C110.3 26.9414 109.7 26.0414 109 25.3414L125.8 14.0414C136 24.2414 138.5 42.9414 138.5 42.9414Z"
              fill="#929292"
            />
            <path
              d="M133.9 34.4414L114.7 41.2414C114.6 36.3414 113.4 31.7414 110.8 27.7414C110.3 26.9414 109.7 26.0414 109 25.3414L125.8 14.0414C126.8 15.2414 127.7 16.4414 128.5 17.7414C131.8 22.6414 133.5 28.3414 133.9 34.4414Z"
              fill="currentColor"
            />
            <path
              d="M39.3 30.4414C33.5 35.3414 28.9002 40.7414 25.4002 46.3414L20.7002 45.3414L10 43.0414C14.9 35.3414 21.5 27.9414 29.4 21.3414L38.8 30.0414L39.3 30.4414Z"
              fill="currentColor"
            />
            <path
              d="M68.8002 109.141C58.2002 112.341 47.8002 113.441 38.4002 112.441C37.7002 112.341 36.9002 112.341 36.2002 112.141L46.2002 95.3415C52.7002 96.0415 59.9002 95.3415 67.2002 93.2415C67.5002 93.1415 67.7002 93.1414 67.9002 93.0414L68.7002 108.641L68.8002 109.141Z"
              fill="currentColor"
            />
            <path
              d="M24.6002 85.1415L7.5002 97.3415C6.7002 96.4415 6.0002 95.4415 5.4002 94.3415C3.0002 90.5415 1.5002 86.4415 0.700195 82.1415C0.300195 79.9415 0.1 77.7415 0 75.5415L2.5 74.7415L18.9002 69.2415C19.0002 74.0415 20.3002 78.4415 22.8002 82.4415C23.3002 83.4415 23.9002 84.2415 24.6002 85.1415Z"
              fill="url(#paint0_linear_693_22)"
            />
            <path
              d="M95.1001 0.141422L89.5001 10.2414L86.7001 15.3414C80.0001 14.8414 72.6001 15.7414 65.1001 18.1414L65.0001 16.5414L64.6001 4.14142C73.3001 1.44142 81.8001 0.0414213 89.8001 0.0414213C91.5001 -0.0585787 93.3001 0.0414217 95.1001 0.141422Z"
              fill="currentColor"
            />
            <path
              d="M126.2 66.3414C126.2 66.4414 126.2 66.4414 126.2 66.3414C121.2 74.4414 114.5 82.1414 106.2 88.9414C106.2 88.9414 106.1 88.9414 106.1 89.0414L94.6001 79.1414C95.3001 78.5414 96.1001 77.9414 96.8001 77.3414C101.7 73.0414 105.8 68.3414 109 63.4414L126.2 66.3414Z"
              fill="currentColor"
            />
            <defs>
              <linearGradient
                id="paint0_linear_693_22"
                x1="-373.769"
                y1="63.3372"
                x2="314.773"
                y2="63.3372"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" />
                <stop offset="0.5594" stopColor="currentColor" />
                <stop offset={1} stopColor="currentColor" />
              </linearGradient>
            </defs>
          </svg>
          <span>Lobby</span>
        </div>
        <div data-track="settings" className="icon--k9yLr">
          <i className="fm-iconFont fm-iconFont-ios-nav" />
        </div>
        <div
          onClick={handleSoundToggle}
          className="icon--k9yLr"
          style={{ marginRight: "8px" }}
        >
          <i
            className={`fm-iconFont fm-iconFont-ios-music-${
              sound ? "on" : "off"
            }`}
          />
        </div>
        {/* <div
          data-track="universe"
          className="icon--k9yLr"
          style={{ marginRight: "8px" }}
        >
          <span className="iconActiveIndicator--CMTO4" />
          <div className="iconTurboUniverse--Of1Ih" />
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
