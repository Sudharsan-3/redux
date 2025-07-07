import { createSlice } from "@reduxjs/toolkit";
import { valueOrDefault } from "chart.js/helpers";

createSlice({
    name:'counter',
    initialState : valueOrDefault
})