import React, { useState } from 'react';
import './CalendarWidget.css';

const CalendarWidget = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const days = Array.from({ length: 30 }, (_, i) => i + 1); // Mock 30 days

    return (
        <div className="calendar-widget glass-panel">
            <div className="calendar-header">
                <h3>Select a Date</h3>
                <p>December 2025</p>
            </div>
            <div className="calendar-grid">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                    <div key={d} className="day-label">{d}</div>
                ))}
                {days.map(day => (
                    <button
                        key={day}
                        className={`day-cell ${selectedDate === day ? 'selected' : ''}`}
                        onClick={() => setSelectedDate(day)}
                    >
                        {day}
                    </button>
                ))}
            </div>
            {selectedDate && (
                <div className="time-slots">
                    <p>Available times for Dec {selectedDate}:</p>
                    <div className="slots-grid">
                        <button className="slot">9:00 AM</button>
                        <button className="slot">11:30 AM</button>
                        <button className="slot">2:00 PM</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CalendarWidget;
