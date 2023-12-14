import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";

export class App  extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
        };

        updateState = (evt) => {
          const variable = evt.currentTarget.textContent.toLowerCase();
          this.setState((state) => ({[variable]: state[variable] + 1}))
      }; 

render(){

  return (
      <Statistics
        feedback={this.state} 
        updateState={this.updateState}
      />
  )
}
};
