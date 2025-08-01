const ParentStateContext=React.createContext("");
function ParentContext(){
    console.log("ParentContext rendered");
    const [parentState,setParentState]=React.useState("");
    function handleChange(event){
        setParentState(event.target.value);
    }
    return(
        <ParentStateContext.Provider value={parentState}>
            <div>
                <label>input rendered inside parent;</label>
                <input type="text"
                onChange={handleChange}/>
                <Level1Child/>
            </div>
        </ParentStateContext.Provider>
    )

}
function Level1Child(){
    console.log("level1 child rendered");
    return(
        <div>
            <h1>Hi fro level1child</h1>
            <Level2Child/>
        </div>
    );
}
function Level2Child(){
    console.log("Level2Child rendered");
    return(
        <div>
            <h2>Level2child rendered</h2>
            <Level3Child/>
        </div>
    );
}
function Level3Child(){
    console.log("Level3Child rendered");
    return(
        <div>
            <h3>Level3Child rendered</h3>
            <Level4Child/>
        </div>
    );
}
function Level4Child(){
    console.log("Level4Child rendered");
    return(
        <div>
            <h4>Level4Child rendered</h4>
            <Level5Child/>
        </div>
    );
}
function Level5Child(){
    console.log("Level5Child rendered");
    return(
        <div>
            <h5>Level5Child rendered</h5>
            <Level6Child/>
        </div>
    )

}
function Level6Child(){
    console.log("Level6Child rendered");
    const data=React.useContext(ParentStateContext);

    return(
        <div>
            <h1>Level6Child rendered</h1>
            <h2>Parent state received via usecontext:{data}</h2>

        </div>
    );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<ParentContext/>);