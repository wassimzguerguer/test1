import React, { useState } from "react";
import "./buttonUpload.css";

export const ButtonUpload = ({ id, onChange, label }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      onChange(file); // Call the provided onChange function with the selected file
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onChange(file); // Call the provided onChange function with the selected file
    }
  };

  return (
    <div
      className={`button-upload ${isDragging ? "dragging" : ""}`}
      onDragEnter={handleDragEnter}
      onDragOver={(e) => e.preventDefault()}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id={id}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <label htmlFor={id} className="upload-label">
        {label}
      </label>
      {isDragging && <div className="drag-indicator">Drop here</div>}
    </div>
  );
};
