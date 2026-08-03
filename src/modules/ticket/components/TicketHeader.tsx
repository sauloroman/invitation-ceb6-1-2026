import React from 'react'
import { CalendarBlankIcon, MapPinIcon } from '@phosphor-icons/react'
import { useInvitationConfig } from '@/common/hooks'

export const TicketHeader: React.FC = () => {
    const { sections } = useInvitationConfig()
    const heroConfig = sections.hero
    const placesConfig = sections.places

    const eventSubtitle = 'Nuestra Graduación'
    const coupleNames = heroConfig?.names ?? 'CEB 6/1'
    const eventDate = heroConfig?.date ? `${heroConfig.date} — 21:00 HRS` : '7 DE AGOSTO DE 2026 — 21:00 HRS'

    const receptionLocation = placesConfig?.locations?.find(
        loc => loc.title?.toLowerCase().includes('recepción') || loc.title?.toLowerCase().includes('fiesta')
    )
    const placeTitle = receptionLocation?.title ?? 'Salón Hopaliz'
    const placeAddress = receptionLocation?.location ?? 'Blvd. San Marcos #109 Capital City, 20207 Aguascalientes, Ags.'

    return (
        <header className="ticket__header">
            <div className="ticket__event-title">
                <span className="ticket__event-subtitle">{eventSubtitle}</span>
                <h2 className="ticket__couple-names">{coupleNames}</h2>
            </div>

            <div className="ticket__event-details">
                <div className="ticket__detail-item">
                    <CalendarBlankIcon className="ticket__detail-icon" size={24} weight="thin" />
                    <div className="ticket__detail-text">
                        <span className="ticket__detail-label">Fecha</span>
                        <span className="ticket__detail-value">{eventDate}</span>
                    </div>
                </div>

                <div className="ticket__detail-item">
                    <MapPinIcon className="ticket__detail-icon" size={24} weight="thin" />
                    <div className="ticket__detail-text">
                        <span className="ticket__detail-label">Recepción</span>
                        <span className="ticket__detail-value">{placeTitle}</span>
                        <span className="ticket__detail-subvalue">{placeAddress}</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
