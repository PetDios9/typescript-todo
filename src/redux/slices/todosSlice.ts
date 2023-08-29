import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
    id: number,
    todoText: string
}

export interface TodosState {
  todos: object[]
}

const initialState: TodosState = {
  todos: [],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todoItem: Todo = {
        id: Math.random() * 10000,
        todoText: <string>action.payload
      }
      state.todos.push(todoItem)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo } = todosSlice.actions

export default todosSlice.reducer