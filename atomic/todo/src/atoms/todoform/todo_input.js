import React from 'react';
const Inputbox = ({placeholdertext, name, onchange, id}) => (
    <input className="input-class" type="text" id={id} name={name} placeholder={placeholdertext} onChange={onchange} />
);

export default Inputbox;