import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import CalendarWidget from '../components/widgets/CalendarWidget';
import { useSchedule } from '../hooks/useSchedule';
import './Dashboard.css';

const Schedule = () => {
    const { events, addEvent, removeEvent } = useSchedule();
    const [isAddMode, setIsAddMode] = useState(false);
    const [newEvent, setNewEvent] = useState({ title: '', time: '', type: 'video' });

    // Sort events by date (simple sort for now)
    const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newEvent.title) return;

        addEvent({
            ...newEvent,
            date: new Date().toDateString() // Defaults to today for this prototype simplifiction
        });
        setIsAddMode(false);
        setNewEvent({ title: '', time: '', type: 'video' });
    };

    return (
        <div style={{ minHeight: '100vh', background: '#f8fafc', paddingBottom: 100 }}>
            <PageHeader title="Schedule" />

            <div className="stagger-list" style={{ padding: 20 }}>
                {/* Calendar Widget (Visual only for now, could wire to select date) */}
                <CalendarWidget />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 30, marginBottom: 15 }}>
                    <h3 className="section-title" style={{ margin: 0 }}>My Appointments</h3>
                    <button
                        onClick={() => setIsAddMode(!isAddMode)}
                        style={{ border: 'none', background: 'var(--color-primary)', color: 'white', padding: '8px 15px', borderRadius: '15px', fontWeight: 'bold' }}
                    >
                        + Add
                    </button>
                </div>

                {isAddMode && (
                    <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: 20, marginBottom: 20 }}>
                        <h4 style={{ marginBottom: 10 }}>New Appointment</h4>
                        <input
                            type="text"
                            placeholder="Event Title"
                            value={newEvent.title}
                            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                            style={{ display: 'block', width: '100%', padding: 10, marginBottom: 10, borderRadius: 10, border: '1px solid #ddd' }}
                        />
                        <input
                            type="time"
                            value={newEvent.time}
                            onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                            style={{ display: 'block', width: '100%', padding: 10, marginBottom: 10, borderRadius: 10, border: '1px solid #ddd' }}
                        />
                        <button type="submit" style={{ width: '100%', padding: 10, background: '#333', color: 'white', borderRadius: 10, border: 'none' }}>Save Event</button>
                    </form>
                )}

                {sortedEvents.length === 0 ? (
                    <p style={{ textAlign: 'center', color: '#888' }}>No upcoming appointments.</p>
                ) : (
                    sortedEvents.map(evt => (
                        <div key={evt.id} className="appointment-card glass-panel" style={evt.type === 'group' ? { background: 'linear-gradient(135deg, #FF9966 0%, #FF5E62 100%)', boxShadow: '0 10px 25px -5px rgba(255, 94, 98, 0.4)' } : {}}>
                            <div className="appt-time">{evt.time || 'All Day'}</div>
                            <div className="appt-info">
                                <h4>{evt.title}</h4>
                                <span className="status-badge">{evt.date === new Date().toDateString() ? 'Today' : evt.date}</span>
                            </div>
                            <button onClick={() => removeEvent(evt.id)} style={{ background: 'rgba(0,0,0,0.2)', border: 'none', color: 'white', width: 30, height: 30, borderRadius: '50%', marginLeft: 10 }}>×</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Schedule;
