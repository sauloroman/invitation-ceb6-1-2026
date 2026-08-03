import React from 'react';
import { useDrawer } from '@/common/hooks';
import { DRAWER_NAMES } from '@/store/ui/drawer.slice';
import { TicsDrawer } from '@/modules/invitation/graduates/components/TicsDrawer';
import { AdministracionDrawer } from '@/modules/invitation/graduates/components/AdministracionDrawer';
import { IntervencionDrawer } from '@/modules/invitation/graduates/components/IntervencionDrawer';

export const DrawerMaster: React.FC = () => {
    const { isOpen, drawerName } = useDrawer();

    if (!isOpen) return null;

    return (
        <>
            {drawerName === DRAWER_NAMES.tics && <TicsDrawer />}
            {drawerName === DRAWER_NAMES.administracion && <AdministracionDrawer />}
            {drawerName === DRAWER_NAMES.intervencion && <IntervencionDrawer />}
        </>
    );
};
