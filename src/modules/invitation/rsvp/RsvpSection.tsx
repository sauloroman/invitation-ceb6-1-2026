import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useTicket, useInvitationConfig } from '@/common/hooks'
import { Button } from '@/common/components/button/Button'
import { LinkIcon } from '@phosphor-icons/react'
import bg from '@/assets/images/backgrounds/rsvp.jpeg'
import sello from '@/assets/images/icons/sello.svg'

const FLUID_EASE = [0.22, 1, 0.36, 1] as const

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
                <motion.div
                    className="rsvp__content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.2, ease: FLUID_EASE }}
                >
                    <div className="rsvp__sello-container">
                        <img src={sello} alt="Sello" className="rsvp__sello" />
                    </div>

                    <h3 className="rsvp__title-cursive">RSVP</h3>

                    <p className="rsvp__date-tag">{eventDate}</p>

                    <h2 className="rsvp__guest-name-cursive">{guestName}</h2>

                    <p className="rsvp__message-text">
                        Tu esfuerzo y dedicación han sido fuente de inspiración para todos nosotros. Te invitamos a celebrar este gran logro y compartir una noche inolvidable con nosotros.
                    </p>

                    <p className="rsvp__location-tag">AGUASCALIENTES, AGS.</p>

                    <Button
                        icon={<LinkIcon size={22} weight="thin" />}
                        variant="outline"
                        onClick={() => navigate('/ticket')}
                        className="rsvp__button-classic"
                    >
                        Ver mis boletos
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}

