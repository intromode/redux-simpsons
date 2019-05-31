import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

function Quotes({ quotes }) {
  console.log(quotes);
  //is allQuotes an array of the lists? if so then how does is display in the second return without us looping through the array
  const allQuotes = quotes.map(quote => {
    return (
      <li key={quote.quote}>
        <Quote quote={quote} />
      </li>
    );
  });

  return (
    <>
    {allQuotes}
    </>
  );
}


Quotes.propTypes = {
  quotes: PropTypes.array.isRequired
};

export default Quotes;
