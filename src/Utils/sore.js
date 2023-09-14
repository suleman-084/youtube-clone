import { configureStore } from "@reduxjs/toolkit";

import appSlice from "./appSlice";
const sore = configureStore({
  reducer: {
    app: appSlice,
  },
});
export default sore;
