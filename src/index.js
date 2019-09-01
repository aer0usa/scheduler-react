import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DayGrid } from './dayGrid.js'

// ========================================

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
