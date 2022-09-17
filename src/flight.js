import React from 'react';

function Flight({
    aircraftColor,
    aircraftName,
    flight,
    height,
    instructor,
    onClick,
    startTime,
    student,
    top
}) {
    const calculatedStyle = {
        top: top + 'px',
        height: height + 'px'
    }
    const headerStyle = {
        backgroundColor: aircraftColor
    }
    return (
        <div
            className='flight'
            onClick={onClick}
            style={calculatedStyle}
        >
            <div
                className='flightTitle'
                style={headerStyle}
            >
                {aircraftName}
            </div>
            <div
                className='flightInfo'
            >
                {startTime}<br />
                {instructor}<br />
                {student}<br />
            </div>
        </div>
    );
}

export default Flight;
