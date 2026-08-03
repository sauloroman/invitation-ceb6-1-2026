import React from 'react'
import rsvpBg from '@/assets/images/backgrounds/rsvp.jpeg'
import { SearchForm } from '../search-form/SearchForm'

export const SearchCard: React.FC = () => {
    return (
        <div className="search-card" style={{ backgroundImage: `url(${rsvpBg})` }}>
            <div className="search-card__content">
                <SearchForm />
            </div>
        </div>
    )
}


