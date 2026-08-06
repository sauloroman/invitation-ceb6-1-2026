import React from 'react'
import { Modal } from '@/common/components/modal/Modal'
import { useTicket } from '@/common/hooks/useTicket'
import mesasImage from '@/assets/images/mesas.png'

export const TicketTablesModal: React.FC = () => {
    const { ticket } = useTicket()
    const tableInfo = ticket?.table || 'No asignada'
    const guestName = ticket?.name || ''

    return (
        <Modal size="lg">
            <div className="ticket__tables-modal" style={{ flexDirection: 'column', gap: '1.5rem', width: '100%', alignItems: 'center' }}>
                <a
                    href={mesasImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'block', width: '100%', maxWidth: '500px', cursor: 'zoom-in' }}
                >
                    <img
                        src={mesasImage}
                        alt="Distribución de mesas"
                        className="ticket__tables-modal-image"
                    />
                </a>
                <p style={{ fontSize: '0.85rem', color: '#6b7280', margin: '0', textAlign: 'center', fontFamily: 'sans-serif' }}>
                    💡 Haz clic o toca el mapa para abrirlo en tamaño completo y poder hacer zoom.
                </p>

                {ticket && (
                    <div className="ticket__table-card" style={{ width: '100%', maxWidth: '500px', borderRadius: '8px' }}>
                        <span className="ticket__table-label">Mesa reservada para:</span>
                        <span style={{ fontSize: '1.25rem', fontWeight: 600, color: '#191D39', fontFamily: 'var(--font-serif)', textAlign: 'center', marginBottom: '0.4rem', marginTop: '0.2rem' }}>
                            {guestName}
                        </span>
                        <span className="ticket__table-label" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.08)', width: '100%', textAlign: 'center', paddingTop: '0.6rem', marginTop: '0.4rem' }}>
                            Mesa Asignada
                        </span>
                        <span className="ticket__table-value" style={{ fontSize: '2.2rem', color: '#D4AF37', textShadow: '0px 1px 1px rgba(0,0,0,0.1)' }}>
                            {tableInfo}
                        </span>
                    </div>
                )}
            </div>
        </Modal>
    )
}


