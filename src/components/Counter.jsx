import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`);
      const item = await res.json();
      const newData = [...data, item];
      setData(newData);
    }

    fetchData();
  }, [count]);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>hide/show</button>

      {toggle && (
        <h1
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {count}
        </h1>
      )}

     {toggle ? data.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <p>{item.completed ? "Completed" : "Not Completed"}</p>
        </div>
      )): <h1> Data is hidden for now</h1>}
    </>
  );
}

export default Counter;