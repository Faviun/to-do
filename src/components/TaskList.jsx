import React from "react";
import Task from "./Task";

export class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        };
    }

    addTask = () => {
        const newTasks = [...this.state.tasks];
        newTasks.push("New Task");
        this.setState({tasks: newTasks});
    }

    taskEdit = (index, text) => {
        const newTasks = [...this.state.tasks];
        newTasks[index] = text;
        this.setState({ tasks: newTasks });
    }

    taskRemove = (index) => {
        const newTasks = [...this.state.tasks];
        newTasks.splice(index, 1);
        this.setState({tasks: newTasks});
    }

    render() {
        return (
            <div className="field">
                <button onClick={this.addTask} className="btn new">Add new task</button>
                {this.state.tasks.map((item, imdex) => {
                    return (<Task
                        index={this.index}
                        removeTask={this.taskRemove} 
                        updateTask={this.taskEdit} 
                            >{item}
                        </Task>
                    );
                })}
            </div>
        )
    }
}
