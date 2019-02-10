import React, { Component } from 'react';
import { useSample } from '../contexts/sample';

class Sends extends Component {
    state = {
        input: ' '
    }
    componentDidMount(){ //첫 렌더링을 마치고 실행되는 메소드
        this.setState({
            input: this.props.value
        })
    }
    handleChange = (e) =>{
        this.setState({input:e.target.value});
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.setValue(this.state.input);
    }

    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <input value = {this.state.input} onChange={this.handleChange} />
                <button type="submit">설정</button>
            </form>
        );
    }
}


export default useSample(Sends);