const ParentStateContext=React.createContext("");
class ParentComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            parentState:''
        };
    }
    handleChange=(e)=>{
        this.setState({parentState:e.target.value});
    };
    render(){
        return(
            <ParentStateContext.Provider value={this.state.parentState}>
                <div>
                    <label>Input rendered inside parent:</label>
                    <input type="text" onChange={this.handleChange} />
                    <Level1Child />
                </div>
            </ParentStateContext.Provider>
        );
    }
}
class Level1Child extends React.Component{
    render(){
        console.log("Level1Child rendered");
        return(
            <div>
                <h1>Level 1 Child</h1>
                <Level2Child/>
            </div>
        );
    }
}
class Level2Child extends React.Component{
    render(){
        console.log("Level2Child rendered");
        return(
            <div>
                <h2>Level2 child</h2>
                <Level3Child/>
            </div>
        );
    }
}
class Level3Child extends React.Component{
    render(){
        console.log("Level3Child rendered");
        return(
            <div>
                <h2>Level3 Child</h2>
                <Level4Child/>
            </div>
        )
    }
}
class Level4Child extends React.Component{
    render(){
        console.log("level4Child rendered");
        return(
            <ParentStateContext.Consumer>
                {(data)=>(
                    <div>
                        <h2>Hi From Child4level</h2>
                        <h3>parent state received via context: {data}</h3>
                    </div>
                )}
            </ParentStateContext.Consumer>
        )
    }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<ParentComponent/>)