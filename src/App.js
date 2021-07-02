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
