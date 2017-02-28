import React from 'react';
import ReactDOM from 'react-dom';

class MyProfile extends React.Component {
  render () {
    return (
      <div>
        <p> MyProfile!</p>

        <p> User Number: {this.props.userNumber} </p>

        <button onClick={this.props.addOne}>Add one</button>
      </div>
      );
  }
}

module.exports = MyProfile;