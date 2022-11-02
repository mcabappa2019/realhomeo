import React from 'react';
import Contact from '../src/components/sections/Contact';
import LocationMap from '../src/components/sections/LocationMap';
import Appointment from '../src/components/sections/Appointment';

const ContactUs = () => {
  return (
    <>
      <Contact />
      <Appointment />
      <div className="empty-space col-md-b100 col-xs-b70"></div>
      <LocationMap />
    </>
  );
};

export default ContactUs;
