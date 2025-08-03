function DisplayErrorComponent(props){
    return props.message? <div style={{color:"red"}}>{props.message}</div> : null;

}
DisplayErrorComponent=React.memo(DisplayErrorComponent);
//react memo take care of unnecessary rerendering issue like just because father cry child should not cry 
/**so react.memo take care of rerendering issue unnecessary rerendering pretend from this it will memorize means caching it's like cache in your browser 
 * when you request for html page the first timr it will get from america but second time again it is noy come from america it is come from cache like if website 
 * is static the it will always get from cache for second time third time ....
 * memorization means caching what it will cache , it wil cache for given input the output iswhat there? output is wat there html tag input is what there props 
 * it means if it will got same props again and again it will not rerendering again and agian 
 */
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
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} onInput={validate} onBlur={validate}/>
                
                <DisplayErrorComponent message={errors.password}/>
            </div>
            
            <button type="submit">Submit</button>
        </form>
    )
}
/**onBlur is used like when you click in input and click on outside of input then it will validate the input  */