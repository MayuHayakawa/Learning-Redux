import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
    "auth/createUser", 
    async(userData) => {
        const res = await axios.post(
            "https://gorest.co.in/public/v2/users",
            userData, // => {name: "", gender: "", email: "", status: ""}
            {
                headers:{
                    "Content-Type": "application/json",
                    Authorization: "Bearer 82312695823708a9a391f4469e0785acf1ebd28d3571e7002b8e138b8e4b1b02"
                }
            }
        );
        console.log(res);
        return res.data;
    }
)