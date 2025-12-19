import React, { useState } from 'react';
import Button from '../Button';
import './Onboarding.css';

const OnboardingWizard = ({ onComplete }) => {
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');

    const nextStep = () => setStep(step + 1);

    return (
        <div className="splash-container">
            <div className="phone-frame glass-panel" style={{ justifyContent: 'space-between' }}>
                <div style={{ padding: '20px 0', textAlign: 'center' }}>
                    <img src="/logo_transparent.png" alt="Guttie Nutrition" className="onboarding-logo" />

                    {/* Progress Dots */}
                    <div className="step-dots">
                        {[1, 2, 3].map(i => <div key={i} className={`dot ${step >= i ? 'active' : ''}`}></div>)}
                    </div>
                </div>

                <div className="onboarding-content">
                    {step === 1 && (
                        <div className="step-1 fade-in">
                            <h2>Let's get to know you!</h2>
                            <p>Welcome! What should we call you?</p>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    )}

                    {step === 2 && (
                        <div className="step-2 fade-in">
                            <h2>What brings you here, {name}?</h2>
                            <p>Select your primary goal:</p>
                            <div className="option-grid">
                                <button className="option-btn">⚖️ Weight Loss</button>
                                <button className="option-btn">🧘 Gut Health</button>
                                <button className="option-btn">💪 Muscle Gain</button>
                                <button className="option-btn">⚡ More Energy</button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="step-3 fade-in">
                            <h2>Any dietary preferences?</h2>
                            <p>We'll tailor suggestions to you.</p>
                            <div className="option-grid">
                                <button className="option-btn">Vegan</button>
                                <button className="option-btn">Keto</button>
                                <button className="option-btn">Gluten Free</button>
                                <button className="option-btn">None</button>
                            </div>
                        </div>
                    )}
                </div>

                <div style={{ width: '100%', marginBottom: '20px' }}>
                    {step < 3 ? (
                        <Button onClick={nextStep} disabled={step === 1 && !name}>Next</Button>
                    ) : (
                        <Button onClick={onComplete}>Start My Journey</Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OnboardingWizard;
