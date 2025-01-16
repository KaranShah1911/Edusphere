// src/components/Contestitem.js
import React from 'react';

const Contestitem = ({ name, startTime, duration, contestUrl }) => {
  return (
    <div className="my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <strong>Start Time:</strong> {new Date(startTime * 1000).toLocaleString()} <br />
            <strong>Duration:</strong> {Math.floor(duration / 3600)} hours {Math.floor((duration % 3600) / 60)} minutes
          </p>
          <a href={contestUrl} target="_blank" rel="noreferrer" className="btn btn-dark">View Contest</a>
        </div>
      </div>
    </div>
  );
};

export default Contestitem;
