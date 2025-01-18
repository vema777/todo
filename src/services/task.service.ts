import axios from "axios";
import {TaskModel} from "../model/task.model";

const fetchTodos = async () => {
    return axios.get<TaskModel[]>("http://localhost:8080/api/tasks/users/1")
        .then((response) => response.data);
}
export {fetchTodos}