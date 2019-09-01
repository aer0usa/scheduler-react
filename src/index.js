import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ========================================

function Flight(props) {
    return (
        <div
            onClick={props.onClick}
        >
        </div>
    );
}

class DayGrid extends React.component {
    constructor(props) {
        super(props);
        this.state = {
            flights: Array(9).fill(null),
            date: Date.now()
        };
    }

    handleClick(flight) {}

    renderFlight(flight) {
        return (
            <Flight
                flight = {flight}
                onClick = {() => this.handleClick(flight)}
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

class Scheduler extends React.component {
    render() {
        return (<DayGrid />);
    }
}

// ========================================

ReactDOM.render(
  <Scheduler />,
  document.getElementById('root')
);
