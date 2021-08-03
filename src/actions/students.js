import {
  CREATE_STUDENT,
  RETRIEVE_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
  DELETE_ALL_STUDENT,
} from "./types";
import StudentDataService from "../services/student.service";

export const createStudent = ( name, lastName,age,classes) => async (dispatch) => {
  console.log("name",name)
  console.log("lastName",lastName)
  console.log("age",age)
  console.log("classes",classes)
  try {
    const res = await StudentDataService.create({ name, lastName,age,classes });
    console.log("res",res)

    dispatch({
      type: CREATE_STUDENT,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveStudents = () => async (dispatch) => {
  try {
    const res = await StudentDataService.getAll();
    console.log(res.data);
    dispatch({
      type: RETRIEVE_STUDENT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateStudent = (id, data) => async (dispatch) => {
  try {
    const res = await StudentDataService.update(id, data);

    dispatch({
      type: UPDATE_STUDENT,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    await StudentDataService.delete(id);

    dispatch({
      type: DELETE_STUDENT,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllStudents = () => async (dispatch) => {
  try {
    const res = await StudentDataService.deleteAll();

    dispatch({
      type: DELETE_ALL_STUDENT,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findStudentsByName = (title) => async (dispatch) => {
  try {
    const res = await StudentDataService.findByName(title);

    dispatch({
      type: RETRIEVE_STUDENT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
