function FormComponent(){
    const [name,setName]=React.useState("");
    const [email,setEmail]=React.useState("");
    const [age,setAge]=React.useState("");
    const [password,setPassword]=React.useState("");


    const handleEmailChange=(e)=>{

        setEmail(e.target.value);
    };
    const handleAgeChange=(e)=>{

        setAge(e.target.value);
    };
    const handlePasswordChange=(e)=>{

        setPassword(e.target.value);
    };
    const handleNameChange=(e)=>{
        
        setName(e.target.value);
    };
    const validate=()=>{
        let isError=false;
        if(name.trim()===''){
            console.log("name is required");
            isError=true;
        }
        if(!email.includes("@")){
            console.log("Email is invalid ");
            isError=true;
        }
        const ageNum=parseInt(age,10);
        if(!ageNum || ageNum<18 || ageNum>90){
            console.log("age must be lies between 18 to 90");
            isError=true;
        }
        if(password.length<6){
            console.log("password must be atleast 6 character");
            isError=true;
        }
        return isError;
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        const isErrorInSubmittedForm=validate();
        if(isErrorInSubmittedForm){
            alert("form submitted successfully");
            console.log("submitted form:",formData);
        }


    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input  value={name} onChange={handleNameChange}/>
            </div>
            <div>
                <label>Email:</label>
                <input  value={email} onChange={handleEmailChange}/>
            </div>
            <div>
                <label>Age:</label>
                <input  value={age} onChange={handleAgeChange}/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password"  value={password} onChange={handlePasswordChange}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<FormComponent/>)