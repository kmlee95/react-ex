import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
    render(){
        const { todos, onToggle, onRemove } = this.props;
        //map을 이용해 todo로 받아 값을 넣어줌.
        const todoList = todos.map(
            todo => (
                <TodoItem
                    key={todo.id}
                    done={todo.done}
                    onToggle={()=>onToggle(todo.id)}
                    onRemove={()=>onRemove(todo.id)}>
                    {todo.text}
                </TodoItem>
            )
        );
        return(
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoList;