import React, { useState } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import TestAPI from './components/TestAPI';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AuthService from './services/auth.service';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
// import  View  from "react-native";
// import Navigation from './components/Navigation';

function App() {
  const [projects] = useState([
    {
    background : "Sky2.jpg"
    }
  ])
  console.log("image is :", projects[0].background)
  return (
    <div className="container">
    <Router>


      {/* <View> */}

      {/* </View> */}


    

      {/* <div className = "flex-row"> */}
      {/* <div className= "image" > */}
          
          <TestAPI></TestAPI>
      <Container  key="Container"  >
      <Row  key= "Row"  >
      <Col md={12}  >
  
      <Card   >
      {/* <img src= {process.env.PUBLIC_URL+"/"+projects[0].background} alt="Card image" className = "image"/> */}

      </Card>
      </Col>
      </Row>
      </Container>


      <Switch>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />

      </Switch>

 
      <h2 className= "h2-overlay ">Test
      </h2>
      {/* <div className = "test2-overlay">Test 2</div> */}
      <nav className= " bottom-left test2-overlay">
        <Link to={"/signin"} className= " test2-overlay">
        Sign In
        </Link>        
      </nav>
      <nav className = "sign-up"  >
        <Link to={"/signup"}className= "sign-up">
        Sign Up
        </Link>          
      </nav>

      {/* </div> */}
      {/* </div> */}
      </Router>
      </div>

  );
}

export default App;
