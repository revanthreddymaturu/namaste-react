import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
        }
    }
    render(){
        const {name,place}=this.props;
        const {count}=this.state;
        return(
        <div className="user-div"> 
        <h1>{name}</h1>
        <h3>{place}</h3>
        <div>Count: {count}</div>
        <button className="btn-css" onClick={()=>{
             this.setState({
                count:this.state.count+1
             })
        }}>Increment!</button>
        </div>
        )
    }
}

export default UserClass