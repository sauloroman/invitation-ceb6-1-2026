import React from 'react'
import { motion } from 'framer-motion'
import { useInvitationConfig } from '@/common/hooks'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { Button } from '@/common/components/button/Button'
import { MapPinIcon } from '@phosphor-icons/react'

import colagantes from '@/assets/images/icons/colgantes.svg'
import macetero from '@/assets/images/icons/jarron.svg'

const FLUID_EASE = [0.22, 1, 0.36, 1] as const

export const PlacesSection: React.FC = () => {
    const { sections } = useInvitationConfig()
    const placesConfig = sections.places

    if (!placesConfig?.showPlaces || !placesConfig?.locations) {
        return null
    }

    const formatLocalDate = (dateStr?: string) => {
        if (!dateStr) return ''
        const [year, month, day] = dateStr.split('-').map(Number)
        const dateObj = new Date(year, month - 1, day)

        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            day: 'numeric',
            month: 'long'
        }
        const formatted = dateObj.toLocaleDateString('es-ES', options)
        return formatted.charAt(0).toUpperCase() + formatted.slice(1)
    }

    return (
        <>
            <div className="places-section__colgantes">
                <img src={colagantes} alt="colgantes" />
            </div>
            <section id="places" className="places-section">

                <div className="places-section__container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 1.2, ease: FLUID_EASE }}
                    >
                        <SectionHeader
                            pretitle="DÓNDE Y CUÁNDO"
                            title="Ubicaciones"
                            align="center"
                            variant="uppercase"
                        />
                    </motion.div>

                    <div className="places-section__grid">

                        {placesConfig.locations.map((loc, idx) => (
                            <motion.div
                                key={idx}
                                className="places-item"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-10% 0px' }}
                                transition={{ duration: 1.2, delay: idx * 0.2, ease: FLUID_EASE }}
                            >
                                {loc.date && (
                                    <p className="places-item__date">
                                        {formatLocalDate(loc.date)}
                                    </p>
                                )}

                                {loc.time && (
                                    <p className="places-item__time">
                                        {loc.time}
                                    </p>
                                )}

                                <h3 className="places-item__title">{loc.title}</h3>

                                {loc.location && (
                                    <p className="places-item__address">{loc.location}</p>
                                )}

                                {loc.url && (
                                    <Button
                                        icon={<MapPinIcon size={22} weight='thin' />}
                                        variant="secondary"
                                        onClick={() => window.open(loc.url, '_blank')}
                                        className="places-item__button"
                                    >
                                        Ver ubicación
                                    </Button>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <div className="places-section__jarrones">
                        <img src={macetero} alt="macetero izquierdo" className="places-section__jarron places-section__jarron--left" />
                        <span className="places-section__jarron-line" />
                        <img src={macetero} alt="macetero derecho" className="places-section__jarron places-section__jarron--right" />
                    </div>
                </div>
            </section>
        </>
    )
}
