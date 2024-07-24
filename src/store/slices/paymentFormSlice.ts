import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface paymentFormState {
  selectedCurrency: string;
  selectedTypeOfDonate: string;
  donationAmount: string;
}

const initialState: paymentFormState = {
  selectedCurrency: 'uah',
  selectedTypeOfDonate: 'every-month',
  donationAmount: '50',
};

const paymentFormSlice = createSlice({
  name: 'payment form',
  initialState,
  reducers: {
    setSelectedCurrency(state, action: PayloadAction<string>) {
      state.selectedCurrency = action.payload;
    },
    setSelectedTypeOfDonate(state, action: PayloadAction<string>) {
      state.selectedTypeOfDonate = action.payload;
    },
    setDonationAmount(state, action: PayloadAction<string>) {
      state.donationAmount = action.payload;
    },
  },
});

export const {
  setSelectedCurrency,
  setSelectedTypeOfDonate,
  setDonationAmount,
} = paymentFormSlice.actions;

export default paymentFormSlice.reducer;
