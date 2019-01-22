import React, { Component } from 'react';
import styled from 'styled-components';

import CalendarComp from './components/CalendarComp';
import Header from './components/Header';
import MostCommonDist from './components/MostCommonDist';

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  state = {
    commonDistances: [5, 8, 10, 16],
    distance: null,
    date: null
  };

  captureDistance = dist => {
    console.log(dist);
    this.setState({
      distance: dist
    });
  };

  captureDate = date => {
    console.log(date);
    this.setState({
      date
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Row>
          <CalendarComp captureDate={this.captureDate} />
          <MostCommonDist
            commonDistances={this.state.commonDistances}
            captureDistance={this.captureDistance}
          />
        </Row>
      </div>
    );
  }
}

export default App;
