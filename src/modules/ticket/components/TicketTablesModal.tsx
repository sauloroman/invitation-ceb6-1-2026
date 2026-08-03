import React from 'react'
import { Modal } from '@/common/components/modal/Modal'

export const TicketTablesModal: React.FC = () => {
    return (
        <Modal>
            <div className="ticket__tables-modal">
                <div className="ticket__tables-placeholder">
                    <p className="ticket__tables-placeholder-text">Aquí se mostrará el acomodo de las mesas</p>
                </div>
            </div>
        </Modal>
    )
}
