import React from "react";

export const Input = props =>
  <div className={props.formGroupClass}>
    <label className='control-label'>{props.label}</label>
    <input type='text' className="form-control" name={props.name} onChange={props.handleChange} value={props.value} />
    <p className='control-label'>{props.errorText}</p>
  </div>;
