import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';
import { courses } from '../data/courses';
import './Dashboard.css';

const Classes = () => {
    const navigate = useNavigate();

    return (
        <div style={{ minHeight: '100vh', background: '#f8fafc', paddingBottom: 80 }}>
            <PageHeader title="Learning Hub" subtitle="Research-Based Curriculum" />

            <div className="stagger-list" style={{ padding: '0 20px' }}>
                <h3 className="section-title">All Courses ({courses.length})</h3>

                <div style={{ display: 'grid', gap: 20 }}>
                    {courses.map(course => (
                        <div
                            key={course.id}
                            className="glass-panel"
                            style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'transform 0.2s' }}
                            onClick={() => navigate(`/course/${course.id}`)}
                        >
                            <div style={{ height: 140, overflow: 'hidden', position: 'relative' }}>
                                <img src={course.thumbnail} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <span style={{ position: 'absolute', bottom: 10, right: 10, background: 'rgba(0,0,0,0.7)', color: 'white', fontSize: '0.7rem', padding: '3px 8px', borderRadius: 4 }}>
                                    {course.duration}
                                </span>
                            </div>

                            <div style={{ padding: 15 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                                    <span style={{ fontSize: '0.7rem', color: 'var(--color-primary-dark)', fontWeight: 'bold', textTransform: 'uppercase' }}>{course.level}</span>
                                </div>
                                <h4 style={{ margin: '0 0 5px 0', fontSize: '1rem', color: '#1e293b' }}>{course.title}</h4>
                                <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>{course.instructor}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Classes;
