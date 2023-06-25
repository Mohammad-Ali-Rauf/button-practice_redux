import { createSlice } from '@reduxjs/toolkit';

const colors = ['red', 'green', 'yellow', 'gray', 'blue']

interface colorState {
  color: string;
}

const initialState = { color: colors[0] } as colorState;

const colorSlice = createSlice({
  name: 'changeColor',
  initialState,
  reducers: {
    changeColorAction: (state: colorState) => {
      const currentIndex = colors.indexOf(state.color);
      const nextIndex = (currentIndex + 1) % colors.length;
      state.color = colors[nextIndex];
    },
  },
});

export const { changeColorAction } = colorSlice.actions;
export default colorSlice.reducer;
