import {localAxios} from "../http-common";

class StudentDataService {
  getAll() {
    return localAxios.get("/student");
  }

  get(id) {
    return localAxios.get(`/student/${id}`);
  }

  create(data) {
    return localAxios.post("/Student", data);
  }

  update(id, data) {
    return localAxios.put(`/student/${id}`, data);
  }

  delete(id) {
    return localAxios.delete(`/student/${id}`);
  }

  deleteAll() {
    return localAxios.delete(`/student`);
  }

  findByTitle(name) {
    return localAxios.get(`/student?title=${name}`);
  }
}

export default new StudentDataService();