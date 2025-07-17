class ClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            "count":20,
        }
        this.count=33
        this.updateStateCount=this.updateStateCount.bind(this)
        this.updateDataPropertyCount=this.updateDataPropertyCount.bind(this);

    }
    updateStateCount(){
        this.setState({
            "count":100
        })
    }
    updateDatapropertyCount(){
        this.count=200
    }
    render(){
        return(
            <div>
                <h1>Current vslu inside the state count is {this.state.count}</h1>
                <h1>Current vlue inside the regular object data property is {this.count}</h1>
                <button onClick={this.updateStateCount}> update the state count </button>
                <button onClick={this.updateDatapropertyCount}>Update the regular object dta property count </button>
            </div>
        )
    }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<ClassComponent/>)