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
/**when parent rerender child will rerender also automatically 
 * i want to stop unneccesary rerendering of child component 
 * when?
 * when state and props changes 
 * when parent rerender 
 * before render method is called 
 * shouldcomponentupdate()
 * 
 * in component did update we pass two props like prevprops, and prevState and in shouldcomponentupdate nextState,nextprops
 * 
 * like in life cycle order should component update just called before of render method and component did update always called along with render method when any changes happen just after 
 * render method
 */