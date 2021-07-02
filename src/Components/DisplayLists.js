import React from "react";

const DisplayLists = (props) => {
  return props.list.map((data) => {
    return (
      <div key={data.id} className="label">
        <h1>ID: {data.id}</h1>
        <p>Name: {data.name}</p>
        <p>IsChecked: {data.checked.toString()}</p>
        <p>£{data.price}</p>
        <button onClick={() => props.increment(data.price)}>Add</button>
        <button
          style={{ marginLeft: "10px" }}
          onClick={(e) => props.decrement(e, data.price)}
        >
          Remove
        </button>
      </div>
    );
  });
};
export default DisplayLists;
