import React from 'react'
import { ArmchairIcon } from '@phosphor-icons/react'
import { useModal } from '@/common/hooks/useModal'
import { MODAL_NAMES } from '@/store/ui/modal.slice'
import { Button } from '@/common/components/button/Button'

export const TicketButton: React.FC = () => {
    const { onOpenModal } = useModal()

    return (
        <div className="ticket__button">
            <Button
                variant='primary'
                onClick={() => onOpenModal(MODAL_NAMES.tables, 'Distribución de Mesas')}
            >
                <ArmchairIcon size={22} weight="bold" />
                Ver Mesas
            </Button>
        </div>
    )
}
