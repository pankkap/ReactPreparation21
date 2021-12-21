import React, { Component } from "react";

class RefExample extends Component {
  constructor() {
    super();
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm() {
    console.log(this.input.value);
  }

  render() {
    return (
      <div>
        <div>
          <label>
            First Name :
            <input
              name="fname"
              type="text"
              ref={(myinput) => (this.input = myinput)}
            />
          </label>
        </div>
        <div>
          <button onClick={this.onSubmitForm}>Submit</button>
        </div>
      </div>
    );
  }
}

export default RefExample;
