//will use your fetch from api function to change your state/store with dispatch. Once you get response from fetch, you'll dispatch with type and payload. 

import { fetchSimpsonQuotes } from '../services/simpsonApi';


//where does dispatch come from?
export function getSimpsonQuotes() {
  return function(dispatch) {
    return fetchSimpsonQuotes()
      .then(quotesList => {
        dispatch({
          type: 'FETCH_QUOTES',
          payload: quotesList
        });
      });
  };
}
