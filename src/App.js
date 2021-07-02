import "./styles.css";
import React from "react";
import checkedList from "./isCheckedList";
import DisplayLists from "./Components/DisplayLists";

class App extends React.Component {
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
        <DisplayLists
          list={this.state.isChecked}
          increment={this.increment}
          decrement={this.decrement}
        />
        <div className="total">Total: {this.state.count}</div>
      </div>
    );
  }
}

export default App;

// check = (e, sum, checked) => {
//   if (!e.target.defaultChecked) {
//     this.add(sum, checked);
//   } else {
//     this.remove(sum, checked);
//   }
// };

// // Add 5
// add = (adderSum, checked) => {
//   this.setState((prevState) => {
//     return {
//       isChecked: (prevState[checked].isChecked = true)
//     };
//   });
//   this.setState((prevState) => {
//     return {
//       count: prevState.count + adderSum
//     };
//   });
// };

// // Removes 5
// remove = (adderSum, checked) => {
//   this.setState((prevState) => {
//     return {
//       isChecked: (prevState[checked].isChecked = false)
//     };
//   });
//   this.setState((prevState) => {
//     return {
//       count: prevState.count - adderSum
//     };
//   });
// };

//{
/* <div className="label">
          <label>Click to add or remove 5</label>
          <input
            onClick={(e) => this.check(e, 5, 1)}
            type="checkBox"
            defaultChecked={this.state[1].isChecked}
          ></input>
        </div>
        <div className="label">
          <label>Click to add or remove 10</label>
          <input
            onClick={(e) => this.check(e, 10, 2)}
            type="checkBox"
            defaultChecked={this.state[2].isChecked}
          ></input>
        </div> */
//}
