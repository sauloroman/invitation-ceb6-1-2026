import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { useInvitationConfig } from '@/common/hooks'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import table from '@/assets/images/icons/table.webp'

const FLUID_EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.22,
            delayChildren: 0.35,
        },
    },
}

const textLineVariants: Variants = {
    hidden: { opacity: 0, x: -18 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.9, ease: FLUID_EASE },
    },
}

export const MessageSection: React.FC = () => {
    const { sections } = useInvitationConfig()
    const messageConfig = sections.message as { showMessage?: boolean; message?: string } | undefined

    if (!messageConfig?.showMessage) {
        return null
    }

    const defaultGraduationMessage = "Hay momentos en la vida que son inolvidables, y compartirlos con las personas que más queremos los hace aún más especiales. Te invitamos a acompañarnos en esta gran noche de gala, donde celebraremos el esfuerzo, la dedicación y el inicio de un nuevo camino lleno de éxitos."

    const configMessage = messageConfig?.message
    const messageToShow = (!configMessage || configMessage.includes('amor que nos une'))
        ? defaultGraduationMessage
        : configMessage

    return (
        <section id="message" className="message-section">
            <div className="message-section__container">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.1, delay: 0.2, ease: FLUID_EASE }}
                >
                    <SectionHeader
                        pretitle="NUESTRA GRADUACIÓN"
                        title="Un gran paso"
                        align="center"
                        variant="uppercase"
                    />
                </motion.div>

                <motion.div
                    className="message-section__content"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-10% 0px' }}
                >
                    <motion.span
                        className="message-section__quote message-section__quote--open"
                        variants={textLineVariants}
                        aria-hidden="true"
                    >
                        "
                    </motion.span>

                    <motion.p
                        className="message-section__text"
                        variants={textLineVariants}
                    >
                        {messageToShow}
                    </motion.p>

                    <motion.span
                        className="message-section__quote message-section__quote--close"
                        variants={textLineVariants}
                        aria-hidden="true"
                    >
                        "
                    </motion.span>
                </motion.div>

                <motion.div
                    className="message-section__table"
                    initial={{ opacity: 0, y: 25, scale: 0.94 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-5% 0px' }}
                    transition={{ duration: 1.2, delay: 0.5, ease: FLUID_EASE }}
                >
                    <img src={table} alt="Table" />
                </motion.div>
            </div>
        </section>
    )
}
