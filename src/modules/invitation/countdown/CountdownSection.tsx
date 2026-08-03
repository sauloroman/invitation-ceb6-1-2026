import React from 'react'
import { motion } from 'framer-motion'
import { useInvitationConfig } from '@/common/hooks'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { Countdown } from '@/common/components/countdown/Countdown'
import bulbs from '@/assets/images/icons/focos.png'

const FLUID_EASE = [0.22, 1, 0.36, 1] as const

export const CountdownSection: React.FC = () => {
    const { sections } = useInvitationConfig()
    const countdownConfig = sections.countdown

    if (!countdownConfig?.showCountdown || !countdownConfig?.targetDate) {
        return null
    }

    return (
        <>
            <section id="countdown" className="countdown-section">
                <div className="countdown-section__container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 1.2, ease: FLUID_EASE }}
                    >
                        <SectionHeader
                            pretitle="CUENTA REGRESIVA"
                            title="Falta muy poco"
                            align="center"
                            variant="uppercase"
                        />
                    </motion.div>

                    <motion.div
                        className="countdown-section__content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 1.2, delay: 0.2, ease: FLUID_EASE }}
                    >
                        <Countdown
                            targetDate={countdownConfig.targetDate}
                            variant="minimal"
                        />
                    </motion.div>

                </div>
            </section>
            <img src={bulbs} alt="Holding Bulbs" />
        </>
    )
}
