class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            buttonDisabled:false
        };
    }
    increment=()=>{
        this.setState((prevState)=>{
            return {count:prevState.count+1};
        })
    }
    componentDidUpdate(prevState,prevProps){
        if(prevState.count!==this.state.count && this.state.count===5){
            alert("count reached 5");
        }
        /**
         * if (this.state.count === 5){
         * alert("you have clicked many time");
         * this.setState({buttonDisabled:true});}
         */
    }
    render(){
        return(
            <div>
                <h2>count : {this.state.count}</h2>
                <button disabled={this.state.buttonDisabled}onClick={this.increment}>Increment</button>
            </div>
        );

    }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter/>);/**component did update is like a watcher for change in props and state 
you must compaire with previous value(prevState.count) to prevent unwanted change 
it is good place to perform side effect;
triggering an alert
fetching a data from server 
updating a chart when data change 

like first when you run and go into chrome console and open inspect then this come that 
constructor iscalled 
render is called 
and when someone click on increament button 
then 
constructor is called 
render is called 
render is called 
component did update is called 
*/