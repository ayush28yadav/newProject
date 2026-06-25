import Child3 from "./child3";

function Child2({name, rollno}){
    return(
        <div>
            <h1>{name}</h1>
            <Child3 name = {name} rollno={rollno}/>
        </div>
    )
}
export default Child2;