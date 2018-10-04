import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component{
    state = {
        input: '',//input 값
        //일정 데이터 초기값
        todos: [
            { id:0, text: '리액트 공부하기', done : true},
            { id:1, text: '컴포턴트 스타일링 해보기', done : false }
        ]
    }

    id = 1
    getId = ()=>{
        return ++this.id;
    }
    handleChange = (e) =>{
        const {value} = e.target;
        this.setState({
            input: value
        });
    }
    handleInsert = () => {
        const { todos, input } = this.state;
        const newTodo = {
            text : input,
            done : false,
            id : this.getId()
        };
        this.setState({
            todos : [...todos, newTodo], //...todos 는 이전의 리스트목록 가져옴.
            input:''
        });
    }
    handleToggle = (id) =>{
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        const toggled = {
            ...todos[index],
            done : !todos[index].done
        };
        this.setState({
            todos: [...todos.slice(0,index), toggled, ...todos.slice(index+1, todos.length)]
        });
    }
    handleRemove = (id) =>{
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);//어떤걸 선택했는지 index로 ..
        this.setState({
            todos:[ ...todos.slice(0, index), ...todos.slice(index+1, todos.length)]
        });
    }
    render(){
        const { input , todos } = this.state;
        const { handleChange, handleInsert, handleToggle, handleRemove } = this; // 아래에 this.handleChange처럼 계속 반복해서 안쓰기 위해
        return(
           <PageTemplate>
               <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/> 
               <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
           </PageTemplate>
        );
    }
}

export default App;