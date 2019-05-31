import React from 'react';
import PropTypes from 'prop-types';


function SimpQuote({ quote }) {
  const { character, image } = quote;
  return (
    <>
    <img src={image} />
    <p>{character}</p>
    <p>{quote.quote}</p>
    </>
  );
}

SimpQuote.propTypes = {
  quote: PropTypes.object.isRequired
};

export default SimpQuote;


