const User=({name,location,contact,details})=>{
    return(
        <div className="user-card">
            <h1>About us</h1>
            <h1>NAME:{name}</h1>
            <h3>Location : {location}</h3>
            <h3>Contact: {contact}</h3><br/><br/><br/>
            <h3> {details}</h3>
            
        </div>
    );
};
export default User;