import { configureStore } from "@reduxjs/toolkit";

import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
const sore = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice
  },
});
export default sore;
