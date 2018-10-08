import React from 'react';
import TodoTableRow from '../../molecules/todolist/todo_table_row';
import TodoTableHead from '../../atoms/todolist/todo_table_th';
import TodoTableData from '../../atoms/todolist/todo_table_td';

const TodoTable = ({todoComplete,updateTask,filtertype}) => {
    let taskArray = [];
    if(filtertype === "alltasks"){
        taskArray = todoComplete;
    }else  if(filtertype === "completed"){
        taskArray = todoComplete.filter(item => item.done===true);
    }else{
        taskArray = todoComplete.filter(item => item.done===false);
    }
    return(
    <table className="table-layout">
        <tbody>
            <TodoTableRow>
                <TodoTableHead>Task Name</TodoTableHead>
                <TodoTableHead>Task Status</TodoTableHead>
            </TodoTableRow>
            {
                taskArray.map(a => 
                {
                    return(
                        <TodoTableRow key={a.id} >
                            <TodoTableData text={a.task} done={a.done} id={a.id} updateTask={updateTask}  />
                        </TodoTableRow>
                    )
                })
            }
        </tbody>
    </table>
    );
};

export default TodoTable;