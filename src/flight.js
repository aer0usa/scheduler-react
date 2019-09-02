import React from 'react';

function Flight(props) {
    const calculatedStyle = {
        left: props.left + '%',
        top: props.top + 'px',
        width: props.width + '%',
        height: props.height + 'px'
    }
    return (
        <div
            className='flight'
            onClick={props.onClick}
            style={calculatedStyle}
        >
            {props.flight.aircraft}
        </div>
    );
}

export { Flight }
