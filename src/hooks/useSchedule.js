import { useState, useEffect } from 'react';

/**
 * Custom hook for managing a persistent schedule in LocalStorage.
 */
export function useSchedule() {
    const [events, setEvents] = useState([]);

    // Load from local storage on mount
    useEffect(() => {
        const stored = localStorage.getItem('gutti_schedule');
        if (stored) {
            try {
                setEvents(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to parse schedule", e);
            }
        } else {
            // Default demo events if empty
            setEvents([
                { id: '1', title: 'Video Call with RD', date: new Date().toDateString(), time: '3:00 PM', type: 'video' },
                { id: '2', title: 'Group Workshop', date: new Date(Date.now() + 86400000).toDateString(), time: '10:00 AM', type: 'group' }
            ]);
        }
    }, []);

    // Save to local storage whenever events change
    useEffect(() => {
        if (events.length > 0) {
            localStorage.setItem('gutti_schedule', JSON.stringify(events));
        }
    }, [events]);

    const addEvent = (event) => {
        const newEvent = { ...event, id: Date.now().toString() };
        setEvents(prev => [...prev, newEvent]);
    };

    const removeEvent = (id) => {
        setEvents(prev => prev.filter(e => e.id !== id));
    };

    return { events, addEvent, removeEvent };
}
