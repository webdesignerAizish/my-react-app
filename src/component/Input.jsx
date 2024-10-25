import React, { useState, useEffect } from 'react'
import List from './list'
function Input() {
    const [inputValue, setInputValue] = useState("");
    const [toDo, setToDo] = useState(["hello", "ki"]);
    const [editing, setEditing] = useState(false);
    const [editValue, setEditValue] = useState("");
    const handleInput = (event) => {
        setInputValue(event.target.value);

    };
    const saveData = () => localStorage.setItem("toDo", JSON.stringify(toDo));
    const loadData = () => {
        const storedData = localStorage.getItem("toDo");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            // Skip the first element (index 0) and set the rest
            setToDo(parsedData);
        }
    };
    const addToDo = (event) => {
        if (inputValue.trim() !== '') {
            event.preventDefault();
            setToDo([...toDo, inputValue])

            setInputValue('');
            saveData();
            console.log(toDo);
        }
    }

    const handleDelete = (index) => {
        const newToDo = toDo.filter((_, i) => i !== index);
        setToDo(newToDo);
        console.log(index);
        saveData();
    }
    const handleEdit = (index, value) => {
        setEditing(index);
        setEditValue(value);
        saveData();
    }

    const handleSave = (index) => {
        const newToDo = [...toDo];
        newToDo[index] = editValue;
        setToDo(newToDo);
        setEditing(false);
        saveData();
    }
    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <form className='inputBox' onSubmit={addToDo}>
                <input
                    className='input'
                    type="text"
                    value={inputValue}
                    onChange={handleInput}
                    placeholder="
                    enter task"
                />
                <button className='add' type="submit"><i className="fa-solid fa-square-plus"></i></button>
            </form>
            <List handleEdit={handleEdit} handleSave={handleSave} handleDelete={handleDelete} toDo={toDo} editValue={editValue} editing={editing} setEditValue={setEditValue} loadData={loadData}></List>
        </div >
    )
}

export default Input
