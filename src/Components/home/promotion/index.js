import React from 'react';
import PromotionAimation from './Animation';
import Enroll from './Enroll';

const Promotion = () => {
  return (
    <div className="promotion_wrapper" style={{ background: '#fff' }}>
      <div className="container">
        <PromotionAimation />
        <Enroll />
      </div>
    </div>
  );
};

export default Promotion;
