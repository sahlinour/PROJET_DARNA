import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    categories: [
      {
        id: 1,
        nom: 'Appartements'
      },
      {
        id: 2,
        nom: 'Maisons'
      },
      {
        id: 3,
        nom: 'Villas'
      },
      {
        id: 4,
        nom: 'Terrains'
      },
      {
        id: 5,
        nom: 'Bureaux'
      },
      // Ajoutez d'autres catégories si nécessaire
    ]
  };

  const categorieSlice = createSlice({
      name: 'categories',
      initialState,
      reducers: {
          
      }
  })
  export default categorieSlice.reducer;