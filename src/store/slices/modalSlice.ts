import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  type: string | null;
  isModalOpen: boolean;
}

const initialState: ModalState = {
  type: null,
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<{ type: string }>) {
      state.isModalOpen = true;
      state.type = action.payload.type;
    },
    closeModal(state) {
      state.isModalOpen = false;
      state.type = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
