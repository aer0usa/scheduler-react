import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { defaultFlights } from './defaultFlights.js'

// ========================================

function Flight(props) {
    return (
        <div
            onClick={props.onClick}
        >
            {props.flight.aircraft}
        </div>
    );
}

class DayGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flights: defaultFlights.slice(),
            date: Date.now()
        };
    }

    handleClick(flightId) {
        alert(`Clicked ${flightId}`);
    }

    renderFlight(flight) {
        return (
            <Flight
                flight = {flight}
                onClick = {() => this.handleClick(flight.id)}
            />
        );
    }

    render() {
        return (
            <div>
                {this.state.flights.map(flight => (this.renderFlight(flight)))}
            </div>
        );
    }
}

class Scheduler extends React.Component {
    render() {
        return (<DayGrid />);
    }
}

// ========================================

ReactDOM.render(
  <Scheduler />,
  document.getElementById('root')
);
