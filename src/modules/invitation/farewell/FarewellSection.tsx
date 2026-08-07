import React, { useRef } from 'react'
import { motion, type Variants } from 'framer-motion'
import confetti from 'canvas-confetti'
import bg from '@/assets/images/backgrounds/rsvp.jpeg'
import marco from '@/assets/images/icons/marco.webp'

const FLUID_EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const CONFETTI_COLORS = ['#191D39', '#2B4C7E', '#ffffff', '#F8FAFC', '#C7A546', '#E5C158']

const frameContentVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.22,
            delayChildren: 0.65,
        },
    },
}

const textLineVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: FLUID_EASE },
    },
}

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

        fire(0.25, { spread: 26, startVelocity: 55 })
        fire(0.2, { spread: 60 })
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 })
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 })
        fire(0.1, { spread: 120, startVelocity: 45 })
    }

    return (
        <>
            <section id="farewell" className="farewell">
                <div className="farewell__bg" style={{ backgroundImage: `url(${bg})` }} />

                <div className="farewell__container">
                    <motion.div
                        className="farewell__frame-wrapper"
                        initial={{ opacity: 0, scale: 0.88 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        onViewportEnter={triggerConfetti}
                        transition={{ duration: 1.4, delay: 0.2, ease: FLUID_EASE }}
                    >
                        <img src={marco} alt="Marco Floral" className="farewell__frame-bg" />

                        <motion.div
                            className="farewell__frame-content"
                            variants={frameContentVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-10% 0px' }}
                        >
                            <motion.h2
                                className="farewell__title"
                                initial={{ opacity: 0, scale: 0.82 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: '-10% 0px' }}
                                transition={{ duration: 1.1, delay: 0.55, ease: FLUID_EASE }}
                            >
                                CEB 6/1
                            </motion.h2>

                            <motion.p className="farewell__generation" variants={textLineVariants}>
                                GENERACIÓN 2023 – 2026
                            </motion.p>

                            <motion.p className="farewell__message" variants={textLineVariants}>
                                ¡Gracias por acompañarnos y ser parte fundamental de este gran logro! Los esperamos con mucha emoción para celebrar juntos una noche inolvidable.
                            </motion.p>

                            <motion.span className="farewell__date" variants={textLineVariants}>
                                7 DE AGOSTO DE 2026
                            </motion.span>
                        </motion.div>
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
                <p className="invitation-footer__contact">
                    ¿Quieres una invitación como esta para tu próximo evento?{' '}
                    <span style={{ display: 'inline-block' }}>
                        Contáctanos al{' '}
                        <a
                            className="invitation-footer__contact-link"
                            href="https://wa.me/524496548073"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            4496548073
                        </a>
                    </span>
                </p>
            </footer>
        </>
    )
}
