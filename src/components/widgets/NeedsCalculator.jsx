import React, { useState } from 'react';
import './NeedsCalculator.css';

const NeedsCalculator = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        gender: 'female',
        age: '',
        heightFt: '',
        heightIn: '',
        weight: '',
        activity: '1.2'
    });
    const [results, setResults] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const calculateNeeds = () => {
        const { gender, age, heightFt, heightIn, weight, activity } = formData;

        if (!age || !heightFt || !weight) return;

        // Conversions
        const weightKg = parseFloat(weight) / 2.20462;
        const heightCm = ((parseInt(heightFt) * 12) + parseInt(heightIn || 0)) * 2.54;
        const ageY = parseInt(age);

        // Mifflin-St Jeor Equation
        let bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * ageY);
        if (gender === 'male') bmr += 5;
        else bmr -= 161;

        // TDEE (Maintenance)
        const tdee = Math.round(bmr * parseFloat(activity));

        // Weight Loss Range (200-350 deficit)
        const lossMin = tdee - 350;
        const lossMax = tdee - 200;

        // Water (Lbs / 2)
        const waterOz = Math.round(parseFloat(weight) / 2);

        setResults({
            maintenance: tdee,
            lossRange: `${lossMin} - ${lossMax}`,
            water: waterOz
        });
    };

    return (
        <div className="needs-calculator-widget">
            <div className="calc-header" onClick={() => setIsOpen(!isOpen)}>
                <div className="calc-title">
                    <span className="icon">🥑</span>
                    <span>Calculate My Needs</span>
                </div>
                <span className="toggle-arrow">{isOpen ? '▲' : '▼'}</span>
            </div>

            {isOpen && (
                <div className="calc-body fade-in">
                    <div className="input-grid">
                        <div className="form-group">
                            <label>Gender</label>
                            <select name="gender" value={formData.gender} onChange={handleChange}>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input type="number" name="age" placeholder="Years" value={formData.age} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Weight (lbs)</label>
                            <input type="number" name="weight" placeholder="Lbs" value={formData.weight} onChange={handleChange} />
                        </div>
                        <div className="form-group double-input">
                            <label>Height</label>
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <input type="number" name="heightFt" placeholder="Ft" value={formData.heightFt} onChange={handleChange} />
                                <input type="number" name="heightIn" placeholder="In" value={formData.heightIn} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-group full-width">
                            <label>Activity Level</label>
                            <select name="activity" value={formData.activity} onChange={handleChange}>
                                <option value="1.2">Sedentary (Little/no exercise)</option>
                                <option value="1.375">Light (1-3 days/wk)</option>
                                <option value="1.55">Moderate (3-5 days/wk)</option>
                                <option value="1.725">Active (6-7 days/wk)</option>
                            </select>
                        </div>
                    </div>

                    <button className="calc-btn" onClick={calculateNeeds}>Calculate</button>

                    {results && (
                        <div className="results-panel fade-in">
                            <div className="res-row highlight">
                                <span>Weight Loss Target:</span>
                                <strong>{results.lossRange} kcal</strong>
                            </div>
                            <div className="res-row">
                                <span>Maintenance:</span>
                                <span>{results.maintenance} kcal</span>
                            </div>
                            <div className="res-row water">
                                <span>Daily Water Goal:</span>
                                <strong>{results.water} oz</strong>
                            </div>
                            <p className="disclaimer">*Estimates based on Mifflin-St Jeor equation. Consult a professional.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default NeedsCalculator;
