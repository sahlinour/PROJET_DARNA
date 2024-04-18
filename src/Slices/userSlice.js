//slices/UserSlice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      Id: 1,
      Name: "reda",
      Date: new Date(),
      Genre: "homme",
      Ville: 1,
      Telephone: "09909090909",
      Email: "reda@gmail.com",
      Password: "123456",
      Role: "admin",
    }
  ]
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Adduser:(state,action)=>{
      state.users.push(action.payload)
    }
  }
});
export const {Adduser}=userSlice.actions;

export default userSlice.reducer;