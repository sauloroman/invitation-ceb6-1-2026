import React from 'react'
import { MagnifyingGlassIcon } from '@phosphor-icons/react'
import { Button } from '@/common/components/button/Button'

export const SearchForm: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form__field">
                <label htmlFor="clave-de-acceso" className="search-form__label">
                    Ingresa tu clave de acceso
                </label>

                <input
                    type="text"
                    className="search-form__input"
                    id="clave-de-acceso"
                    placeholder="Ej: abc123"
                    autoComplete="off"
                />

                <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    size="lg"
                    radius="full"
                    icon={<MagnifyingGlassIcon size={18} weight="bold" />}
                    aria-label="Buscar invitación"
                >
                    BUSCAR INVITACIÓN
                </Button>
            </div>
        </form>
    )
}
