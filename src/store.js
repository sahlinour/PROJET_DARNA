import { configureStore } from "@reduxjs/toolkit";
import villeSlice from "./Slices/villeSlice";
import typeSlice from "./Slices/typeSlice";
import categorieSlice from "./Slices/categorieSlice";
import annonceSlice from "./Slices/annonceSlice";
import userSlice from "./Slices/userSlice";

const store = configureStore({
    reducer:{
        ville : villeSlice,
        type : typeSlice,
        categorie : categorieSlice,
        annonce: annonceSlice ,
        user : userSlice
    }
})
export default store;