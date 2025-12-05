import type React from "react";
import { AddedTasks, type Tasks } from "../components/addedTasks";
import { useRef, useState } from "react";

const mockTasks: Tasks[] = [
    { category: "casa", description: 'acomodar cuarto' },
    { category: 'trabajo', description: 'crear inteface de usuario para creacion de tareas ' },
    { category: "trabajo", description: 'repasar cursos de css' }
]

export const CategoryCreationForm = () => {

    const [tasks, setTasks] = useState<Tasks[]>(mockTasks)
    const [taskName, settaskName] = useState<string>('')

    // const inputRef = useRef<HTMLInputElement>(null);

    const addTask = () => {

        setTasks([...tasks, { category: "trabajo", description: taskName }])
        settaskName('');

    }


    return (
        <>
            <h1
                className=" flex bg-green-600 border-2 p-4 rounded-3xl  "
                style={{ marginBottom: 20 }}
            > Todo App </h1>

            <div
                style={{ marginBottom: 20 }}
                className="flex"
            >
                <div  > - selecciona la categoria de la tarea: </div>
                <select
                    style={{ marginLeft: 6 }}
                    className="bg-gray-600"
                >
                    <option> trabajo </option>
                    <option> casa </option>
                </select>
            </div>

            <div className=" flex gap-4  justify-center " >
                <input
                    type="text"
                    className="border border-black "
                    placeholder=" añade una tarea...."
                    onChange={(e) => settaskName(e.target.value)}
                    value={taskName}
                ></input>
                {taskName}
                <button
                    className="bg-green-700 border-black "
                    onClick={addTask}
                >
                    +
                </button>
            </div>

            <AddedTasks tasks={tasks} />

        </>
    )
}
