import { useNavigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { useEffect } from "react";
import { Settings } from "./api";
import { useDispatch } from "react-redux";
import disableDevtool from "disable-devtool";
import { logout } from "./redux/features/auth/authSlice";

function App() {
  const disabledDevtool = Settings.disabledDevtool;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (disabledDevtool) {
      disableDevtool({
        ondevtoolopen: (type) => {
          const info = "devtool opened!; type =" + type;
          if (info) {
            dispatch(logout());
            window.location.href = "https://www.google.com/";
          }
        },
      });
    }
  }, [navigate, disabledDevtool, dispatch]);

  useEffect(() => {
    const setHtmlFontSize = () => {
      const width = window.innerWidth;

      // Example logic: scale font size based on width
      // You can customize these thresholds
      let fontSize;
      if (width <= 320) {
        fontSize = 13;
      } else if (width <= 375) {
        fontSize = 15;
      } else if (width <= 390) {
        fontSize = 16;
      } else if (width <= 414) {
        fontSize = 17;
      } else if (width <= 600) {
        fontSize = 18;
      } else if (width <= 1000) {
        fontSize = 18;
      } else {
        fontSize = 16;
      }

      document.documentElement.style.fontSize = `${fontSize}px`;
    };

    // Initial call
    setHtmlFontSize();

    // Add resize listener
    window.addEventListener("resize", setHtmlFontSize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", setHtmlFontSize);
    };
  }, []);
  return <MainLayout />;
}

export default App;
