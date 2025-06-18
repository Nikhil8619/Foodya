import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
const About = () =>{
    return(
        <>
        <h1>About page</h1>
        <User name={"Nikhil Agrawal"}/>
        <div>
         
          <UserContext.Consumer>
            {({loggedInUser})=>(
              <h1 className="font-bold text-lg">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass name={"Nikhil Agrawal"} location={"Sambalpur"}/>
        
        </>
  )
}

export default About;