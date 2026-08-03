import React from 'react'
import { motion } from 'framer-motion'
import bg from '@/assets/images/backgrounds/rsvp.jpeg'
import marco from '@/assets/images/icons/marco.svg'

const FLUID_EASE = [0.22, 1, 0.36, 1] as const

export const FarewellSection: React.FC = () => {
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

