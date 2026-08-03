import React from 'react'
import { useMenu } from '@/common/hooks'

import { CountdownSection } from './countdown/CountdownSection'
import { DressCodeSection } from './dress-code/DressCodeSection'
import { HeroSection } from './hero/HeroSection'
import { ItinerarySection } from './itinerary/ItinerarySection'
import { MessageSection } from './message/Message'
import { PlacesSection } from './places/PlacesSection'
import { RsvpSection } from './rsvp/RsvpSection'
import { GraduatesSection } from './graduates/GraduatesSection'
import { RemindersSection } from './reminders/RemindersSection'

export const Invitation: React.FC = () => {
    const { activeVariant, isMenuVisible } = useMenu()

    const hasMenuBarClass = isMenuVisible && activeVariant === 'bar' ? 'invitation--has-menu-bar' : ''
    const containerClass = `invitation ${hasMenuBarClass}`.trim()

    return (
        <main className={containerClass}>
            <HeroSection />
            <CountdownSection />
            <MessageSection />
            <RsvpSection />
            <PlacesSection />
            <GraduatesSection />
            <DressCodeSection />
            <ItinerarySection />
            <RemindersSection />
        </main>
    )
}
