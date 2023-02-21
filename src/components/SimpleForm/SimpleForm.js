import React from "react";
import Greetings from "../Greetings/Greetings";
import "./style.css"

class SimpleForm extends React.Component {
  state = {
    firstName: "",
    firstNameError: "",
    lastName: "",
    lastNameError: ""
  };

  validateName = name => {
    const regex = /[A-Za-z]{3,}/;

    return !regex.test(name)
      ? "Имя должно содержать минимум 3 буквы"
      : "";
  };

  onFirstNameBlur = () => {
    const { firstName } = this.state;
    const firstNameError = this.validateName(firstName);
    return this.setState({ firstNameError });
  }

  onFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    });
  }

  onLastNameBlur = () => {
    const { lastName } = this.state;

    const lastNameError = this.validateName(lastName);

    return this.setState({ lastNameError });
  };

  onLastNameChange = event =>
    this.setState({
      lastName: event.target.value
    });

  render() {
    const { firstNameError, firstName, lastName, lastNameError } = this.state;

    return (
      <div className="wrapper" >
        <div className="wrapper-inner">
          <label>
            First name:
            <input className="input"
              type="text"
              name="firstName"
              onChange={this.onFirstNameChange}
              onBlur={this.onFirstNameBlur}
            />
            {firstNameError && <div className="error">{firstNameError}</div>}
          </label>
        </div>
        
        <Greetings
          firstName={firstName}
        />
      </div>


      // <div>
      //   <input type="text" name="firstName" onChange={this.onFirstNameChange} />
      //   <Greetings firstName={this.state.firstName} />
      // </div>
    );
  }
}

export default SimpleForm