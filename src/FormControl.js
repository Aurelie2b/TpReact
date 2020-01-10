import React from 'react';

function FormControl(props) {
    return (
       <div className="form-group">
           <label>{props.label}</label>
           <input className="form-control" />
       </div>

    );
}

export default FormControl;
