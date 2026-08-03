import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useTicket, useInvitationConfig } from '@/common/hooks'
import { LinkIcon } from '@phosphor-icons/react'
import bg from '@/assets/images/backgrounds/rsvp.jpeg'
import sello from '@/assets/images/icons/sello.svg'

const FLUID_EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export const RsvpSection: React.FC = () => {
    const navigate = useNavigate()
    const { ticket } = useTicket()
    const { sections } = useInvitationConfig()

    const guestName = ticket?.name || 'Invitado Especial'
    const eventDate = sections.hero?.date || '7 DE AGOSTO DE 2026'

    return (
        <section id="rsvp" className="rsvp">
            <div className="rsvp__bg" style={{ backgroundImage: `url(${bg})` }}></div>
            <div className="rsvp__container">
                <div className="rsvp__content">
                    <motion.div
                        className="rsvp__sello-container"
                        initial={{ opacity: 0, rotate: -15, scale: 0.7 }}
                        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 1.2, delay: 0.2, ease: FLUID_EASE }}
                    >
                        <img src={sello} alt="Sello" className="rsvp__sello" />
                    </motion.div>

                    <motion.h3
                        className="rsvp__title-cursive"
                        initial={{ opacity: 0, y: -25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 1.0, delay: 0.38, ease: FLUID_EASE }}
                    >
                        RSVP
                    </motion.h3>

                    <motion.p
                        className="rsvp__date-tag"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 0.9, delay: 0.52, ease: FLUID_EASE }}
                    >
                        {eventDate}
                    </motion.p>

                    <motion.h2
                        className="rsvp__guest-name-cursive"
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 1.1, delay: 0.64, ease: FLUID_EASE }}
                    >
                        {guestName}
                    </motion.h2>

                    <motion.p
                        className="rsvp__message-text"
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 1.0, delay: 0.76, ease: FLUID_EASE }}
                    >
                        Tu esfuerzo y dedicación han sido fuente de inspiración para todos nosotros. Te invitamos a celebrar este gran logro y compartir una noche inolvidable con nosotros.
                    </motion.p>

                    <motion.p
                        className="rsvp__location-tag"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 0.9, delay: 0.88, ease: FLUID_EASE }}
                    >
                        AGUASCALIENTES, AGS.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 0.9, delay: 1.0, ease: FLUID_EASE }}
                        className="rsvp__ticket-btn-wrapper"
                    >
                        <motion.button
                            className="rsvp__ticket-btn"
                            onClick={() => navigate('/ticket')}
                            animate={{ scale: [1, 1.035, 1] }}
                            transition={{
                                duration: 2.2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            whileTap={{ scale: 0.96 }}
                        >
                            <span className="rsvp__ticket-btn__shimmer" />
                            <LinkIcon size={20} weight="thin" className="rsvp__ticket-btn__icon" />
                            <span className="rsvp__ticket-btn__label">Ver mis boletos</span>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
