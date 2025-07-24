class ControlledComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
        };
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange=(event)=>{
        this.setState({name:event.target.value});

    }
    render(){
        return(
            <div>
                Name:
                <input type="text" value={this.state.name} onChange={this.handleChange}/>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<ControlledComponent/>);