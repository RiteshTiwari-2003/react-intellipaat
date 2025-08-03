function DisplayErrorComponent(props){
    return props.message? <div style={{color:"red"}}>{props.message}</div> : null;

}
DisplayErrorComponent=React.memo(DisplayErrorComponent);
function FormComponent(){
    const[formData,setFormData]=React.useState({
        name:'',
        email:'',
        age:'',
        password:''
    });
    const [errors,setError]=React.useState({});
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData(prev=>({...prev,[name]:value}));
    };
    const validate=()=>{
        const newError={};
        if(formData.name.trim()===''){
            newError.name="Name is Required";
        }
        if(!formData.includes('@')){
            newError.email="Email is required and must contain @";
        }
        const ageNum=parseInt(formData.age,10);
        if(!ageNum || ageNum<18 || ageNum>90){
            newError.age=""
        }
        if(formData.password.length<6){
            newError.password="Passowrd must be atleast 6 character";
        }
        setError(newError);
        const isError=Object.keys(newError).length>0;
        return isError;

    };
    const handleSubmit=(e)=>{
        e.preventDefualt();
        const isErrorInSubmittedForm=validate();
        if(!isErrorInSubmittedForm){
            alert("Form submitted successfully");
            console.log("Submitted form:",formData);
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                <DisplayErrorComponent message={errors.name}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                <DisplayErrorComponent message={errors.email}/>
            </div>
            <div>
                <label>Age:</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange}/>
                <DisplayErrorComponent message={errors.age}/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange}/>
                <DisplayErrorComponent message={errors.password}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}