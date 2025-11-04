import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReportFilter {
  label: string;
  value: number;
}

interface EnumsState {
  budgetTypes: string[];
  invoiceStatus: string[];
  hebrewYear: number[];
  reportFilters: ReportFilter[];
  [key: string]: any[]; // Allow arrays of any type
}

interface GlobalState {
  enums: EnumsState;
}

const initialState: GlobalState = {
  enums: {
    budgetTypes: [],
    invoiceStatus: [],
    hebrewYear: [],
    reportFilters: [
      { label: '', value: 0 },
      { label: 'יסודי', value: 1 },
      { label: 'חטיבה', value: 2 },
      { label: 'תיכון', value: 3 }
    ]
  }
};

interface SetDocumentPayload {
  key: keyof EnumsState;
  value: any[]; // Allow setting arrays of any type
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setGlobals(state, action: PayloadAction<SetDocumentPayload>) {
      if (state.enums[action.payload.key]) {
        state.enums[action.payload.key] = action.payload.value;
      }
    }
  }
});

export const globalAction = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
