import React from 'react';
import Card from './Card';
import thanksImg from '../assets/images/illustration-thank-you.svg';

const ThanksPage = ({ rating }) => {
  return (
    <Card>
      <div className="text-center">
        <img src={thanksImg} alt="Thank you image" />
      </div>
      <div className="mt-4">
        <p className="text-center">
          <span className="select">You selected {rating} out 10</span>
        </p>
        <h1 className="text-light fs-3 text-center mt-4">Thank you!</h1>
        <p className="text-white text-center opacity mt-2">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </Card>
  );
};

export default ThanksPage;
