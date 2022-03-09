import React, { Component } from 'react';
import MoodPoints from './MoodPoints';

class MoodTracker extends Component {
    // using a contructor to manage class
    constructor() {
        // invoke super
        super()
        // define state obj
        this.state = { points: 9}
        // run any init you need
    }
    state = {  } 
    render() { 
        return (
            <div>
                <h1 className='text-center'>Mood Tracker</h1>
                <MoodPoints points = {this.state.points} />
            </div>
        );
    }
}
 
export default MoodTracker;