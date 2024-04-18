import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  annonces: [
    {
      id: 1,
      titre: 'Appartement à louer',
      description: 'Bel appartement lumineux avec vue sur la ville...',
      surface: 80,
      etage: 3,
      statut: 'Disponible',
      categorie: 'Appartements',
      typeAnnonce: 'Location',
      datepublication: '2022-03-15',
      datemodification: null,
      adresse: '10 Rue de la Liberté, France-Paris',
      prix: 1200, 
      image :  '/images/b60fe085-00d1-49c4-a0a6-0c4bed540880.jpeg'
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
      prix: 350000, 
      image: '/images/40 fachadas de casas de esquina para você se inspirar.jpeg'
    },
    {
      id: 3,
      titre: 'Villa avec jardin à vendre',
      description: 'Magnifique maison avec grand jardin et piscine...',
      surface: 200,
      etage: 2,
      statut: 'À vendre',
      categorie: 'Maisons',
      typeAnnonce: 'Vente',
      datepublication: '2022-03-20',
      datemodification: null,
      adresse: '25 Avenue des Champs-Élysées, Lyon',
      prix: 550000,
      image:'/images/79a76e71-f66e-4aae-ac66-88455cffeae8.jpeg'
    },
    {
      id: 4,
      titre: 'Studio meublé à louer',
      description: 'Studio entièrement meublé au cœur de la ville...',
      surface: 40,
      etage: 1,
      statut: 'Disponible',
      categorie: 'Appartements',
      typeAnnonce: 'Location',
      datepublication: '2022-04-05',
      datemodification: null,
      adresse: '5 Rue de la Paix, Marseille',
      prix: 800, 
      image: '/images/43de6527-a1ea-4c6d-ad19-a8ecee57d798.jpeg'
    },
    {
      id: 5,
      titre: 'Terrain constructible à vendre',
      description: 'Terrain plat idéal pour la construction d\'une maison...',
      surface: 500,
      etage: null,
      statut: 'À vendre',
      categorie: 'Terrains',
      typeAnnonce: 'Vente',
      datepublication: '2022-04-10',
      datemodification: null,
      adresse: 'Route de la Plage, Nice',
      prix: 150000, 
      image: '/images/Free Photo _ Land plot with nature landscape and location pin.jpeg'
    },
    {
      id: 6,
      titre: 'Bureau en location',
      description: 'Bureau moderne avec une vue panoramique sur la ville...',
      surface: 100,
      etage: 5,
      statut: 'Disponible',
      categorie: 'Bureaux',
      typeAnnonce: 'Location',
      datepublication: '2022-04-15',
      datemodification: null,
      adresse: '15 Rue du Commerce, Bordeaux',
      prix: 2000, 
      image: '/images/télécharger (9).jpeg'
    }
    
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
