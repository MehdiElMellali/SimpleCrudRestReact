import React, { Component } from "react";
import { connect } from "react-redux";
import {
  retrieveStudents,
  findStudentsByName,
  deleteAllStudents,
} from "../actions/students";
import { Link } from "react-router-dom";
import AddStudent from "./add-student.component";

class StudentsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveStudent= this.setActiveStudent.bind(this);
    this.findByName = this.findByName.bind(this);
    this.removeAllStudents = this.removeAllStudents.bind(this);

    this.state = {
      currentStudent: null,
      currentIndex: -1,
      searchName: "",
    };
  }

  componentDidMount() {
    this.props.retrieveStudents();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName,
    });
  }

  refreshData() {
    this.setState({
      currentStudent: null,
      currentIndex: -1,
    });
  }

  setActiveStudent(student, index) {
    this.setState({
      currentStudent: student,
      currentIndex: index,
    });
  }

  removeAllStudents() {
    this.props
      .deleteAllStudents()
      .then((response) => {
        console.log(response);
        this.refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  findByName() {
    this.refreshData();

    this.props.findStudentByTitle(this.state.searchName);
  }

  render() {
    const { searchName, currentStudent, currentIndex } = this.state;
    const { students } = this.props;
    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.findByName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <Link
              className="btn-info m-3 btn btn-sm "
                to={"/addStudent"}
              >
                Add
              </Link>
        </div>
        <div className="col-md-6">
          <h4>Student List</h4>

          <ul className="list-group">
            {students &&
              students.map((student, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveStudent(student, index)}
                  key={index}
                >
                  {student.name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllStudents}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentStudent ? (
            <div>
              <h4>Student</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentStudent.name}
              </div>
              <div>
                <label>
                  <strong>LastName:</strong>
                </label>{" "}
                {currentStudent.lastName}
              </div>
              <div>
                <label>
                  <strong>Age:</strong>
                </label>{" "}
                {currentStudent.age}
              </div>
              <div>
                <label>
                  <strong>Class:</strong>
                </label>{" "}
                {currentStudent.classes}
              </div>

              <Link
              className="btn-info m-3 btn btn-sm "
                to={"/student/" + currentStudent.id}
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Student...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students,
  };
};

export default connect(mapStateToProps, {
  retrieveStudents,
  findStudentsByName,
  deleteAllStudents,
})(StudentsList);