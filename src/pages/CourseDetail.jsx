import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import PageHeader from '../components/layout/PageHeader';
import completionVideo from '../assets/course_completion.mp4';
import './CourseDetail.css';

const CourseDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);
    const [showCompletion, setShowCompletion] = useState(false);

    useEffect(() => {
        const found = courses.find(c => c.id === id);
        if (found) {
            setCourse(found);
            // Scroll to top
            window.scrollTo(0, 0);
        } else {
            navigate('/classes');
        }
    }, [id, navigate]);

    const getWatchUrl = (url) => {
        if (!url) return '';
        if (url.includes('youtube.com/watch')) return url; // Return direct watch URLs to preserve params like t=10s

        let videoId = '';
        if (url.includes('youtube.com/embed/')) videoId = url.split('embed/')[1];
        else if (url.includes('watch?v=')) videoId = url.split('watch?v=')[1];
        else if (url.includes('youtu.be/')) videoId = url.split('youtu.be/')[1];

        if (videoId) {
            videoId = videoId.split('&')[0].split('?')[0]; // Clean params
            return `https://www.youtube.com/watch?v=${videoId}`;
        }
        return url;
    };

    if (!course) return <div className="loading-spinner"></div>;

    return (
        <div style={{ paddingBottom: 100, background: '#fff', minHeight: '100vh' }}>
            <PageHeader title="Course" />

            {showCompletion && (
                <div className="completion-overlay">
                    <video
                        src={completionVideo}
                        autoPlay
                        playsInline
                        muted
                        className="completion-video"
                        onEnded={() => navigate('/classes')}
                    />
                    <button className="skip-btn" onClick={() => navigate('/classes')}>Skip</button>
                </div>
            )}

            <div className="course-video-container">
                <img src={course.videoPoster || course.thumbnail} alt={course.title} className="course-thumbnail" />
                <a
                    href={getWatchUrl(course.videoUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="play-overlay"
                >
                    <div className="play-button">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="play-icon">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </a>
            </div>

            <div className="course-container padded stagger-1">
                <div className="course-meta">
                    <span className="badge level">{course.level}</span>
                    <span className="badge time">{course.duration}</span>
                </div>

                <h1 className="course-title">{course.title}</h1>
                <p className="instructor">By {course.instructor}</p>

                <div className="course-content">
                    <div className="content-body" dangerouslySetInnerHTML={{ __html: course.content }} />
                </div>

                <div className="references-section">
                    <h3>📚 Research & References</h3>
                    <ul>
                        {course.references.map((ref, i) => (
                            <li key={i}>{ref}</li>
                        ))}
                    </ul>
                </div>

                <button className="complete-btn" onClick={() => setShowCompletion(true)}>
                    Mark as Complete
                </button>
            </div>
        </div>
    );
};

export default CourseDetail;
