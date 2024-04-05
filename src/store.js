import { configureStore } from "@reduxjs/toolkit";
import villeSlice from "./Slices/villeSlice";
import typeSlice from "./Slices/typeSlice";
import categorieSlice from "./Slices/categorieSlice";
import annonceSlice from "./Slices/annonceSlice";

const store = configureStore({
    reducer:{
        ville : villeSlice,
        type : typeSlice,
        categorie : categorieSlice,
        annonce: annonceSlice 
    }
})
export default store;