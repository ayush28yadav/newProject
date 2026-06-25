import Child2 from "./child2";

function Child1({name, rollno}){
    return(
        <div>
            <h1>{name}</h1>
           <Child2 name = {name} rollno = {rollno}/>
        </div>
    )
}
export default Child1;