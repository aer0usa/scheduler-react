import React from 'react';
import { defaultFlights, defaultAircraft, defaultInstructors, defaultStudents } from './defaultFlights.js'
import { dayBegin, firstDay, flightsForDay, aircraftForFlights, flightsForAircraft } from './utils.js'
import Flight from './flight.js'

class DayGrid extends React.Component {
    columnCount;
    dayStart = 32400000; // 9 hr * 3600000 ms/hr
    verticalScale = 48000; // 3600000 ms/hr divided by 100 px/hr
    constructor(props) {
        super(props);
        const today = dayBegin(firstDay(defaultFlights));
        const todaysFlights = flightsForDay(defaultFlights, today);
        const todaysAircraft = aircraftForFlights(todaysFlights, defaultAircraft);
        const todayString = new Date(today).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
        this.columnCount = todaysAircraft.length;
        this.state = {
            flights: todaysFlights,
            aircraft: todaysAircraft,
            instructors: defaultInstructors.slice(),
            students: defaultStudents.slice(),
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

    getAircraft= aircraftId => this.state.aircraft[aircraftId];

    getInstructorName = (instructorId) => this.state.instructors.filter((filterInstructor) => filterInstructor.id === instructorId)[0].name;

    getStudentName = (studentId) => {
        const aStud = this.state.students.filter((filterStudent) => filterStudent.id === studentId);
        return aStud[0].firstName + ' ' + aStud[0].lastName.slice(0, 1);
    };

    renderFlight(flight) {
        console.log("flight", {flight, defaultAircraft});
        return (
            <Flight
                aircraftColor = {this.getAircraft(flight.aircraft).color}
                aircraftName = {this.getAircraft(flight.aircraft).name}
                flight = {flight}
                height = {(flight.end - flight.start) / this.verticalScale}
                instructor = {this.getInstructorName(flight.instructor)}
                key = {flight.id}
                onClick = {() => this.handleClick(flight.id)}
                startTime = {new Date(flight.start).toLocaleTimeString('en-US', {"timeStyle":"short"})}
                student = {this.getStudentName(flight.student)}
                top = {(flight.start - this.state.date - this.dayStart) / this.verticalScale}
            />
        );
    }

    renderFlightColumn(flights, aircraftName, calculatedStyle) {
        return (
            <div key={aircraftName} className='flightColumn' style={calculatedStyle}>
                <div className='columnTitle'>{aircraftName}</div>
                {flights.map(flight => (this.renderFlight(flight)))}
            </div>
        );
    }

    renderHoursColumn(start, end, vScale, right) {
        const classNm = 'hours' + (right ? ' right' : '');
        const calculatedStyle = {height: 3600000 / vScale};
        let hours = [];
        for (let i = start; i <= end; i++) {
            hours.push(<div key={i} style={calculatedStyle}>{i}:00</div>);
        }
        return (
            <div className={classNm}>
                {hours.map(anHour => anHour)}
            </div>
        );
    }

    render() {
        const firstHour = 9;
        const lastHour = 18;
        const calculatedStyle = {height: (1 + lastHour - firstHour) * 3600000 / this.verticalScale};
        return (
            <div className='dayGrid' style={calculatedStyle}>
                <div className='dateDisplay'>{this.state.dateString}</div>
                {this.renderHoursColumn(firstHour, lastHour, this.verticalScale, false)}
                {Object.values(this.state.aircraft).map(anAircraft => (this.renderFlightColumn(flightsForAircraft(this.state.flights, anAircraft.id), anAircraft.name, calculatedStyle)))}
                {this.renderHoursColumn(firstHour, lastHour, this.verticalScale, true)}
            </div>
        );
    }
}

export {DayGrid}
