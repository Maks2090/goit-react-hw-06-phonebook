import * as actions from "./actions";
import { createReducer, combineReducers } from "@reduxjs/toolkit";

const contacts = createReducer(
    JSON.parse(localStorage.getItem("contacts")) ?? [],
    {
      [actions.deleteContact]: (state, { payload }) =>
        state.filter((contact) => contact.id !== payload.id),
  
      [actions.addContact]: (state, { payload }) => {
        const findContact = state.find((contact) => {
          return contact.name === payload.name;
        });
        return !findContact
          ? [payload, ...state]
          : alert(`${payload.name} is already in contact`);
      },
    }
  );
  
  const filter = createReducer("", {
    [actions.filterChange]: (_, { payload }) =>{ return payload},
  });


export default combineReducers({
    contacts,
    filter,
  });