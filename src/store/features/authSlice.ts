import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type AuthStateType = {
  access: string;
  refresh: string;
  userId: number | null;
  user: string;
};
function getDataLocalStorage(): AuthStateType | null {
  try {
    const { access, refresh, user, userId } = JSON.parse(
      localStorage.getItem("auth") ?? ""
    );
    return {
      access,
      refresh,
      userId,
      user,
    };
  } catch {
    return null;
  }
}

const initialState: AuthStateType = {
  access: "",
  refresh: "",
  userId: null,
  user: "",
};
const initialStateOrLocalStorage: AuthStateType =
  getDataLocalStorage() || initialState;
const authSlice = createSlice({
  name: "auth",
  initialState : initialStateOrLocalStorage,
  reducers: {
    setAuthState: (state, action: PayloadAction<AuthStateType>) => {
      const { access, refresh, user, userId } = action.payload;
      state.access = access;
      state.refresh = refresh;
      state.userId = userId;
      state.user = user;
      localStorage.setItem("auth", JSON.stringify(action.payload));
    },
  },
});

export const { setAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;
