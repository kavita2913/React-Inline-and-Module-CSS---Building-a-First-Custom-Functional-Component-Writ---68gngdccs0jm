import React from 'react'
import '../styles/App.css';
import styles from '../styles/appStyles.module.css';
const App = () => {
const heading ={
      fontSize = "50px";

}
  return (
    <div id="main">
      <h1 style={{color: "red"}}>Success</h1>
      <h1  id='error'  style={{color: "green"}} >Error</h1>
    </div>
  )
}


export default App;
