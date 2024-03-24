// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
import Alert from "./Components/Alert";
// import About from "./Components/About";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  let bgClr;
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const toggleMode = () => {
    if (myStyle.color === "black" && myStyle.backgroundColor === "white") {
      document.body.style = { color: "white" };
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      document.body.style.backgroundColor = "gray";

      document.getElementById("root").style.backgroundColor = "gray";
      // let bgClr = "dark";
      document.title = "TextUtils";
    } else {
      document.body.style = { color: "black" };
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      document.body.style.backgroundColor = "white";
      document.getElementById("root").style.backgroundColor = "white";
      // let bgClr = "white";
      document.title = "TextUtils";
    }
  };
  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    if (selectedTheme === "green") {
      setMyStyle({
        color: "white",
        backgroundColor: "darkgreen",
        bgClr: "dark-green",
      });
      showAlert("Green Theme Selected", "success");
    } else if (selectedTheme === "blue") {
      // Handle blue theme selection
    } else if (selectedTheme === "red") {
      // Handle red theme selection
    }
  };

  const [alerts, setMessage] = useState(null);
  const showAlert = (message, type) => {
    setMessage({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setMessage(null);
    }, 1500);
  };

  return (
    // <Router>
      <>
        <Navbar
          title="TextUtils.io"
          aboutText="About"
          home="Home"
          toggleMode={toggleMode}
          bgClr={bgClr}
          showAlert={showAlert}
          handleThemeChange={handleThemeChange}
        />
        <Alert alerts={alerts} />

        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route */}
              {/* exact path="/" */}
              {/* element={ */}
                <Textarea
                  showAlert={showAlert}
                  heading="Enter text below to analyze"
                  myStyle={myStyle}
                  toggleMode={toggleMode}
                />
              {/* } */}
            {/* /> */}
          {/* </Routes> */}
        </div>

        {/* <Routes> */}
          {/* <Route
            exact path="/About"
            element={<About toggleMode={toggleMode} myStyle={myStyle} />} */}
          {/* /> */}
        {/* </Routes> */}
      </>
  );
    
  
}

export default App;
