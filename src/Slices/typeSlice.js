import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
     types :[
        {
          id: 1,
          nom: 'Vente'
        },
        {
          id: 2,
          nom: 'Location'
        },
        // Ajoutez d'autres types si nécessaire
      ]
      
      
  };

  const typeSlice = createSlice({
      name: 'types',
      initialState,
      reducers: {
          
      }
  })
  export default typeSlice.reducer;