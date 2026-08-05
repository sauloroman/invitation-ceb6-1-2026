import React from 'react'
import { motion } from 'framer-motion'
import megafono from '@/assets/images/icons/megafono.webp'
import tendido from '@/assets/images/icons/tendido-2.webp'
import sillas from '@/assets/images/icons/sillas.webp'
import copas from '@/assets/images/icons/copas.webp'
import rsvpBg from '@/assets/images/backgrounds/rsvp.jpeg'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { useToast } from '@/common/hooks/useToast'

const FLUID_EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const cardDirections = [
    { x: -40, y: 0 },
    { x: 40, y: 0 },
    { x: 0, y: 40 },
]

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
                    initial={{ opacity: 0, scale: 0.93, y: 25 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.1, delay: 0.2, ease: FLUID_EASE }}
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
                    initial={{ opacity: 0, rotate: -10, scale: 0.78 }}
                    whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.2, delay: 0.38, ease: FLUID_EASE }}
                >
                    <img
                        src={megafono}
                        alt="Recordatorios"
                        className="reminder-illustration"
                    />
                </motion.div>

                <div className="reminder-cards-container">
                    <motion.div
                        className="reminder-card"
                        initial={{ opacity: 0, x: cardDirections[0].x, y: cardDirections[0].y }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 1.0, delay: 0.4, ease: FLUID_EASE }}
                    >
                        <div className="reminder-item">
                            <div className="reminder-item__header">
                                <motion.h3
                                    className="reminder-item__title"
                                    initial={{ opacity: 0, y: -12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-10% 0px' }}
                                    transition={{ duration: 0.8, delay: 0.58, ease: FLUID_EASE }}
                                >
                                    Comparte tus Fotos
                                </motion.h3>
                            </div>

                            <motion.p
                                className="reminder-item__description"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: '-10% 0px' }}
                                transition={{ duration: 0.8, delay: 0.7, ease: FLUID_EASE }}
                            >
                                ¡Queremos guardar los mejores momentos contigo! Sube tus fotos y videos a Instagram utilizando el hashtag oficial de nuestra graduación:
                            </motion.p>

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

                    <motion.div
                        className="reminder-card"
                        initial={{ opacity: 0, x: cardDirections[1].x, y: cardDirections[1].y }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 1.0, delay: 0.52, ease: FLUID_EASE }}
                    >
                        <div className="reminder-item">
                            <div className="reminder-item__header">
                                <motion.h3
                                    className="reminder-item__title"
                                    initial={{ opacity: 0, y: -12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-10% 0px' }}
                                    transition={{ duration: 0.8, delay: 0.7, ease: FLUID_EASE }}
                                >
                                    Puntualidad & Recepción
                                </motion.h3>
                            </div>

                            <motion.p
                                className="reminder-item__description"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: '-10% 0px' }}
                                transition={{ duration: 0.8, delay: 0.82, ease: FLUID_EASE }}
                            >
                                Les sugerimos amablemente llegar con 15 a 20 minutos de anticipación al inicio de la ceremonia religiosa y la recepción para ubicar su lugar con calma y disfrutar cada momento del programa.
                            </motion.p>

                            <motion.div
                                className="reminder-card-footer-icon"
                                initial={{ opacity: 0, scale: 0.7 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: '-5% 0px' }}
                                transition={{ duration: 0.8, delay: 0.9, ease: FLUID_EASE }}
                            >
                                <img src={copas} alt="Copas" className="reminder-card-footer-icon__img" />
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="reminder-card"
                        initial={{ opacity: 0, x: cardDirections[2].x, y: cardDirections[2].y }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 1.0, delay: 0.64, ease: FLUID_EASE }}
                    >
                        <div className="reminder-item">
                            <div className="reminder-item__header">
                                <motion.h3
                                    className="reminder-item__title"
                                    initial={{ opacity: 0, y: -12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-10% 0px' }}
                                    transition={{ duration: 0.8, delay: 0.82, ease: FLUID_EASE }}
                                >
                                    Boleto Obligatorio
                                </motion.h3>
                            </div>

                            <motion.p
                                className="reminder-item__description"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: '-10% 0px' }}
                                transition={{ duration: 0.8, delay: 0.94, ease: FLUID_EASE }}
                            >
                                Es indispensable presentar sus boletos digitales en recepción al momento de ingresar al evento. Les pedimos presentarse con boleto en mano para agilizar su acceso al salón.
                            </motion.p>

                            <motion.div
                                className="reminder-card-footer-icon"
                                initial={{ opacity: 0, scale: 0.7 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: '-5% 0px' }}
                                transition={{ duration: 0.8, delay: 1.02, ease: FLUID_EASE }}
                            >
                                <img src={sillas} alt="Sillas" className="reminder-card-footer-icon__img" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="reminder-tendido-full"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5% 0px' }}
                transition={{ duration: 1.3, delay: 0.4, ease: FLUID_EASE }}
            >
                <img src={tendido} alt="Tendido" className="reminder-tendido-full__img" />
            </motion.div>
        </section>
    )
}
