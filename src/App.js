import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Homescreen from "./screens/Homescreen"
import { Container } from 'react-bootstrap'
import {BrowserRouter as Router} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header />
      <main className = 'py-3'>
        <Container>
          <Route path ='/' component = {HomeScreen} exact />
        </ Container>
      </main>
      <Footer />
    </Router>

  );
}

export default App;
