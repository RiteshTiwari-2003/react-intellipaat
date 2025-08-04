class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            studentId:null,
            submittedStudentId:null
        };
    }
    render(){
        return(
            <div>
                <h1>Hi</h1>
            </div>
        );
    }
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Parent/>);