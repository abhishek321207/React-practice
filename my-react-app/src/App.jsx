import React from "react";
import Button from "./Button/Button.jsx";
import Card from "./Card.jsx";
import Food from "./Food.jsx";
import Footer from "./Footer.jsx";
function App() {
  return (
    <React.Fragment>
      <Card />
      <Food/>
      <Button />
      <Footer/>
    </React.Fragment>
  );
}

export default App;
