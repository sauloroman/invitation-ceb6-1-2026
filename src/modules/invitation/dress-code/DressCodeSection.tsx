import React from 'react'
import { motion } from 'framer-motion'
import { useInvitationConfig } from '@/common/hooks'
import dressCodeIcon from '@/assets/images/icons/dress-code.svg'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'

const FLUID_EASE = [0.22, 1, 0.36, 1] as const

export const DressCodeSection: React.FC = () => {
    const { sections } = useInvitationConfig()
    const dressCodeConfig = sections.dressCode

    if (!dressCodeConfig?.showDressCode) {
        return null
    }

    const description = dressCodeConfig.description || 'Les pedimos amablemente vestir de etiqueta formal para acompañarnos en este día tan especial.'

    return (
        <section id="dress-code" className="dress-code-section">
            <div className="dress-code-section__container">
                <motion.div
                    className="dress-code-hero"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.2, ease: FLUID_EASE }}
                >
                    <SectionHeader
                        pretitle="SUGERENCIAS"
                        title="Código de Vestimenta"
                        align="center"
                        variant="uppercase"
                    />
                </motion.div>

                <motion.div
                    className="dress-code-illustration__wrapper"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.2, delay: 0.1, ease: FLUID_EASE }}
                >
                    <img
                        src={dressCodeIcon}
                        alt="Dress Code"
                        className="dress-code-illustration"
                    />
                </motion.div>

                <motion.div
                    className="dress-code-card-main"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.2, delay: 0.2, ease: FLUID_EASE }}
                >
                    <h3 className="dress-code-card-main__title">Etiqueta Formal</h3>

                    <p className="dress-code-card-main__description">
                        {description}
                    </p>

                    <p className="dress-code-card-main__note">
                        Traje oscuro o esmoquin para caballeros & vestido largo de gala para damas.
                    </p>

                    <div className="dress-code-palette">
                        <div className="dress-code-palette__swatches">
                            <div className="dress-code-swatch">
                                <span className="dress-code-swatch__circle dress-code-swatch__circle--sage" />
                                <span className="dress-code-swatch__label">SAGE GREEN</span>
                            </div>
                            <div className="dress-code-swatch">
                                <span className="dress-code-swatch__circle dress-code-swatch__circle--beige" />
                                <span className="dress-code-swatch__label">BEIGE</span>
                            </div>
                            <div className="dress-code-swatch">
                                <span className="dress-code-swatch__circle dress-code-swatch__circle--blue" />
                                <span className="dress-code-swatch__label">BABY BLUE</span>
                            </div>
                            <div className="dress-code-swatch">
                                <span className="dress-code-swatch__circle dress-code-swatch__circle--rose" />
                                <span className="dress-code-swatch__label">DUSTY ROSE</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
