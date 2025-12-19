import React, { useState } from 'react';
import './ProfileComponents.css';

const SettingsToggle = ({ label, icon, initialValue = false }) => {
    const [isOn, setIsOn] = useState(initialValue);

    return (
        <div className="settings-item" onClick={() => setIsOn(!isOn)}>
            <div className="setting-left">
                <span className="setting-icon">{icon}</span>
                <span className="setting-label">{label}</span>
            </div>
            <div className={`toggle-switch ${isOn ? 'on' : ''}`}>
                <div className="toggle-handle"></div>
            </div>
        </div>
    );
};

export default SettingsToggle;
