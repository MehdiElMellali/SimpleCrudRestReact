import React, { Component } from "react";
import { connect } from "react-redux";
import { createStudent } from "../actions/students";

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeClasses = this.onChangeClasses.bind(this);
    this.saveStudent = this.saveStudent.bind(this);
    this.newStudent = this.newStudent.bind(this);

    this.state = {
      id: null,
      name: "",
      lastName: "",
      age : 0,
      classes :0,
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  } 
   onChangeAge(e) {
    this.setState({
      age: e.target.value,
    });
  }
  onChangeClasses(e) {
    this.setState({
      classes: e.target.value,
    });
  }

  saveStudent() {
    const { name, lastName, age, classes} = this.state;

    this.props
      .createStudent(name, lastName,age,classes)
      .then((data) => {
        this.setState({
          id: data.id,
          name: data.name,
          lastName: data.lastName,
          age: data.age,
          classes: data.classes,

        //   categoty: data.published,

          submitted: true,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newStudent() {
    this.setState({
      id: null,
      name: "",
      lastName: "",
      age: 0,
      classes: 0,
      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newStudent}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">LastName</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                required
                value={this.state.lastName}
                onChange={this.onChangeLastName}
                name="lastName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                className="form-control"
                id="age"
                required
                value={this.state.age}
                onChange={this.onChangeAge}
                name="age"
              />
            </div>
            <div className="form-group">
              <label htmlFor="classes">Class</label>
              <input
                type="text"
                className="form-control"
                id="classes"
                required
                value={this.state.classes}
                onChange={this.onChangeClasses}
                name="classes"
              />
            </div>


            <button onClick={this.saveStudent} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}


export default connect(null, { createStudent })(AddStudent);