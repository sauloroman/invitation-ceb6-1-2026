import React from 'react'
import { motion } from 'framer-motion'
import megafono from '@/assets/images/icons/megafono.svg'
import tendido from '@/assets/images/icons/tendido-2.svg'
import macetero from '@/assets/images/icons/macetero.svg'
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

                <motion.div
                    className="reminder-card-main"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.2, delay: 0.2, ease: FLUID_EASE }}
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

                    <div className="reminder-divider" />

                    <div className="reminder-item">
                        <div className="reminder-item__header">
                            <h3 className="reminder-item__title">Puntualidad & Recepción</h3>
                        </div>

                        <p className="reminder-item__description">
                            Les sugerimos amablemente llegar con 15 a 20 minutos de anticipación al inicio de la ceremonia religiosa y la recepción para ubicar su lugar con calma y disfrutar cada momento del programa.
                        </p>
                    </div>

                    <div className="reminder-divider" />

                    <div className="reminder-item">
                        <div className="reminder-item__header">
                            <h3 className="reminder-item__title">Boleto Obligatorio</h3>
                        </div>

                        <p className="reminder-item__description">
                            Es indispensable presentar sus boletos digitales en recepción al momento de ingresar al evento. Les pedimos presentarse con boleto en mano para agilizar su acceso al salón.
                        </p>
                    </div>

                    <div className="reminder-card-footer-icon">
                        <img src={macetero} alt="Macetero" className="reminder-card-footer-icon__img" />
                    </div>
                </motion.div>
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

