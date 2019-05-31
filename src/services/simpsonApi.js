//why dont we do export default in here?
export const fetchSimpsonQuotes = () => {
  //hard coded 10 quotes to be returned
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=10')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to get quotes';
      return json;
    })
    .then(json => json.map(quote => ({
      quote: quote.quote,
      character: quote.character,
      image: quote.image
    })));
};
