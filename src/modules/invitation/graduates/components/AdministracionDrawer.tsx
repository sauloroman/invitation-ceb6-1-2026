import React from 'react';
import { Drawer } from '@/common/components/drawer/Drawer';
import { Accordion } from '@/common/components/accordion/Accordion';
import { useGraduates } from '@/common/hooks';

export const AdministracionDrawer: React.FC = () => {
    const { getGraduatesByCareer } = useGraduates();
    const adminCareer = getGraduatesByCareer('administracion');

    const accordionItems = adminCareer.salones.map((salon) => ({
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
            <span className="drawer-monogram" aria-hidden="true">A</span>

            <div className="drawer-career-card">
                <div className="drawer-career-card__headline">
                    <span className="drawer-career-card__headline-word">EGRESADOS</span>
                    <span className="drawer-career-card__headline-the">de</span>
                    <span className="drawer-career-card__headline-word">2026</span>
                </div>
                <p className="drawer-career-card__name">Administración</p>
                <p className="drawer-career-card__date">Generación 2023 – 2026</p>
            </div>

            <div className="graduates-drawer__body">
                {accordionItems.length > 0 ? (
                    <Accordion items={accordionItems} variant="separated" />
                ) : (
                    <p className="graduates-drawer__empty">Próximamente...</p>
                )}
            </div>

            <span className="drawer-monogram" aria-hidden="true">A</span>
        </Drawer>
    );
};
