class ClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.myFirstLove="mother";
    }
    render(){
        let secondLove="father";
        return(
            <div>
                <h1>I love my {this.myFirstLove} and {secondLove}</h1>
                <p>Thank you</p>
            </div>
        );
    }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<ClassComponent/>);
//root.render(new ClassComponent().render())
/**
 * class ClassComponent extends React.Component{
 * constructor(props){
 * super(props);
 * this.state="mother";}
 * render(){
 * return(
 * <div>
 * <h1>I love my {this.state}</h1></div>)}}
 * const root=ReactDOM.createRoot(document.getElementById("root"));
 * root.render(<ClassComponent/>);
 * 
 */