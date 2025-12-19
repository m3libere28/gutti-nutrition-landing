import React, { useState } from 'react';
import './DiaryWidgets.css';

const SymptomLog = () => {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const symptoms = ['Bloating', 'Headache', 'Low Energy', 'Cramps', 'Nausea'];

    const toggleSymptom = (sym) => {
        if (selectedSymptoms.includes(sym)) {
            setSelectedSymptoms(selectedSymptoms.filter(s => s !== sym));
        } else {
            setSelectedSymptoms([...selectedSymptoms, sym]);
        }
    };

    return (
        <div className="widget-container glass-panel">
            <h4>Symptom Check-in</h4>
            <div className="symptom-cloud">
                {symptoms.map(sym => (
                    <button
                        key={sym}
                        className={`symptom-chip ${selectedSymptoms.includes(sym) ? 'active' : ''}`}
                        onClick={() => toggleSymptom(sym)}
                    >
                        {sym}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SymptomLog;
