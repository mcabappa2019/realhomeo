import React from 'react';

const LocationMap = () => {
  return (
    <div id="tm-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d921.4811489636602!2d88.30398535987159!3d22.507012112182874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027a227b8f25eb%3A0xf1283e442cef7d2a!2sSurya%20Sangha%20Club!5e0!3m2!1sen!2sin!4v1663781112235!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LocationMap;
