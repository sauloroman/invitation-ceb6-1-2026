import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { useInvitationConfig } from '@/common/hooks'
import dressCodeIcon from '@/assets/images/icons/dress-code.webp'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'

const FLUID_EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const swatchContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.35,
        },
    },
}

const swatchVariants: Variants = {
    hidden: { opacity: 0, scale: 0.6, y: 15 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.7, ease: FLUID_EASE },
    },
}

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
                    initial={{ opacity: 0, x: -35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.1, delay: 0.2, ease: FLUID_EASE }}
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
                    initial={{ opacity: 0, rotate: 6, scale: 0.82 }}
                    whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.2, delay: 0.38, ease: FLUID_EASE }}
                >
                    <img
                        src={dressCodeIcon}
                        alt="Dress Code"
                        className="dress-code-illustration"
                    />
                </motion.div>

                <motion.div
                    className="dress-code-card-main"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.2, delay: 0.45, ease: FLUID_EASE }}
                >
                    <motion.h3
                        className="dress-code-card-main__title"
                        initial={{ opacity: 0, y: -18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 0.9, delay: 0.6, ease: FLUID_EASE }}
                    >
                        Etiqueta Formal
                    </motion.h3>

                    <motion.p
                        className="dress-code-card-main__description"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 0.9, delay: 0.72, ease: FLUID_EASE }}
                    >
                        {description}
                    </motion.p>

                    <motion.p
                        className="dress-code-card-main__note"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 0.9, delay: 0.84, ease: FLUID_EASE }}
                    >
                        Traje oscuro o esmoquin para caballeros & vestido largo de gala para damas.
                    </motion.p>

                    <div className="dress-code-palette">
                        <motion.div
                            className="dress-code-palette__swatches"
                            variants={swatchContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-10% 0px' }}
                        >
                            <motion.div className="dress-code-swatch" variants={swatchVariants}>
                                <span className="dress-code-swatch__circle dress-code-swatch__circle--sage" />
                                <span className="dress-code-swatch__label">SAGE GREEN</span>
                            </motion.div>
                            <motion.div className="dress-code-swatch" variants={swatchVariants}>
                                <span className="dress-code-swatch__circle dress-code-swatch__circle--beige" />
                                <span className="dress-code-swatch__label">BEIGE</span>
                            </motion.div>
                            <motion.div className="dress-code-swatch" variants={swatchVariants}>
                                <span className="dress-code-swatch__circle dress-code-swatch__circle--blue" />
                                <span className="dress-code-swatch__label">BABY BLUE</span>
                            </motion.div>
                            <motion.div className="dress-code-swatch" variants={swatchVariants}>
                                <span className="dress-code-swatch__circle dress-code-swatch__circle--rose" />
                                <span className="dress-code-swatch__label">DUSTY ROSE</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
