'use client';

import { useState, useRef, useEffect } from 'react';

interface Chapter {
    time: number;
    title: string;
    description?: string;
}

interface VideoPlayerProps {
    src?: string;
    poster?: string;
    title?: string;
    subtitle?: string;
    chapters?: Chapter[];
    aspectRatio?: string;
}

const defaultChapters: Chapter[] = [
    { time: 0, title: 'Introduction to RBCA', description: "M'bé Research Station, Côte d'Ivoire" },
    { time: 10, title: 'Seed Processing & Drying', description: 'Moisture reduction to 5-6%' },
    { time: 20, title: 'Cold Vaults & Conservation', description: 'Base & Active collections at -20°C / 4°C' },
    { time: 30, title: 'Viability & Field Regeneration', description: 'Ensuring 100% germination integrity' },
];

export default function VideoPlayer({
    src = '/files/vdo/v1.mp4',
    poster = '/files/img/about/genebank/slide1.jpg',
    title = "Official Facility Tour: Dr. Monty P. Jones Rice Biodiversity Center for Africa",
    subtitle = "Operating under CGIAR & FAO International Treaty | M'bé, Côte d'Ivoire",
    chapters = defaultChapters,
    aspectRatio = '16 / 9',
}: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [activeChapter, setActiveChapter] = useState(0);
    const [hasInteracted, setHasInteracted] = useState(false);

    const togglePlay = () => {
        if (!videoRef.current) return;
        setHasInteracted(true);
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play().catch(() => {
                // Autoplay/play policy fallback
            });
            setIsPlaying(true);
        }
    };

    const handleTimeUpdate = () => {
        if (!videoRef.current) return;
        const curr = videoRef.current.currentTime;
        setCurrentTime(curr);

        if (chapters && chapters.length > 0) {
            for (let i = chapters.length - 1; i >= 0; i--) {
                if (curr >= chapters[i].time) {
                    setActiveChapter(i);
                    break;
                }
            }
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const jumpToChapter = (time: number, idx: number) => {
        if (!videoRef.current) return;
        setHasInteracted(true);
        videoRef.current.currentTime = time;
        setActiveChapter(idx);
        if (!isPlaying) {
            videoRef.current.play().catch(() => {});
            setIsPlaying(true);
        }
    };

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseFloat(e.target.value);
        if (videoRef.current) {
            videoRef.current.currentTime = val;
            setCurrentTime(val);
        }
    };

    const formatTime = (secs: number) => {
        const mins = Math.floor(secs / 60);
        const s = Math.floor(secs % 60);
        return `${mins}:${s < 10 ? '0' : ''}${s}`;
    };

    const toggleFullScreen = () => {
        if (!videoRef.current) return;
        if (!document.fullscreenElement) {
            videoRef.current.requestFullscreen().catch(() => {});
        } else {
            document.exitFullscreen().catch(() => {});
        }
    };

    return (
        <div className="world-video-player">
            <div className="video-viewport" style={{ aspectRatio }}>
                <video
                    ref={videoRef}
                    src={src}
                    poster={poster}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={() => setIsPlaying(false)}
                    playsInline
                    preload="metadata"
                />

                {!isPlaying && (
                    <div className="video-poster-overlay" onClick={togglePlay}>
                        <div className="video-badge-tag">
                            <span className="live-dot" /> Verified Footage
                        </div>
                        <button type="button" className="play-pulse-btn" aria-label="Play video tour">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                        <div className="video-info-banner">
                            <h4>{title}</h4>
                            <p>{subtitle}</p>
                        </div>
                    </div>
                )}

                <div className={`video-controls-bar ${isPlaying ? 'show' : ''}`}>
                    <button
                        type="button"
                        className="control-btn"
                        onClick={togglePlay}
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                        {isPlaying ? '⏸' : '▶'}
                    </button>

                    <div className="video-timeline-wrap">
                        <input
                            type="range"
                            min={0}
                            max={duration || 100}
                            value={currentTime}
                            onChange={handleSeek}
                            className="video-seek-slider"
                            aria-label="Video timeline"
                        />
                        <div
                            className="seek-progress-fill"
                            style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                        />
                    </div>

                    <span className="video-time-display">
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </span>

                    <button
                        type="button"
                        className="control-btn"
                        onClick={toggleMute}
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                        {isMuted ? '🔇' : '🔊'}
                    </button>

                    <button
                        type="button"
                        className="control-btn"
                        onClick={toggleFullScreen}
                        aria-label="Fullscreen"
                    >
                        ⛶
                    </button>
                </div>
            </div>

            {chapters && chapters.length > 0 && (
                <div className="video-chapters-rail">
                    <div className="chapters-label">
                        <small>Key Video Chapters</small>
                    </div>
                    <div className="chapters-list">
                        {chapters.map((chap, idx) => (
                            <button
                                key={chap.title}
                                type="button"
                                className={`chapter-chip ${activeChapter === idx ? 'is-active' : ''}`}
                                onClick={() => jumpToChapter(chap.time, idx)}
                            >
                                <span className="chap-time">{formatTime(chap.time)}</span>
                                <span className="chap-text">{chap.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
