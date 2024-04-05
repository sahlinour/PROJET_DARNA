import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  villes: [
    { 
        id: 1, 
        nom: 'Paris' 
    },
    { 
        id: 2, 
        nom: 'Lyon' 
    },
    { 
        id: 3, 
        nom: 'Marseille' 
    },
  ]
};

const villesSlice = createSlice({
  name: 'villes',
  initialState,
  reducers: {
    // Ajoutez des reducers ici si nécessaire
  }
});

export const { } = villesSlice.actions;

export default villesSlice.reducer;
