class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOn:true
        };
        this.toggle=this.toggle.bind(this);
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

/*class component is smart , container component mnage logic and state .
while functional component is dumb component , presentation component are jsut visuals that only display what they are told */
