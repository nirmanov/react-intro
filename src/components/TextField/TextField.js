import React from "react";
import "./style.css";

const TextField = ({ name, onChange, onBlur, error, label }) => (
  <div className="input-group">
    <label>
      {label}
      <input className="input"
        type="text"
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <div className="error">{error}</div>}
    </label>
  </div>
);

export default TextField;