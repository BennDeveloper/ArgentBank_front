import { configureStore } from "@reduxjs/toolkit"; // Importer la fonction configureStore depuis la bibliothèque Redux Toolkit pour configurer le store
import userReducer from './UserSlice'; 


// Configurer le store avec configureStore
const store = configureStore({
  reducer: {                   // objet qui contient la clé reducer, qui regroupe tous les reducers utilisés
    user: userReducer,         // définit une partie de l'état appelée "user" qui est gérée par le réducteur userReducer
  },
});

export default store; 