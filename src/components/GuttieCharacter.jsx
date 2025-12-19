import React, { useEffect, useState } from 'react';
import './GuttieCharacter.css';

const GuttieCharacter = ({ waving = false, className = '' }) => {
    const [isWaving, setIsWaving] = useState(waving);

    useEffect(() => {
        // If 'waving' prop is true, keep waving loop or one-shot? 
        // Let's make it respect the prop
        setIsWaving(waving);
    }, [waving]);

    return (
        <div className={`guttie-character-comp ${className}`}>
            <div className="guttie-body">
                <div className="face">
                    <div className="eye left">
                        <div className="pupil"></div>
                    </div>
                    <div className="eye right">
                        <div className="pupil"></div>
                    </div>
                    <div className="mouth">
                        <div className="tongue"></div>
                    </div>
                    <div className="cheek left"></div>
                    <div className="cheek right"></div>
                </div>
                <div className={`hand ${isWaving ? 'wave-animation' : ''}`}></div>
            </div>
        </div>
    );
};

export default GuttieCharacter;
