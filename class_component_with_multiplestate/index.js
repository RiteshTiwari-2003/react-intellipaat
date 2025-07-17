class ClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            "count":20,
            "name":"vikram"
        }
        this.updateCount=this.updateCount.bind(this)
        this.updateName=this.updateName.bind(this);
        this.updateBothNameAndCount=this.updateBothNameAndCount.bind(this)
    }
    updateCount(){
        this.setState({
            "count":100
        })
    }
    updateName(){
        this.setName({
            "name":"suresh"
        })
    }
    updateBothNameAndCount(){
        this.setState({
            "count":50,
            "name":"ramesh"
        })
    }
    render(){
        return(
            <div>
                <h1>Current value inside the count is {this.state.count}</h1>
                <h1> current value inside the name is {this.state.name}</h1>
                <button onClick={this.updateCount}>Update count</button>
                <button onClick={this.updateName}>Update name</button>
                <button onClick={this.updateBothnameAndCount}>update both name and count</button>

            </div>
        )
    }
}