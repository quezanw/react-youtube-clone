import React from 'react';
import { connect } from 'react-redux';
import { getTerm, fetchVideos } from '../actions' ;

class SearchBar extends React.Component {
  
  onInputChange = (event) => {
    this.props.getTerm(event.target.value);
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.fetchVideos(this.props.term);
  }
  
  render() {
    return (
      <div className="search-bar ui segment">
        <form
          className="ui form" 
          onSubmit={ this.onFormSubmit }>
          <div className="field">
            <label htmlFor="">Video Search</label>
            <input 
              type="text"
              className=""
              value={this.props.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { term: state.term};
}

export default connect(mapStateToProps, {getTerm, fetchVideos})(SearchBar);


