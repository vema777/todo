import './Home.scss';
import {useEffect, useState} from "react";
import {TaskModel} from "../model/task.model";
import {fetchTodos} from "../services/task.service";

//TODO hier werden erstmal die Liste von todos angezeigt.
export function Home(){
    const [todos, setTodos] = useState<TaskModel[]>([]);

    useEffect( ()=>{
        const tasks = async () => {
            const datas = await fetchTodos();
            setTodos(datas);
        }

        tasks().then();
    }, [])

    return (
        <p>Hello</p>
    )
}