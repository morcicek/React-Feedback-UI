import React, { useState } from 'react';

const RatingForm = ({ select, onSubmit, input, setInput }) => {
  const [selected, setSelected] = useState(10);
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="d-flex justify-content-center gap-4 mobile">
        {Array.from({ length: 10 }, (_, i) => (
          <>
            <input
              type="radio"
              className="btn-check"
              id={`num${i + 1}`}
              name="rating"
              value={i + 1}
              onChange={handleChange}
              checked={selected === i + 1}
            />
            <label className="text-center circle" htmlFor={`num${i + 1}`}>
              {i + 1}
            </label>
          </>
        ))}
      </div>
      <div className="input-group mb-3 mt-4 ">
        <input
          type="text"
          className="form-control bg-secondary text-white p-2"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="btn primary d-block mt-4 w-100 radius spacing"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default RatingForm;
