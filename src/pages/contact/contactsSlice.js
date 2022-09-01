import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (state, { payload }) => {
      state.contacts = payload;
    },
  },
});

const { reducer, actions } = contactsSlice;

export const { setContacts } = actions;

export default reducer;
