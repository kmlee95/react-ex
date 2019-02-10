import React, { Component, createContext } from 'react';

const Context = createContext();

const { Provider, Consumer: SampleConsumer } = Context;
//createContext함수에 provider, consumer 컴포넌트 반환

//this.props.children -> <myComponent>xxx</myComponent>에서 xxx를 얻고자 할때 씀.

class SampleProvider extends Component{
    state = {
        value: '기본값 입니다'
    }

    actions = {
        setValue: (value) =>{
            this.setState({value});
        }
    }

    render(){
        const { state, actions } = this;
        const value = { state, actions }; //const value = {state:state, actions:actions}
        return(
            <Provider value={value}>
                {this.props.children}
            </Provider>
        );
    }

}
function useSample(WrappedComponent){
    return function UseSample(props){
        return(
            <SampleConsumer>
                {
                    ({ state, actions }) =>(
                        <WrappedComponent 
                        value ={state.value} 
                        setValue={actions.setValue} />
                    )
                }
            </SampleConsumer>
        )
    }
}


export { SampleProvider, SampleConsumer, useSample };