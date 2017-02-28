import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import SearchContainer from './Search-container';

class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {user: 0};
  }

  render () {
    return (
      <div>
        <Link to="/MyProfile">Go to my profile</Link>

        <p> Home!</p>

        <p> User Number: {this.props.userNumber} </p>

        <button onClick={this.props.addOne}>Add One</button>
        <SearchContainer/>
        
      </div>
      );
  }
}

module.exports = Home;