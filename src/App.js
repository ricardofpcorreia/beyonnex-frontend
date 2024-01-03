import React from 'react';
import './App.css';
import TemperatureGauge from './components/TemperatureGauge';

const App = () => {
  return (
    <div className='app'>
      <TemperatureGauge initialMinTemp={0} initialMaxTemp={100} initialCurrentTemp={20} />
    </div>
  );
};

export default App;