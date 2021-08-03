import { combineReducers } from "redux";
import products from "./products";
import students from "./students";

export default combineReducers({
    products,
    students
});