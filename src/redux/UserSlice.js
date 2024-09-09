import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const singinUser = createAsyncThunk(  // Création de la fonction asynchrone "signinUser" à l'aide de createAsyncThunk
  'user/singinUser', 
  async (userCredentials, { rejectWithValue }) => {  // Paramètres de la fonction: les informations de connexion et la méthode pour rejeter la valeur
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        return rejectWithValue(errorResponse.message || "Failed to login");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Network error");
    }
  }
);


const userSlice = createSlice({
  name: 'user',
  initialState: {   //État initial du slice
    loading: false,
    user: null,
    error: null,
  },
  reducers: {
     logout: (state) => {   // Réducteur pour déconnecter l'utilisateur
      state.user = null;
    }
  }, 
  extraReducers: (builder) => {   // Gestion des actions asynchrones supplémentaires (comme les promesses renvoyées par createAsyncThunk)
    builder
      .addCase(singinUser.pending, (state) => {  // Lorsque la fonction asynchrone est en attente
        state.loading = true;  
        state.error = null;  
      })
      .addCase(singinUser.fulfilled, (state, action) => {  // Lorsque la fonction asynchrone est réussie
        state.loading = false; 
        state.user = action.payload;  
      })
      .addCase(singinUser.rejected, (state, action) => {  // Lorsque la fonction asynchrone est rejetée
        state.loading = false;  
        state.error = action.payload || action.error.message; 
      });
  }
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;