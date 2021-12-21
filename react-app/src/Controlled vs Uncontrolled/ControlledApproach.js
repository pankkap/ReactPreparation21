import React, { Component } from "react";

class ControlledApproach extends Component {
  constructor() {
    super();
    this.state = {
      // field: {},
    };
    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  // Controlled Input Approach

  onInputchange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // this.setState({
    //   fields: {
    //     ...this.state.fields,
    //     [e.target.name]: e.target.value,
    //   },
    // });
  }

  onSubmitForm() {
    console.log(this.state);
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
              value={this.state.fname}
              onChange={this.onInputchange}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name :
            <input
              name="lname"
              type="text"
              value={this.state.lname}
              onChange={this.onInputchange}
            />
          </label>
        </div>
        <div>
          <label>
            Email :
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.onInputchange}
            />
          </label>
        </div>
        <div>
          <button onClick={this.onSubmitForm}>Submit</button>
        </div>
        {/* <p>{items}ok</p> */}
      </div>
    );
  }
}

export default ControlledApproach;
