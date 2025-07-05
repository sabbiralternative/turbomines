const Navbar = () => {
  return (
    <>
      <div className="demo--Ig8fs">
        <div className="demoIcon--ozzEI" />
        <div>Demo Mode</div>
      </div>
      <div
        data-track="balance"
        className="balance--Kjiqa"
        style={{ position: "fixed", zIndex: 1000, left: "8px", top: "8px" }}
      >
        <div className="balanceTitle--JnSFJ">Balance:</div>
        <i className="fm-iconFont fm-iconFont-ios-creditcard" />$
        <span className="balanceSum--_ab3Z">1000</span>
      </div>
      <div
        className="name--TP6Ls"
        style={{ position: "fixed", zIndex: 1000, left: "8px", bottom: "0px" }}
      >
        Turbo Games • Turbo Mines
      </div>
      <div
        style={{ position: "fixed", zIndex: 1000, right: "8px", bottom: "0px" }}
      >
        <div className="time--tHxDp">05 Jul, 2025 | 12:33:42</div>
      </div>
      <div
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
      />
      <div
        id
        style={{
          position: "fixed",
          zIndex: 1000,
          right: "8px",
          top: "8px",
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
        }}
      >
        <div data-track="settings" className="icon--k9yLr">
          <i className="fm-iconFont fm-iconFont-ios-nav" />
        </div>
        <div className="icon--k9yLr" style={{ marginRight: "8px" }}>
          <i className="fm-iconFont fm-iconFont-ios-music-on" />
        </div>
        <div
          data-track="universe"
          className="icon--k9yLr"
          style={{ marginRight: "8px" }}
        >
          <span className="iconActiveIndicator--CMTO4" />
          <div className="iconTurboUniverse--Of1Ih" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
