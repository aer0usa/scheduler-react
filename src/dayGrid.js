import React from 'react';
import './index.css';
import { defaultFlights } from './defaultFlights.js'
import { dayBegin, firstDay, flightsForDay, aircraftForDay } from './utils.js'
import { Flight } from './flight.js'

class DayGrid extends React.Component {
    columnCount;
    dayStart = 32400000; // 9 hr * 3600000 ms/hr
    verticalScale = 36000; // 3600000 ms/hr divided by 100 px/hr
    constructor(props) {
        super(props);
        const today = dayBegin(firstDay(defaultFlights));
        const todaysFlights = flightsForDay(defaultFlights, today);
        const todaysAircraft = aircraftForDay(todaysFlights);
        const todayString = new Date(today).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
        console.log(`DayGrid has ${todaysAircraft.length} aircraft.`);
        this.columnCount = todaysAircraft.length;
        this.state = {
            flights: todaysFlights,
            aircraft: todaysAircraft,
            date: today,
            dateString: todayString
        };
    }

    handleClick(flightId) {
        const thisFlight = this.state.flights.filter(flight => flight.id === flightId)[0];
        const flightStart = new Date(thisFlight.start);
        /* TODO Trigger the flight editor. */
        alert(`Clicked ${thisFlight.aircraft}\n${flightStart}\nInstructor: ${thisFlight.instructor}\nStudent: ${thisFlight.student}`);
    }

    renderFlight(flight) {
        console.log(`renderFlight ${(flight.start - this.state.date - this.dayStart) / this.verticalScale}`);
        return (
            <Flight
                key = {flight.id}
                flight = {flight}
                onClick = {() => this.handleClick(flight.id)}
                left = {100 * this.state.aircraft.indexOf(flight.aircraft) / this.state.aircraft.length}
                top = {(flight.start - this.state.date - this.dayStart) / this.verticalScale}
                width = {90 / this.state.aircraft.length}
                height = {(flight.end - flight.start) / this.verticalScale}
            />
        );
    }

    render() {
        return (
            <div className='dayGrid' >
                <div className='dateDisplay'>{this.state.dateString}</div>
                <div className='flightsContainer'>
                    {this.state.flights.map(flight => (this.renderFlight(flight)))}
                </div>
            </div>
        );
    }
}

export {DayGrid}
