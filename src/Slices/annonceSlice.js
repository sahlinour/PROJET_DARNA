import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  annonces: [
    {
      id: 1,
      titre: 'Appartement lumineux à louer',
      description: 'Bel appartement lumineux avec vue sur la ville...',
      surface: 80,
      etage: 3,
      statut: 'Disponible',
      categorie: 'Appartements',
      typeAnnonce: 'Location',
      datepublication: '2022-03-15',
      datemodification: null,
      adresse: '10 Rue de la Liberté, Paris',
      prix: 1200
    },
    {
      id: 2,
      titre: 'Maison avec jardin à vendre',
      description: 'Magnifique maison avec grand jardin et piscine...',
      surface: 200,
      etage: 2,
      statut: 'À vendre',
      categorie: 'Maisons',
      typeAnnonce: 'Vente',
      datepublication: '2022-03-20',
      datemodification: null,
      adresse: '25 Avenue des Champs-Élysées, Lyon',
      prix: 350000
    },
    // Ajoutez d'autres annonces si nécessaire
  ]
};

const annoncesSlice = createSlice({
  name: 'annonces',
  initialState,
  reducers: {
    // Ajoutez des reducers ici si nécessaire
  }
});

export const { } = annoncesSlice.actions;

export default annoncesSlice.reducer;
