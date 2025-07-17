class ClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "Count":20,
        }
        this.incrementCount=this.incrementCount.bind(this);

    }
    incrementCount(){
        this.setState({
            "Count":this.state.Count+1
        })
    }
    render(){
        return(
            <div>
                <h1>Current count value is : {this.state.Count}</h1>
                <button onClick={this.incrementCount}>Increment count</button>
            </div>
        );
    }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<ClassComponent/>);
/**allways use function setState when your update depend upon previous state 
 * 
 * this.setState((prevState)=>{
 * return {"Count":prevState.Count+1}})
 */