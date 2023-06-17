import React from 'react';
import './Card.css';
const Card = ({ taskObj, index, deleteTask, id }) => {

    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ]

    const handleDelete = () => {
        deleteTask(id)
    }

    const date = new Date(taskObj.remindAt);



    return (
        <div className="card-wrapper mr-5">
            <div className="card-top" style={{ backgroundColor: colors[index % 5].primaryColor }}></div>
            <div className="task-holder">
                <span className="card-header" style={{ backgroundColor: colors[index % 5].secondaryColor, borderRadius: "10px" }}>{taskObj.reminderName}</span>
                <p className="mt-3">{taskObj.reminderDescription}</p>
                <p className="mt-3">{date.toLocaleString("en-US", { timezone: "Asia/Kolkata" })}</p>
                <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
                    <i className="fas fa-trash-alt" style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }} onClick={handleDelete}></i>
                </div>
            </div>
        </div>
    );

};

export default Card;