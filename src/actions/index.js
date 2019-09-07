import { todosRef } from '../firebase';
export const FETCH_TODOS = 'FETCH_TODOS';

export const addTodo = newTodo => async dispatch => {
    todosRef.push().set(newTodo);
}

export const completeTodo = completeTodo => async dispatch => {
    todosRef.child(completeTodo).remove();
}

export const fetchTodos = ()=> async dispatch => {
    todosRef.on("value", snapshot => {
        dispatch({
            type: FETCH_TODOS,
            payload: snapshot.val()
        })
    })
}