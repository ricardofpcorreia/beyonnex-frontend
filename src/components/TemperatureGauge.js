import React, { useState} from 'react';
import '../styles/TemperatureGauge.css';

const TemperatureGauge = ({ initialMinTemp, initialMaxTemp, initialCurrentTemp }) => {

    const [minTemp, setMinTemp] = useState(initialMinTemp);
    const [maxTemp, setMaxTemp] = useState(initialMaxTemp);
    const [currentTemp, setCurrentTemp] = useState(initialCurrentTemp);

    const getRotationDegrees = (min, max, current) => {
        const range = max - min;
        const relativeValue = current - min;
        return (relativeValue / range) * 180 - 90;
    };

    const needleStyle = {
        transform: `rotate(${getRotationDegrees(minTemp, maxTemp, currentTemp)}deg)`,
        transformOrigin: '50% 100%'
    };

    return (
        <div className='flex flex-col items-center p-4'>
            <svg className='w-48 h-24' viewBox='0 0 36 18'>
                <circle cx='18' cy='18' r='17.5' fill='none' stroke='black' strokeWidth='1' />

                <line x1='1' y1='18' x2='4' y2='18' stroke='red' strokeWidth='0.5' />
                <line x1='32' y1='18' x2='35' y2='18' stroke='red' strokeWidth='0.5' />

                <line className='stroke-current text-black' x1='18' y1='1' x2='18' y2='18' style={needleStyle} />
            </svg>
            <div className='text-2xl font-bold'>{currentTemp}°C</div>
            <div className='space-x-2 mt-4'>
                <label className='inline-flex flex-col items-center text-sm'>
                    Min Temp:
                    <input
                        type='number'
                        className='mt-1 px-2 py-1 border rounded'
                        value={minTemp}
                        onChange={(e) => setMinTemp(e.target.value)}
                    />
                </label>
                <label className='inline-flex flex-col items-center text-sm'>
                    Max Temp:
                    <input
                        type='number'
                        className='mt-1 px-2 py-1 border rounded'
                        value={maxTemp}
                        onChange={(e) => setMaxTemp(e.target.value)}
                    />
                </label>
                <label className='inline-flex flex-col items-center text-sm'>
                    Current Temp:
                    <input
                        type='number'
                        className='mt-1 px-2 py-1 border rounded'
                        value={currentTemp}
                        onChange={(e) => setCurrentTemp(e.target.value)}
                    />
                </label>
            </div>
        </div>
    );
};  

export default TemperatureGauge;