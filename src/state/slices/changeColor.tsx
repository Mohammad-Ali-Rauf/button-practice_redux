import { createSlice } from '@reduxjs/toolkit';

const colors = [
  'red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown',
  'black', 'white', 'gray', 'silver', 'gold', 'cyan', 'magenta', 'lime',
  'olive', 'maroon', 'navy', 'teal', 'coral', 'indigo', 'salmon', 'turquoise',
  'violet', 'aqua', 'beige', 'chartreuse', 'crimson', 'fuchsia', 'lavender',
  'navajo white', 'orchid', 'peru', 'plum', 'sienna', 'sky blue', 'tan',
  'thistle', 'wheat', 'khaki', 'rosy brown'
];

interface colorState {
  color: string;
  colors: string[]
}

const initialState = { color: colors[0], colors: colors } as colorState;

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
