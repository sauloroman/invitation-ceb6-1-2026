import React from 'react'

import { useModal } from '@/common/hooks'
import { MODAL_NAMES } from '@/store/ui/modal.slice'
import { SearchModal } from '@/modules/search/components/search-modal/SearchModal'

export const ModalMaster: React.FC = () => {
    const { isOpen, modalName } = useModal()

    return (
        <>
            {isOpen && modalName === MODAL_NAMES.none && <>Ejemplo de modal</>}
            {isOpen && modalName === MODAL_NAMES.searchInfo && <SearchModal />}
        </>
    )
}
