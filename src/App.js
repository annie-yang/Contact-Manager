import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// components
import Header from './components/Header';

// importing from react bootstrap
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              My Contact Manager App
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
