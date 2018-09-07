import React, {Component} from 'react';

class IterationSample extends Component{
    state = {
        names : ['눈사람', '얼음', '눈', '바람'],
        name : ''
    };

    handleChange = (e)=>{
        this.setState({
            name: e.target.value
        });
    }
    handleInsert = ()=>{
        //name 배열에 값을 추가, name값을 초기화
        this.setState({
            names: this.state.names.concat(this.state.name),
            name: ''
        })
    }    
    render(){
        const nameList = this.state.names.map(
            (name, index) => (<li key={index}>{name}</li>)
        );//map은 반복되는 컴포넌트 렌더링

        return (
            <div>
                <input
                    onChange={this.handleChange}
                    value={this.state.name}/>
                <button onClick={this.handleInsert}>추가</button>
                <ul>
                    {nameList}
                </ul>
            </div>
        );
    }
}

export default IterationSample;