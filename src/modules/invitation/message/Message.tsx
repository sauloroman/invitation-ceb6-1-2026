import React from 'react'
import { motion } from 'framer-motion'
import { useInvitationConfig } from '@/common/hooks'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import table from '@/assets/images/icons/table.svg'

const FLUID_EASE = [0.22, 1, 0.36, 1] as const

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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.2, ease: FLUID_EASE }}
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.2, delay: 0.2, ease: FLUID_EASE }}
                >
                    <p className="message-section__text">
                        {messageToShow}
                    </p>
                </motion.div>

                <div className="message-section__table">
                    <img src={table} alt="Table" />
                </div>
            </div>
        </section>
    )
}
