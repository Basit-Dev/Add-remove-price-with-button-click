import React from "react";
import checkedList from "../isCheckedList";
import "./display-list.css";

class DisplayLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isChecked: checkedList
    };
  }

  componentDidMount() {
    this.setState(() => {
      return {
        isChecked: checkedList
      };
    });
  }

  increment = (price) => {
    this.setState((prevState) => {
      return {
        count: prevState.count + price
      };
    });
  };

  decrement = (e, price) => {
    // Disable the button if the count is 0
    if (this.state.count === 0) {
      e.target = "disabled";
    } else {
      e.target.style.backgroundColor = "lightBlue";
      this.setState((prevState) => {
        return {
          count: prevState.count - price
        };
      });
    }
  };
  render() {
    return (
      <div className="container">
        {this.state.isChecked.map((data) => {
          return (
            <div key={data.id} className="label-box">
              <h1>ID: {data.id}</h1>
              <p>Name: {data.name}</p>
              <p>IsChecked: {data.checked.toString()}</p>
              <p>£{data.price}</p>
              <button onClick={() => this.increment(data.price)}>Add</button>
              <button
                style={{ marginLeft: "10px" }}
                onClick={(e) => this.decrement(e, data.price)}
              >
                Remove
              </button>
            </div>
          );
        })}
        <div className="total">Total: {this.state.count}</div>
      </div>
    );
  }
}
export default DisplayLists;
