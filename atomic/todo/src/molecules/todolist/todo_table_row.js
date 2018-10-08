import React from 'react';
const TodoTableRow = ({children}) => (
    <tr key = {children.id}>
        {children}
    </tr>
);

export default TodoTableRow;