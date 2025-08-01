function Level1Child(props){
    console.log("Level1Child rendered");
    return(
        <div>
            <h1>Level1 child rendered</h1>
            <Level2Child data={props.data}/>
        </div>
    );
}
function Level2Child(props){
    console.log("Level2Child rendered");
    return (
        <div>
            <h2>Leve2Child rendered</h2>
            <Level3Child data={props.data}/>
        </div>
    );
}
function Level3Child(props){
    console.log("Level3Child rendwred");
    return(
        <div>
            <h3>Level3child rendered</h3>
            <Level4Child data={props.data}/>
        </div>
    );

}
function Level4Child(props){
    console.log("Level4Child rendered");
    return(
        <div>
            <h3>Level4Child Rendered</h3>
            <Level5Child data={props.data}/>
        </div>
    )
}
function Level5Child(props){
    console.log("Level5Child rendered");
    return(
        <div>
            <h4>Level5Child Rendered</h4>
            <Level6Child data={props.data}/>
        </div>
    );
}
function Level6Child(props){
    console.log("Level6Child rendered");
    return(
        <div>
            <h5>Level6child rendered</h5>
            <Level7Child data={props.data}/>
        </div>
    );
}
function Level7Child(props){
    console.log("Level7Child rendered");
    return(
        <div>
            <h6>Level7Child Rendered</h6>
            <h1>parent state received from prop drilling from parent: {props.data}</h1>
        </div>
    );
}
function ParentComponent(){
    console.log("ParentComponent renderd");
    const [parentState,setParentState]=useState('');
    function handleChange(e){
        setParentState(e.target.value);
    }
    return(
        <div>
            <label>Input randered inside component: </label>
            <input type="text" onChange={handleChange}/>
            <Level1Child data={parentState}/>
            
        </div>
    );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<ParentComponent/>);