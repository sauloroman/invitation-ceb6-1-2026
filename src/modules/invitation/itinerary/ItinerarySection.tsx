import React from 'react'
import { motion } from 'framer-motion'
import { useInvitationConfig } from '@/common/hooks'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'

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
                    <div className="itinerary-card-main__pinstripes" aria-hidden="true" />

                    <div className="itinerary-slot itinerary-slot--top-left">
                        <div className="itinerary-slot__placeholder" />
                    </div>
                    <div className="itinerary-slot itinerary-slot--top-right">
                        <div className="itinerary-slot__placeholder" />
                    </div>
                    <div className="itinerary-slot itinerary-slot--mid-left">
                        <div className="itinerary-slot__placeholder" />
                    </div>
                    <div className="itinerary-slot itinerary-slot--bottom-right">
                        <div className="itinerary-slot__placeholder" />
                    </div>

                    <div className="itinerary-events-list">
                        {itineraryConfig.itinerary.map((item, idx) => {
                            const isEven = idx % 2 === 0
                            return (
                                <div key={idx} className="itinerary-event-block">
                                    <div className={`itinerary-event-block__side-slot itinerary-event-block__side-slot--${isEven ? 'left' : 'right'}`}>
                                        <div className="itinerary-event-block__placeholder" />
                                    </div>

                                    {/* Event Title in Cursive */}
                                    <h3 className="itinerary-event-block__title">{item.event}</h3>

                                    {/* Time in Uppercase Serif */}
                                    <span className="itinerary-event-block__time">{item.time}</span>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
