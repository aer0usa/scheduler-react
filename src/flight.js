import React from 'react';

function Flight(props) {
    const calculatedStyle = {
        top: props.top + 'px',
        height: props.height + 'px'
    }
    return (
        <div
            className='flight'
            onClick={props.onClick}
            style={calculatedStyle}
        >
            {new Date(props.flight.start).toLocaleTimeString('en-US', {"timeStyle":"short"})}<br />
            {props.instructor}<br />
            {props.student}
        </div>
    );
}

export { Flight }
