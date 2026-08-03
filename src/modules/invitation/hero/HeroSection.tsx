import React from 'react'
import { motion } from 'framer-motion'
import { useInvitationConfig } from '@/common/hooks'
import heroVideo from '@/assets/videos/hero.mp4'



const FLUID_EASE = [0.22, 1, 0.36, 1] as const

export const HeroSection: React.FC = () => {
    const { sections } = useInvitationConfig()

    const names = sections.hero?.names ?? 'CEB 6/1'
    const date = sections.hero?.date ?? '7 DE AGOSTO DE 2026'

    return (
        <div id="hero" className="hero">
            <video
                autoPlay
                loop
                muted
                playsInline
                {...{ 'webkit-playsinline': 'true' }}
                preload="auto"
                className="hero__video"
            >
                <source src={heroVideo} type="video/mp4" />
            </video>

            <div className="hero__content">
                <motion.h1 
                    className="hero__title"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: FLUID_EASE }}
                >
                    {names}
                </motion.h1>

                <motion.p 
                    className="hero__generation"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: FLUID_EASE }}
                >
                    Generación 2023 - 2026
                </motion.p>

                <motion.p 
                    className="hero__location"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: FLUID_EASE }}
                >
                    Aguascalientes, Ags.
                </motion.p>

                <motion.div 
                    className="hero__date-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.7, ease: FLUID_EASE }}
                >
                    <span className="hero__date-divider" />
                    <p className="hero__date">{date}</p>
                    <span className="hero__date-divider" />
                </motion.div>
            </div>
        </div>
    )
}
