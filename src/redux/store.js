import { configureStore } from "@reduxjs/toolkit";
import contactsReduser from "./reduser";

import logger from "redux-logger";

const store = configureStore({
    reducer: {
        items: contactsReduser,
    },
    middleware: [logger],
    devTools: process.env.NODE_ENV === "development",
});

export default store