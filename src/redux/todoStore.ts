import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todosSlice";

const todoStore= configureStore({
    reducer: {
        todo: todoReducer
    }
})

export type RootState = ReturnType<typeof todoStore.getState>
export type AppDispatch = typeof todoStore.dispatch

export default todoStore