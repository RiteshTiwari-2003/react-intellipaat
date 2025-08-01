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
