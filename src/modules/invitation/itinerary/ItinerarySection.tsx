import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { useInvitationConfig } from '@/common/hooks'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'

import rsvpBg from '@/assets/images/backgrounds/rsvp.jpeg'
import macetero from '@/assets/images/icons/macetero.webp'

const FLUID_EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const eventsContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.35,
        },
    },
}

const getEventVariants = (idx: number): Variants => ({
    hidden: { opacity: 0, x: idx % 2 === 0 ? -20 : 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: FLUID_EASE },
    },
})

export const ItinerarySection: React.FC = () => {
    const { sections } = useInvitationConfig()
    const itineraryConfig = sections.itinerary

    if (!itineraryConfig?.showItinerary || !itineraryConfig?.itinerary) {
        return null
    }

    return (
        <section id="itinerary" className="itinerary-section">
            <div className="itinerary-section__container">
                <motion.div
                    initial={{ opacity: 0, x: 35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.1, delay: 0.2, ease: FLUID_EASE }}
                >
                    <SectionHeader
                        pretitle="ITINERARIO"
                        title="Programa del Evento"
                        subtitle='Sigue de cerca todas las amenidades que la gran noche tiene deparada para tí.'
                        align="center"
                        variant="uppercase"
                    />
                </motion.div>

                <motion.div
                    className="itinerary-card-main"
                    initial={{ opacity: 0, scale: 0.94, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.3, delay: 0.35, ease: FLUID_EASE }}
                >
                    <div
                        className="itinerary-card-main__pinstripes"
                        style={{ '--rsvp-bg': `url(${rsvpBg})` } as React.CSSProperties}
                        aria-hidden="true"
                    />

                    <motion.h2
                        className="itinerary-card-main__cursive-title"
                        initial={{ opacity: 0, y: -15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 1.0, delay: 0.55, ease: FLUID_EASE }}
                    >
                        Programa
                    </motion.h2>

                    <motion.div
                        className="itinerary-events-list"
                        variants={eventsContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-10% 0px' }}
                    >
                        {itineraryConfig.itinerary.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="itinerary-event-block"
                                variants={getEventVariants(idx)}
                            >
                                <h3 className="itinerary-event-block__title">{item.event}</h3>
                                <span className="itinerary-event-block__time">{item.time}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="itinerary-section__icon"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-5% 0px' }}
                        transition={{ duration: 1.0, delay: 0.6, ease: FLUID_EASE }}
                    >
                        <img src={macetero} alt="Macetero decorativo" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
