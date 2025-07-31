class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            balance:10000,
            buttonDisabled:false
        };
        console.log("constructor is called");
    }
    spendMoney=()=>{
        this.setState({
            balance:this.state.balance-10000
        });
    }
    componentDidUpdate(prevProps,prevState){
        console.log("component did update is called");
        if(prevState.balance!==this.state.balance && this.state.balance<=0){
            this.setState({
                buttonDisabled:true
            })
        }
    }
    render(){
        console.log("render is called");
        return(
            <div>
                <h2>Current account balance:{this.state.balance}</h2>
                <button disabled={this.state.buttonDisabled} onClick={this.spendMoney}>Spend Money</button>
            </div>
        )
    }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter/>);