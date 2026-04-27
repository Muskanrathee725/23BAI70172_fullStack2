import React, { useState } from 'react'
import useForm from '../contexts/useForm';

export default function TaskManager() {
    const prio = ["Low", "Medium", "Hard"]; 
    const [tasks, setTasks] = useState([]);

    const { values, handleChange, resetForm } = useForm({
        title: "",
        priority: "Low"
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
        title: values.title,
        priority: values.priority
        };

        setTasks([...tasks, newTask]);

        resetForm();
    };


    return (
        <>
        <form style={{
            padding: 10,
            display: 'flex', 
            justifyContent: 'center', 
            alignContent: 'center',
            gap: 10
        }} onSubmit = {handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={values.title}
                onChange={handleChange}
            />

            <select
                name="priority"
                value={values.priority}
                onChange={handleChange}
            >
            {prio.map((val, index) => (
                <option key={index} value={val}>
                    {val}
                </option>
            ))}
            </select>

            <button type="submit">Add Task</button>

        </form>
        {
            tasks.map((task, idex)=> {
                return <div style={{
                    display: 'flex', 
                    alignContent:'center', 
                    justifyContent: 'center',  
                    marginBottom: 10, 
                    backgroundColor: task.priority === "Hard" ?"red" : "green",
                    color : task.priority === "Hard" ? "white" : "black"
                    
                }}>{task.title} || {task.priority}</div>
            })
        }

        </>
    )
}
