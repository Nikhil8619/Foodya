import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // count : 0,
            userInfo : {
                name:"dummyname",
                location:"default"
            },
            // count2 : 2,
        };
    }
    async componentDidMount(){
        const data= await fetch("https://api.github.com/users/Nikhil8619");
        const json=await data.json();
        console.log(json)
        this.setState({
            userInfo:json,
            
        })
        
        
    }
    render(){
        const {login,id,avatar_url}=this.state.userInfo;
        // const {count}=this.state;
        console.log(this.state.userInfo.login)
        
        return(
            
            <div className="user-card">
            <h3>Name: {login}</h3>
            <h3>Id: {id}</h3>
            <img src={avatar_url}/>
            {/* <h4>Count : {count}</h4>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count+1,
                })
            }}>Increase count</button> */}
            
        
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, distinctio.</p>
        </div>
        )
    }
}
export default UserClass