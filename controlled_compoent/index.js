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

/**what is the controlled component 
 * in class based React, a controled component is a form element (like <input > <textarea> or <select> ) the form element does not manage its own state 
 * instead react does via this.state and this.setState method 
 * every change in the input goies through an onChange handler that update the state 
 * 
 * why use controlled component ?
 * you can validate input as the user type 
 * you can conditionally disable and enable button 
 * you have full contro over form 's behaviourr 
 */