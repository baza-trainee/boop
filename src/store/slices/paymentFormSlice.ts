import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface paymentFormState {
  selectedCurrency: string;
  selectedTypeOfDonate: string;
  donationAmount: string;
  isCustomDonate: boolean;
}

const initialState: paymentFormState = {
  selectedCurrency: 'UAH',
  selectedTypeOfDonate: 'every-month',
  donationAmount: '50',
  isCustomDonate: false,
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
    setIsCustomDonate(state, action: PayloadAction<boolean>) {
      state.isCustomDonate = action.payload;
    },
  },
});

export const {
  setSelectedCurrency,
  setSelectedTypeOfDonate,
  setDonationAmount,
  setIsCustomDonate,
} = paymentFormSlice.actions;

export default paymentFormSlice.reducer;
