import React from "react";
import "../styles/App.css";
import styles from "../styles/appStyles.module.css";
const App = () => {
  const heading = {};
  color: "green";
  fontSize: "50px";

  return (
    <div id="main">
      <h1 style={{color: "green" , fontSize: "50px"}}>Success</h1>
      <h1 id="error" style={{ color: "red", fontSize: "50px" }}>
        Error
      </h1>
    </div>
  );
};

export default App;
