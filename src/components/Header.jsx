import React from 'react';
import icon from '../assets/images/icon-star.svg';
const Header = () => {
  return (
    <div>
      <img className="img-radius mb-4" src={icon} alt="" />

      <h1 className="text-white fs-3">How did we do?</h1>
      <p className="text-white fs-6 opacity">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </div>
  );
};

export default Header;
