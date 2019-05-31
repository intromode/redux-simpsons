import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getQuotesSelector } from '../selectors/quotesSelectors';
import Quotes from '../components/Quotes';
import { getSimpsonQuotes } from '../actions/simpsonActions';


class ConnectSimpsonQuotes extends PureComponent {
  //what is fetch for?
  //WHERE IS QUOTES COMING FROM??!!! where does the top level component get ITS SHIT FROM
  //gets it from state from provider store  
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    quotes: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <Quotes quotes={this.props.quotes} />
    );
  }
}

const mapStateToProps = state => ({
  quotes: getQuotesSelector(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(){
    dispatch(getSimpsonQuotes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectSimpsonQuotes);
