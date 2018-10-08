import React from 'react';

function TodoTableData({text,done,id,updateTask}) {
    
    const doneValue = done;
    if (doneValue === undefined) {
        return (
            <td key={id}>{text}</td>
        );
      } else if (doneValue === true){
        return (
            <React.Fragment>
                <td key={id}>{text}</td>
                <td>
                    <button onClick={()=> updateTask(id)} className="toggle_todo" id="mark_ic" data-id={id}>Complete</button>
                    </td>
            </React.Fragment>
        );
      } else{
        return (
            <React.Fragment>
                <td key={id}>{text}</td>
                <td><button className="toggle_todo" onClick={()=> updateTask(id)} id="mark_c" data-id={id}>Incomplete</button></td>
            </React.Fragment>
        );
      }
  }

export default TodoTableData;