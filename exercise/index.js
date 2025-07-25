class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            seconds:0
        };
    }
    coponentDidMount(){
        this.interval=setInterval(()=>{
            this.setState(prevState=>{
                seconds:prevState.seconds+1
            })
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        return(
            <p>timer:{this.state.seconds}</p>
        )
    }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Timer/>);