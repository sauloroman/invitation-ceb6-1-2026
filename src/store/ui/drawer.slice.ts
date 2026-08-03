import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const DRAWER_NAMES = {
    none: 'none',
    tics: 'tics',
    administracion: 'administracion',
    intervencion: 'intervencion',
} as const;

export type DrawerName = typeof DRAWER_NAMES[keyof typeof DRAWER_NAMES];

interface DrawerState {
    isOpen: boolean;
    drawerTitle: string;
    drawerName: DrawerName;
}

const initialState: DrawerState = {
    isOpen: false,
    drawerTitle: '',
    drawerName: DRAWER_NAMES.none,
};

const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        openDrawer: (state, { payload }: PayloadAction<{ drawerTitle: string; drawerName: DrawerName }>) => {
            state.isOpen = true;
            state.drawerTitle = payload.drawerTitle;
            state.drawerName = payload.drawerName;
        },
        closeDrawer: (state) => {
            state.isOpen = false;
            state.drawerTitle = '';
            state.drawerName = DRAWER_NAMES.none;
        },
    }
});

export const { openDrawer, closeDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
