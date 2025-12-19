import React, { useEffect, useState, useRef } from 'react';
import './LoadingScreen.css';
import splashVideo from '../assets/splash_v2.mp4';

const LoadingScreen = ({ onComplete }) => {
    const videoRef = useRef(null);
    const [fading, setFading] = useState(false);

    // Start invisible to hide the seek
    const [isVisible, setIsVisible] = useState(false);
    const [needsInteraction, setNeedsInteraction] = useState(false);

    useEffect(() => {
        // Safety timeout in case everything fails
        const timer = setTimeout(() => handleVideoEnd(), 15000);
        return () => clearTimeout(timer);
    }, []);

    const handleMetadata = () => {
        if (videoRef.current) {
            // Skip first 2 seconds
            videoRef.current.currentTime = 2.0;
        }
    };

    const handleTimeUpdate = () => {
        // Reveal only when playing past 2s
        if (videoRef.current && videoRef.current.currentTime >= 2.0 && !isVisible) {
            setIsVisible(true);
        }
    };

    const attemptPlay = async () => {
        if (videoRef.current) {
            try {
                // Mobile Autoplay requires muted!
                videoRef.current.muted = true;
                await videoRef.current.play();
            } catch (err) {
                console.log("Autoplay blocked:", err);
                setNeedsInteraction(true);
            }
        }
    };

    const handleCanPlay = () => {
        attemptPlay();
    };

    const handleVideoEnd = () => {
        if (!fading) {
            setFading(true);
            setTimeout(onComplete, 500);
        }
    };

    const handleUserStart = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setNeedsInteraction(false);
        }
    };

    return (
        <div className={`loading-screen ${fading ? 'fade-out' : ''}`}>
            {needsInteraction && (
                <button className="start-btn" onClick={handleUserStart}>
                    Tap to Enter
                </button>
            )}

            <video
                ref={videoRef}
                className={`splash-video ${isVisible ? 'visible' : ''}`}
                playsInline
                autoPlay
                muted
                src={splashVideo}
                onLoadedMetadata={handleMetadata}
                onCanPlay={handleCanPlay}
                onEnded={handleVideoEnd}
                onTimeUpdate={handleTimeUpdate}
            />
        </div>
    );
};

export default LoadingScreen;
