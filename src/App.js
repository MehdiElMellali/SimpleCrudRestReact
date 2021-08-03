import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddProduct from "./components/add-product.component";
import ProductsList from "./components/product-list.component";
import StudentsList from "./components/student-list.component";
import AddStudent from "./components/add-student.component";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/product"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link to={"/product"} className="nav-link">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/student"} className="nav-link">
                Student
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Product
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/products"]} component={ProductsList} />
            <Route exact path={["/", "/student"]} component={StudentsList} />
            <Route exact path="/add" component={AddProduct} />
            <Route exact path="/addStudent" component={AddStudent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
