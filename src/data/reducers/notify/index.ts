import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  hireMe?: {
    payload: any;
    response: any;
    loading: boolean;
    error: boolean;
  };
  contactMe?: {
    payload: any;
    response: any;
    loading: boolean;
    error: boolean;
  };
}

const initialState: CounterState = {};

export const notifySlice = createSlice({
  name: "notify",
  initialState,
  reducers: {
    notifyMe: (state, action: PayloadAction<any>) => {
    },
    saveNotifyResponse: (state, action: PayloadAction<any>) => {
    },
    notifyError: (state, action: PayloadAction<any>) => { },
  },
});

// Action creators are generated for each case reducer function
export const { notifyMe, saveNotifyResponse, notifyError } = notifySlice.actions;

export default notifySlice.reducer;
