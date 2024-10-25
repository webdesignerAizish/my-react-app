import React from 'react'

function list({ handleEdit, handleSave, handleDelete, toDo, editing, editValue, setEditValue }) {

    return (
        <div>
            <ul>
                {toDo.map((toDo, index) => (
                    <li className='task' key={index}>
                        {editing === index ? (
                            <input
                                type="text"
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                            />
                        ) : (
                            toDo
                        )}
                        {editing === index ? (
                            <button onClick={() => handleSave(index)}><i className="fa-solid fa-floppy-disk"></i></button>
                        ) : (
                            <>
                                <button className="edit" onClick={() => handleEdit(index, toDo)}><i className="fa-solid fa-pen-to-square"></i></button>
                                <button className="delete" onClick={() => handleDelete(index)}><i className="fa-solid fa-trash-can"></i></button>
                            </>
                        )}
                    </li>))}
            </ul>
        </div>
    )
}

export default list
