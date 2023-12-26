import React from 'react';
import { TiDelete } from 'react-icons/ti';

const Feedbacks = ({ tasks, rating, handleDelete }) => {
  return (
    <>
      {tasks.map((item) => {
        const { id, text, rating } = item;
        return (
          <div className="card mt-3 p-3 card-size bg-card">
            <div key={id} className="card-body">
              <p className="card-text">{text}</p>
              <span className="border border-0 border-black radius-rating text-center align-middle">
                {rating}
              </span>
              <TiDelete className="icon" onClick={() => handleDelete(id)} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Feedbacks;
