import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Thunk لجلب بيانات المستخدم
export const getUserData = createAsyncThunk(
  'user/getUserData',
  async (token, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        return rejectWithValue(errorResponse.message || "Failed to fetch user data");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Network error");
    }
  }
);

// Thunk لتحديث بيانات المستخدم
export const updateUserData = createAsyncThunk(
  'user/updateUserData',
  async ({ token, userName }, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ userName }), // إرسال الاسم الجديد فقط
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        return rejectWithValue(errorResponse.message || "Failed to update user data");
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
  initialState: {
    loading: false,
    error: null,
    userName: null,
    firstName: null,
    lastName: null,
    isEditing: false,
  },
  reducers: {
    onIsEditing: (state) => {
      state.isEditing = !state.isEditing;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.userName = action.payload.body.userName;
        state.lastName = action.payload.body.lastName;
        state.firstName = action.payload.body.firstName;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(updateUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.userName = action.payload.body.userName; // تحديث الاسم بعد الحفظ
        state.isEditing = false; // إغلاق وضع التعديل
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  }
});

export const { onIsEditing } = userSlice.actions;
export default userSlice.reducer;