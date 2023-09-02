import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../../models/Todo'
import { v4 as uuidv4 } from "uuid"

const localStorageTodos = window.localStorage.getItem('todos') ? JSON.parse(window.localStorage.getItem('todos')!) : []
const initialState = localStorageTodos as Todo[];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, action: PayloadAction<Todo>) => {
                state.push(action.payload)
                window.localStorage.setItem('todos', JSON.stringify(state))
            },
            prepare: (description: string) => ({
                payload: {
                    id: uuidv4(),
                    description,
                    completed: false,
                } as Todo,
            })
        },
        removeTodo(state, action: PayloadAction<string>) {
            const index = state.findIndex(todo => todo.id === action.payload)
            state.splice(index, 1);
            window.localStorage.setItem('todos', JSON.stringify(state))
        },
        setTodoStatus(
            state,
            action: PayloadAction<{completed: boolean, id: string}>
        ) {
            const index = state.findIndex((todo) => todo.id === action.payload.id)
            state[index].completed = action.payload.completed
            window.localStorage.setItem('todos', JSON.stringify(state))
        }
    }
})

export const { addTodo, removeTodo, setTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;
