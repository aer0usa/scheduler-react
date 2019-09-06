function dayBegin(date) {
    return new Date(date).setHours(0);
}

function firstDay(flights) {
    let theDay = Number.MAX_SAFE_INTEGER;
    return flights.reduce((theDay, flight) => theDay < flight.start ? theDay : flight.start, theDay);
}

function aircraftForFlights(flights, colAircraft) {
    let aircraft = {};
    flights.forEach(flight => {
        const flightAircraft = colAircraft.filter((filterAircraft) => filterAircraft.id === flight.aircraft)[0];
        if (!aircraft[flightAircraft.id]) {
            aircraft[flightAircraft.id] = flightAircraft;
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
    aircraftForFlights,
    flightsForDay,
    flightsForAircraft
}
