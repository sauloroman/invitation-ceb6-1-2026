import React from 'react';
import { Drawer } from '@/common/components/drawer/Drawer';
import { Accordion } from '@/common/components/accordion/Accordion';
import { useGraduates } from '@/common/hooks';

export const IntervencionDrawer: React.FC = () => {
    const { getGraduatesByCareer } = useGraduates();
    const intervencionCareer = getGraduatesByCareer('intervencion');

    const accordionItems = intervencionCareer.salones.map((salon) => ({
        id: salon.name,
        title: salon.name,
        content: (
            <ul className="graduates-drawer__list">
                {salon.graduates.map((grad) => (
                    <li key={grad.id} className="graduates-drawer__item">
                        {grad.name}
                    </li>
                ))}
            </ul>
        )
    }));

    return (
        <Drawer>
            <span className="drawer-monogram" aria-hidden="true">I</span>

            <div className="drawer-career-card">
                <div className="drawer-career-card__headline">
                    <span className="drawer-career-card__headline-word">EGRESADOS</span>
                    <span className="drawer-career-card__headline-the">de</span>
                    <span className="drawer-career-card__headline-word">2026</span>
                </div>
                <p className="drawer-career-card__name">
                    Intervención en la<br />Educación
                </p>
                <p className="drawer-career-card__date">Generación 2023 – 2026</p>
            </div>

            <div className="graduates-drawer__body">
                {accordionItems.length > 0 ? (
                    <Accordion items={accordionItems} variant="separated" />
                ) : (
                    <p className="graduates-drawer__empty">Próximamente...</p>
                )}
            </div>

            <span className="drawer-monogram" aria-hidden="true">I</span>
        </Drawer>
    );
};
