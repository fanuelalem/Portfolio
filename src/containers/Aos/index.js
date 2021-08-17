import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './../../index.css';

const AosScroll = () => {
  useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);
  return (
    <div>
      <div data-aos="slide-up" className="imagefade"></div>
    </div>
  );
};

export default AosScroll;
