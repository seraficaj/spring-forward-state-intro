import React, { Component } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import MoodPoints from "./MoodPoints";

class MoodTracker extends Component {
    // using class field decoration
    state = {
        points: 9,
    };

    handleIncreaseMood = () => {
        // setstate triggers a re-render
        // takes a cb or obj of new state
        // if you need to refer to prev state, you have to use the cb function
        this.setState((prevState, props) => {
            // whatever is returned -- will be the new state
            // previous state is incremented
            return {
                points: prevState.points + 1, // increment prevState by 1
            };
        });
    };

    handleDecreaseMood = () => {
        this.setState((prevState,props) => {
            return {
                points: prevState.points - 1
            }
        })
    }

    handleResetTen = () => {
        this.setState({
            points: 10,
        });
    };

    render() {
        return (
            <div>
                <h1 className="text-center">Mood Tracker</h1>
                <ButtonGroup>
                    <Button onClick={this.handleIncreaseMood} variant="primary">
                        Lift
                    </Button>
                    <Button onClick={this.handleResetTen} variant="secondary">
                        Reset Mood
                    </Button>
                    <Button onClick={this.handleDecreaseMood} variant="danger">
                        Decrease
                    </Button>
                </ButtonGroup>
                <MoodPoints points={this.state.points} />
            </div>
        );
    }
}

export default MoodTracker;
