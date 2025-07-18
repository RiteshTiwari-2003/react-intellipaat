import React from "react";

class Child1 extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <h1>Hi I am from Child1!</h1>
            </div>
        );
    }
}
class Child2 extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <h1>Hi I am from Child2</h1>
            </div>
        );
    }
}
class ParentComponent extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <h1>Hi I am from parent component</h1>
                <Child1></Child1>
                <Child2></Child2>
            </div>
        );
    }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<ParentComponent/>);