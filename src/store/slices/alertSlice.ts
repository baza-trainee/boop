import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TAlertInfoState } from '@/components/admin/shared/AlertWindow';

export type TAlertInfo = null | TAlertInfoState;

export interface AlertState {
  alertInfo: TAlertInfo;
}

const initialState: AlertState = {
  alertInfo: null,
};

const alertSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    openAlert(state, action: PayloadAction<{ data: TAlertInfo }>) {
      state.alertInfo = action.payload.data;
    },
    closeAlert(state) {
      state.alertInfo = null;
    },
  },
});

export const { openAlert, closeAlert } = alertSlice.actions;

export default alertSlice.reducer;
