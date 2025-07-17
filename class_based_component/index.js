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
 * 
 * like example is i have a simple html file like in same folder index.html have 
 * and javascript file like 
 * class ClassComponent extends React.Component{
 * constructor(props){
 * super(props);
 * this.state="mother";
 * this.handleClick=this.handleClick.bind(this);}
 * handleClick(){
 * this.setState("father");//  but here error come becuse setState takes an object }
 * render(){
 * return(
 * <div>
 * <h1>I love my {this.state}</h1>
 * <button onClick={this.handleClick}>Chsnge Love</button>
 * </div>)}}
 * 
 * so update like this like 
 * this.state={"person":"mother"};
 * 
 * and <h1> i love my {this.state.person}</h1>
 * and this.setState({"person":"father"});
 */