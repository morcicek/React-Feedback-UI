import React from 'react';

const FeedbackStats = ({ tasks }) => {
  const calcRating = (arr) => {
    const total = arr.reduce((acc, curVal) => acc + curVal.rating, 0);
    // .reduce((acc, curVal) => Number(acc + curVal), 0);
    // console.log(total);
    return (total / arr.length).toFixed(1);
  };

  return (
    <>
      {tasks.length > 0 && (
        <div className="d-flex justify-content-between text-white">
          <p>{tasks.length} Reviews</p>
          <p>
            Average Ratings{' '}
            <strong className="fs-6">{calcRating(tasks)}</strong>
          </p>
        </div>
      )}
    </>
  );
};

export default FeedbackStats;
