import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { DayGrid } from './dayGrid.js'

// ========================================

class Scheduler extends React.Component {
    render() {
        return (
            <div className='scheduler'>
                <DayGrid />
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
  <Scheduler />,
  document.getElementById('root')
);
