import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import MoodTracker from './MoodTracker';

class App extends Component {
  render() { 
    return (
      <Container>
        <MoodTracker />
        <Row>

        </Row>
      </Container>
    );
  }
}
 
export default App;