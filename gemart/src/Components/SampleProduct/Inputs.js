import React from "react";

export const InputBox = ({ id, type, name, handleClick, isChecked }) => {
  return (
    <div className="col-md-10 mb-4">
    <label className="mb-2" id={id}>Name</label>
      <input id={id}
      name={name}
      type={type}
      onChange={handleClick}
      checked={isChecked}
    />
    </div>
  );
};