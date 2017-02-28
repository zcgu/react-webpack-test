import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (
      <div>
        <p> Search!</p>

        <p> User Number: {this.props.userNumber} </p>

        <button onClick={this.props.addOne}>Add one</button>
      </div>
      );
  }
}

module.exports = Search;