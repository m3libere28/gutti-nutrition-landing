import React, { useState } from 'react';
import './DiaryWidgets.css';

const MoodTracker = () => {
    const [selectedMood, setSelectedMood] = useState(null);
    const moods = [
        { emoji: '😫', label: 'Awful' },
        { emoji: '😕', label: 'Meh' },
        { emoji: '😐', label: 'Okay' },
        { emoji: '🙂', label: 'Good' },
        { emoji: '😁', label: 'Great' }
    ];

    return (
        <div className="widget-container glass-panel">
            <h4>How do you feel?</h4>
            <div className="mood-row">
                {moods.map((m, idx) => (
                    <button
                        key={idx}
                        className={`mood-btn ${selectedMood === idx ? 'selected' : ''}`}
                        onClick={() => setSelectedMood(idx)}
                    >
                        <span className="mood-emoji">{m.emoji}</span>
                        <span className="mood-label">{m.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MoodTracker;
