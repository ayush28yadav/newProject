import { useContext } from "react";
import UserContext from "../UserContext";
function Child3(){

    // context consumption
    const { name, rollno } = useContext(UserContext);
    return(
        <div>
            <h2>{name}</h2>
            <p>Roll No: {rollno}</p>
        </div>
    )
}
export default Child3;