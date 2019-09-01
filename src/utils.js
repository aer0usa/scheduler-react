function dayBegin(date) {
    return new Date(date).setHours(0);
}

function firstDay(flights) {
    let theDay = Number.MAX_SAFE_INTEGER;
    return flights.reduce((theDay, flight) => theDay < flight.start ? theDay : flight.start, theDay);
}

function aircraftForDay(flights) {
    let aircraft = [];
    flights.forEach(flight => {
        if (aircraft.indexOf(flight.aircraft) < 0) {
            aircraft.push(flight.aircraft);
        }
    });
    return aircraft;
}

function flightsForDay(flights, today) {
    return flights.filter( flight =>  dayBegin(flight.start) === today );
}

function flightsForAircraft(flights, aircraft) {
    return flights.filter( flight =>  flight.aircraft === aircraft );
}

export {
    dayBegin,
    firstDay,
    aircraftForDay,
    flightsForDay,
    flightsForAircraft
}
