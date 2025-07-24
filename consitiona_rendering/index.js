class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOn:true
        };
    }
    toggle=()=>{
        this.setState(prevState=>(
            {isOn:!prevState.isOn}
        ))
    }
    render(){
        return(
            <button onClick={this.toggle}>
                {this.state.isOn?"ON":"OFF"}

            </button>
        )
    }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Toggle/>);