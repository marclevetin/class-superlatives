import React from "react";

export const Input = props =>
  <div className="form-group">
    {props.label}
    <input className="form-control" name={props.name} onChange={props.handleChange} value={props.value} />
  </div>;
