import User from "./User";
import UserClass from "./userClass";
import { Component } from "react"; 
class About extends Component{
    render(){
        return(
            <div>
                <h1>About class component</h1>
                <User name="Vaibhav Sharma (Function based component)"location="Hyderabad"contact="vaibhav998819@gmail.com"details="This is a food ordering application made by Vaibhav Sharma to learn ReactJs." />
                <UserClass location="Hyderabad"contact="vaibhav998819@gmail.com"details="This is a food ordering application made by Vaibhav Sharma to learn ReactJs."/>
            </div>
        );
    }
}
// const About =()=>{
//     return(
//         <div>
//             <User name="Vaibhav Sharma (Function based component)"location="Hyderabad"contact="vaibhav998819@gmail.com"details="This is a food ordering application made by Vaibhav Sharma to learn ReactJs." />
//             <UserClass name="Vaibhav Sharma (Class based component)"location="Hyderabad"contact="vaibhav998819@gmail.com"details="This is a food ordering application made by Vaibhav Sharma to learn ReactJs."/>
//         </div>
//     );
// };
export default About;