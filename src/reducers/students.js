import {
  CREATE_STUDENT,
  RETRIEVE_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
  DELETE_ALL_STUDENT,
} from "../actions/types";

const initialState = [];

function studentReducer(students = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_STUDENT:
      return [...students, payload];

    case RETRIEVE_STUDENT:
      return payload;

    case UPDATE_STUDENT:
      return students.map((student) => {
        if (student.id === payload.id) {
          return {
            ...student,
            ...payload,
          };
        } else {
          return student;
        }
      });

    case DELETE_STUDENT:
      return students.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_STUDENT:
      return [];

    default:
      return students;
  }
}

export default studentReducer;
