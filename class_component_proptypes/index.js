class ClassComponent extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <h1>Hi I am {this.props.myLove}</h1>
            </div>
        );
    }
}
ClassComponent.propTypes={
    myLove:PropTypes.string.isRequired
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<ClassComponent myLove={123}/>);