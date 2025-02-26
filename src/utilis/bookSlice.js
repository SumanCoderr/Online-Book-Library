import {createSlice} from "@reduxjs/toolkit"
import {BookData} from "./BookData"

const bookSlice = createSlice({
    name: "Book",
    initialState:{
        items: [...BookData ]
    },
    reducers:{
        addBook:(state, action) => {
            state.items.push(action.payload)
        }
    }
})

export const {addBook} = bookSlice.actions;
export default bookSlice.reducer;