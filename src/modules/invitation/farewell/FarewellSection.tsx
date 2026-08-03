import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import bg from '@/assets/images/backgrounds/rsvp.jpeg'
import marco from '@/assets/images/icons/marco.svg'

const FLUID_EASE = [0.22, 1, 0.36, 1] as const

const CONFETTI_COLORS = ['#191D39', '#2B4C7E', '#ffffff', '#F8FAFC', '#C7A546', '#E5C158']

export const FarewellSection: React.FC = () => {
    const hasTriggeredRef = useRef(false)

    const triggerConfetti = () => {
        if (hasTriggeredRef.current) return
        hasTriggeredRef.current = true

        const count = 200
        const defaults = {
            origin: { y: 0.8 },
            colors: CONFETTI_COLORS,
            zIndex: 1500,
        }

        const fire = (particleRatio: number, opts: confetti.Options) => {
            confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio),
            })
        }

        fire(0.25, {
            spread: 26,
            startVelocity: 55,
        })
        fire(0.2, {
            spread: 60,
        })
        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
        })
        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
        })
        fire(0.1, {
            spread: 120,
            startVelocity: 45,
        })
    }

    return (
        <>
            <section id="farewell" className="farewell">
                <div className="farewell__bg" style={{ backgroundImage: `url(${bg})` }} />
                
                <div className="farewell__container">
                    <motion.div
                        className="farewell__frame-wrapper"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        onViewportEnter={triggerConfetti}
                        transition={{ duration: 1.2, ease: FLUID_EASE }}
                    >
                        <img src={marco} alt="Marco Floral" className="farewell__frame-bg" />

                        <div className="farewell__frame-content">
                            <h2 className="farewell__title">CEB 6/1</h2>

                            <p className="farewell__generation">GENERACIÓN 2023 – 2026</p>

                            <p className="farewell__message">
                                ¡Gracias por acompañarnos y ser parte fundamental de este gran logro! Los esperamos con mucha emoción para celebrar juntos una noche inolvidable.
                            </p>

                            <span className="farewell__date">7 DE AGOSTO DE 2026</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <footer className="invitation-footer">
                <p className="invitation-footer__text">
                    Hecho con amor por{' '}
                    <a
                        href="https://www.instagram.com/tuamigoinvitaciones/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="invitation-footer__link"
                    >
                        TuAmigoInvitaciones
                    </a>
                </p>
            </footer>
        </>
    )
}


