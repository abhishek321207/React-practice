import React from "react";
import Button from "./Button.jsx";
import Student from './Student/Student.jsx';
import Card from "./Card.jsx";
import Food from "./Food.jsx";
import Footer from "./Footer.jsx";
function App() {
  return (
    <React.Fragment>
      <Card />
      <Food/>
      <Button />
      <Student name="Abhishek" age={23} isStudent={true} />
      <Student name="Abhigyan" age={42} isStudent={false}/>
      <Student name="Debo" age={50} isStudent={false}/>
      <Student name="Yash" age={27} isStudent={true}/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
