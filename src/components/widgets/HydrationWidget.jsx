import React, { useState } from 'react';
import GuttieCharacter from '../GuttieCharacter';
import './HydrationWidget.css';

import hydrationVideo from '../../assets/hydration_celebration.mp4';

const HydrationWidget = () => {
    const [glasses, setGlasses] = useState(0);
    const [showCelebration, setShowCelebration] = useState(false);
    const goal = 8;

    const addGlass = () => {
        if (glasses < goal) {
            const newCount = glasses + 1;
            setGlasses(newCount);
            if (newCount === goal) {
                setShowCelebration(true);
            }
        }
    };

    const progress = (glasses / goal) * 100;

    return (
        <>
            {showCelebration && (
                <div className="completion-overlay">
                    <video
                        src={hydrationVideo}
                        autoPlay
                        playsInline
                        className="completion-video"
                        onEnded={() => setShowCelebration(false)}
                        onLoadedData={(e) => e.target.play().catch(console.error)}
                    />
                    <button className="skip-btn" onClick={() => setShowCelebration(false)}>Close</button>
                    <div style={{
                        position: 'absolute',
                        bottom: '10%',
                        left: '0',
                        width: '100%',
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                    }}>
                        Hydration Goal Reached! 💧
                    </div>
                </div>
            )}

            <div className="hydration-widget glass-panel">
                <div className="hydration-header">
                    <h3>Daily Hydration</h3>
                    <span className="counter">{glasses}/{goal} Glasses</span>
                </div>

                <div className="hydration-content">
                    <div className="guttie-mini-preview">
                        {/* Mini Guttie reacting to water */}
                        <div className={`mini-guttie ${glasses === goal ? 'celebrating' : ''}`}>
                            <GuttieCharacter className="scale-dict" />
                        </div>
                    </div>

                    <div className="water-controls">
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                        </div>
                        <button className="add-water-btn" onClick={addGlass} disabled={glasses >= goal}>
                            + 💧
                        </button>
                    </div>
                </div>
                {glasses === goal && <p className="success-msg">Great job! You reached your goal!</p>}
            </div>
        </>
    );
};

export default HydrationWidget;
