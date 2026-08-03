import React, { useRef, useState } from 'react'
import { useNavigation, useMusicPlayer } from '@/common/hooks'
import envelopVideo from '@/assets/videos/envelop-opening.mp4'
import selloIcon from '@/assets/images/icons/sello.svg'

export const Envelop: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const timeoutRef = useRef<number | null>(null)
    const [isPlayStarted, setIsPlayStarted] = useState(false)
    const [showFlash, setShowFlash] = useState(false)
    const { goTo } = useNavigation()
    const { onPlayMusic } = useMusicPlayer()

    const triggerFlashAndNavigate = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }
        setShowFlash(true)
        setTimeout(() => {
            goTo('/invitation')
        }, 2000)
    }

    const handleOpen = () => {
        if (isPlayStarted) return
        setIsPlayStarted(true)
        onPlayMusic()

        // Safety fallback: if video fails to play or gets blocked, trigger flash after 5 seconds
        timeoutRef.current = window.setTimeout(() => {
            triggerFlashAndNavigate()
        }, 5000)

        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error('Error attempting to play video:', error)
                triggerFlashAndNavigate()
            })
        } else {
            triggerFlashAndNavigate()
        }
    }

    const handleVideoEnded = () => {
        triggerFlashAndNavigate()
    }

    return (
        <div 
            className="envelop" 
            onClick={handleOpen} 
            style={{ 
                cursor: 'pointer',
                backgroundColor: '#f6f5f3', // Off-white matching the envelope paper
                overflow: 'hidden'
            }}
        >
            <video
                ref={videoRef}
                src={envelopVideo}
                playsInline
                {...{ 'webkit-playsinline': 'true' }}
                controls={false}
                muted
                preload="auto"
                className="envelop__video"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 1,
                }}
                onEnded={handleVideoEnded}
            />

            {/* Seal */}
            <img 
                src={selloIcon} 
                alt="Sello de Lacre" 
                className={`envelop__seal ${isPlayStarted ? 'opened' : ''}`}
            />

            {/* Transparent pulsing indicator overlayed on the center seal area to guide the click */}
            {!isPlayStarted && (
                <div 
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '12rem',
                        height: '12rem',
                        borderRadius: '50%',
                        border: '2px solid rgba(194, 159, 83, 0.4)',
                        backgroundColor: 'rgba(194, 159, 83, 0.05)',
                        zIndex: 2,
                        pointerEvents: 'none',
                        animation: 'pulseSealRing 2s infinite ease-in-out'
                    }}
                />
            )}

            {/* Full-screen white flash transition */}
            {showFlash && (
                <div 
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: '#ffffff',
                        zIndex: 9999,
                        pointerEvents: 'all',
                        animation: 'flashAnimation 0.5s ease-out forwards'
                    }}
                />
            )}

            <style>{`
                @keyframes pulseSealRing {
                    0% {
                        transform: translate(-50%, -50%) scale(0.9);
                        opacity: 0.8;
                    }
                    50% {
                        transform: translate(-50%, -50%) scale(1.2);
                        opacity: 0.3;
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(0.9);
                        opacity: 0.8;
                    }
                }
                @keyframes flashAnimation {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    )
}

