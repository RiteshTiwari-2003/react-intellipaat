class LifeCycleMethod extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }
    componentDidMount(){
        console.log("component did mount is ChannelSplitterNode");
    }
    componentWillUnmount(){
        console.log("component will unmount ");
    }
    render(){
        return(
            <div>
                <h1> I love my {this.props.myLove}</h1>
            </div>
        )
    }

}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<LifeCycleMethod myLove="Mother"/>);