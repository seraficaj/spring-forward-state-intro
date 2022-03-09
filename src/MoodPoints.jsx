import React, { Component } from 'react';

class MoodPoints extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <p>On a scale of 1 to 10</p>
                <p>You feel this happy: {this.props.points}</p>
            </div>
        );
    }
}
 
export default MoodPoints;