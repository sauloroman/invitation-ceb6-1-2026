import React from 'react'
import { motion } from 'framer-motion'
import megafono from '@/assets/images/icons/megafono.svg'
import tendido from '@/assets/images/icons/tendido-2.svg'
import sillas from '@/assets/images/icons/sillas.svg'
import copas from '@/assets/images/icons/copas.svg'
import rsvpBg from '@/assets/images/backgrounds/rsvp.jpeg'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { useToast } from '@/common/hooks/useToast'

const FLUID_EASE = [0.22, 1, 0.36, 1] as const

export const RemindersSection: React.FC = () => {
    const { showSuccess } = useToast()

    const hashtag = '#CEB61Graduacion'

    const handleCopyHashtag = () => {
        navigator.clipboard.writeText(hashtag)
        showSuccess(`Hashtag ${hashtag} copiado al portapapeles`)
    }

    return (
        <section id="reminders" className="reminder-section">
            <div className="reminder-section__container">
                <motion.div
                    className="reminder-hero"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.2, ease: FLUID_EASE }}
                >
                    <SectionHeader
                        pretitle="NOTAS IMPORTANTES"
                        title="Recordatorios"
                        align="center"
                        variant="uppercase"
                    />
                </motion.div>

                <motion.div
                    className="reminder-illustration__wrapper"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.2, delay: 0.1, ease: FLUID_EASE }}
                >
                    <img
                        src={megafono}
                        alt="Recordatorios"
                        className="reminder-illustration"
                    />
                </motion.div>

                <div className="reminder-cards-container">
                    {/* Card 1: Comparte tus Fotos */}
                    <motion.div
                        className="reminder-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 1, delay: 0.2, ease: FLUID_EASE }}
                    >
                        <div className="reminder-item">
                            <div className="reminder-item__header">
                                <h3 className="reminder-item__title">Comparte tus Fotos</h3>
                            </div>

                            <p className="reminder-item__description">
                                ¡Queremos guardar los mejores momentos contigo! Sube tus fotos y videos a Instagram utilizando el hashtag oficial de nuestra graduación:
                            </p>

                            <div className="reminder-hashtag-card" style={{ backgroundImage: `url(${rsvpBg})` }}>
                                <div
                                    className="reminder-hashtag-inner"
                                    onClick={handleCopyHashtag}
                                    role="button"
                                    tabIndex={0}
                                    title="Haz clic para copiar hashtag"
                                >
                                    <span className="reminder-hashtag-tag">{hashtag}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Puntualidad & Recepción */}
                    <motion.div
                        className="reminder-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 1, delay: 0.3, ease: FLUID_EASE }}
                    >
                        <div className="reminder-item">
                            <div className="reminder-item__header">
                                <h3 className="reminder-item__title">Puntualidad & Recepción</h3>
                            </div>

                            <p className="reminder-item__description">
                                Les sugerimos amablemente llegar con 15 a 20 minutos de anticipación al inicio de la ceremonia religiosa y la recepción para ubicar su lugar con calma y disfrutar cada momento del programa.
                            </p>

                            <div className="reminder-card-footer-icon">
                                <img src={copas} alt="Copas" className="reminder-card-footer-icon__img" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Boleto Obligatorio */}
                    <motion.div
                        className="reminder-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 1, delay: 0.4, ease: FLUID_EASE }}
                    >
                        <div className="reminder-item">
                            <div className="reminder-item__header">
                                <h3 className="reminder-item__title">Boleto Obligatorio</h3>
                            </div>

                            <p className="reminder-item__description">
                                Es indispensable presentar sus boletos digitales en recepción al momento de ingresar al evento. Les pedimos presentarse con boleto en mano para agilizar su acceso al salón.
                            </p>

                            <div className="reminder-card-footer-icon">
                                <img src={sillas} alt="Sillas" className="reminder-card-footer-icon__img" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="reminder-tendido-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 1.2, delay: 0.3, ease: FLUID_EASE }}
            >
                <img src={tendido} alt="Tendido" className="reminder-tendido-full__img" />
            </motion.div>
        </section>
    )
}

