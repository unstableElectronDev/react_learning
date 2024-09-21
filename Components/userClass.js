import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Dummy",
                location:"default",
                avatar_url:"default",
            },
        };
    }
    async componentDidMount(){
        const data= await fetch("https://api.github.com/users/unstableElectronDev");
        const json=await data.json();
        this.setState({
            userInfo: json,
        })
    }
    render(){
        const {name,location,login,details,avatar_url,bio}=this.state.userInfo;
        return(
            <div className="user-card">
                <img src={avatar_url} alt="Avatar" style={{borderRadius:"300px",width:"100px"}} />
                <h1>About us</h1>
                <h1>Name:{name}</h1>
                <h1>Bio:I {bio}</h1>
                <h3>Location : Hyderabad</h3>
                <h3>UserName:{login}</h3><br/><br/><br/>
                <h3>{details}</h3>
                
            </div>
        );
    }
}
export default UserClass;