function DisplayDetails({title,userId}){
    return(
        <div style={{border:'1px solid #ccc', padding:'1rem',borderRadius:'8px'}}>
            <h3>
                Todo:
            </h3>
            <p>Title : {title}</p>
            <p>User ID:{userId}</p>

        </div>
    );

}
class TodoContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading:true,
            todo:{}
        };
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')//dfetch data and maintain state
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            this.setState({
                loading:false,
                todo:data
            });
        }
            
        )
    }
    render(){
        const {todo,loading}=this.state;
        return(
            <div>
                <h2>User info</h2>
                {loading?<p>Loading...</p>:<DisplayDetails title={todo.title} userId={todo.userId} />}
            </div>
        );
    }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<TodoContainer/>);