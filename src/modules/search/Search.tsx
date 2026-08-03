import React from 'react'
import { InfoIcon } from '@phosphor-icons/react'
import { useModal } from '@/common/hooks'
import { MODAL_NAMES } from '@/store/ui/modal.slice'
import { SearchForm } from './components/search-form/SearchForm'

export const Search: React.FC = () => {
    const { onOpenModal } = useModal()

    const handleOpenInfoModal = () => {
        onOpenModal(MODAL_NAMES.searchInfo, 'Información de Acceso')
    }

    return (
        <main className="search">
            <button
                type="button"
                className="search-fixed-info-btn"
                onClick={handleOpenInfoModal}
                aria-label="Información de clave de acceso"
            >
                <InfoIcon size={26} weight="thin" />
            </button>

            <div className="search__container">
                <header className="search-hero">
                    <span className="drawer-monogram" aria-hidden="true">
                        CEB 6/1
                    </span>
                </header>

                <SearchForm />

                <footer className="search-footer-info">
                    <span className="search-footer-info__date">GENERACIÓN 2023 – 2026</span>
                    <span className="search-footer-info__detail">7 DE AGOSTO DE 2026</span>
                </footer>
            </div>
        </main>
    )
}







