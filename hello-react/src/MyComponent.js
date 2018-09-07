import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MyComponent extends Component{
    state = {number :0}
    static defaultProps={
        name : '이름'
    }
    static proptypes = {
        name: PropTypes.string
    }

    render(){
        return (
            <div>
                <p>{this.props.name}</p>
                <p>이것은 숫자: {this.state.number}</p>
                <button onClick={()=>{
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>더하기</button>
            </div>
        
        )
    }
}

export default MyComponent;
