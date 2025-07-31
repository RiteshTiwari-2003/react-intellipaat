import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
function Counter(){
    const [balance,setBalance]=useState(10000);
    const [buttonDisabled,setButtonDisabled]=useState(false);
    console.log("render is called");
    const spendMoney=()=>{
        setBalance((prevBalance)=>prevBalance-1000);
    };
    useEffect(()=>{
        console.log("component did update is called");
        if(balance<=0){
            setButtonDisabled(true);
        }
    },[balance]);
    return(
        <div>
            <h2>Current account balance: {balance}</h2>
            <button disabled={buttonDisabled} onClick={spendMoney}>Spend Money</button>
        </div>
    );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter/>);