import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';
import './NewClient.css';

const NewClient = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        goal: 'energy',
        diet: 'none'
    });

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleNext = () => setStep(step + 1);

    const handleSubmit = () => {
        // Save to local user profile
        localStorage.setItem('gutti_user_profile', JSON.stringify(formData));
        // Also mark regular onboarding as done
        localStorage.setItem('onboardingDone', 'true');
        // Navigate home
        navigate('/');
    };

    return (
        <div className="page-container padded">
            <PageHeader title="New Profile" />

            <div className="signup-card glass-panel-up">
                <div className="step-dots">
                    <span className={`dot ${step >= 1 ? 'active' : ''}`}></span>
                    <span className={`dot ${step >= 2 ? 'active' : ''}`}></span>
                    <span className={`dot ${step >= 3 ? 'active' : ''}`}></span>
                </div>

                {step === 1 && (
                    <div className="form-step fade-in">
                        <h2>Let's meet you.</h2>
                        <label>First Name</label>
                        <input
                            type="text"
                            className="input-field"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            placeholder="Your Name"
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            className="input-field"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder="you@email.com"
                        />
                        <button className="primary-btn" onClick={handleNext} disabled={!formData.name}>Next</button>
                    </div>
                )}

                {step === 2 && (
                    <div className="form-step fade-in">
                        <h2>Your Primary Goal?</h2>
                        <div className="option-grid">
                            {['Energy ⚡', 'Digestion 🧘', 'Weight ⚖️', 'Immunity 🛡️'].map(opt => (
                                <button
                                    key={opt}
                                    className={`option-btn ${formData.goal === opt ? 'selected' : ''}`}
                                    onClick={() => handleChange('goal', opt)}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                        <button className="primary-btn" onClick={handleNext}>Next</button>
                    </div>
                )}

                {step === 3 && (
                    <div className="form-step fade-in">
                        <h2>All Set!</h2>
                        <p>We've customized your experience based on your goal:</p>
                        <div className="summary-box">
                            <strong>{formData.name}</strong><br />
                            Goal: {formData.goal}
                        </div>
                        <button className="primary-btn" onClick={handleSubmit}>Create Profile</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewClient;
