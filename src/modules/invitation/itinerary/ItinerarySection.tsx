import React from 'react'
import { motion } from 'framer-motion'
import { useInvitationConfig } from '@/common/hooks'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'

import rsvpBg from '@/assets/images/backgrounds/rsvp.jpeg'
import sillas from '@/assets/images/icons/sillas.svg'

const FLUID_EASE = [0.22, 1, 0.36, 1] as const

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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.2, ease: FLUID_EASE }}
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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.2, delay: 0.1, ease: FLUID_EASE }}
                >
                    <div
                        className="itinerary-card-main__pinstripes"
                        style={{ '--rsvp-bg': `url(${rsvpBg})` } as React.CSSProperties}
                        aria-hidden="true"
                    />
                    <div className="itinerary-events-list">
                        {itineraryConfig.itinerary.map((item, idx) => {
                            return (
                                <div key={idx} className="itinerary-event-block">
                                    <h3 className="itinerary-event-block__title">{item.event}</h3>
                                    <span className="itinerary-event-block__time">{item.time}</span>
                                </div>
                            )
                        })}
                    </div>

                    <div className="itinerary-section__icon">
                        <img src={sillas} alt="Sillas azules de madera" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
