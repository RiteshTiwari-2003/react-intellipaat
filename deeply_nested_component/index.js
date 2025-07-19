class FatherComponent extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <h1>Hi I am a father Component.</h1>
                <ChildComponent></ChildComponent>
            </div>
        );
    }
}
class ChildComponent extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <h1>Hi I am from Child Component.</h1>
            </div>
        )
    }
}
class GrandFatherComponent extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <h1>Hi I am From Gorakhpur </h1>
                <FatherComponent></FatherComponent>
            </div>
        );
    }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<GrandFatherComponent/>);