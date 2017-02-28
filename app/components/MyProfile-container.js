import React from 'react';
import ReactDOM from 'react-dom';
import MyProfile from './MyProfile';
import { connect } from 'react-redux';

class MyProfileContainer extends React.Component {
  constructor(props) {
    super(props);

    this.addOne = this.addOne.bind(this);
  }

  addOne() {
    this.props.onAddOneClick(10);
  }

  render () {
    return <MyProfile userNumber={this.props.userNumber} addOne={this.addOne}/>;
  }
}

const mapStateToProps = function(store) {
  return {
    userNumber: store.userState.userNumber
  };
}

const mapDispatchToProps = function(dispatch) {
  return {
    onAddOneClick: function(id) {
      dispatch({
        type: 'ADD_ONE',
        userNumber: 1
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileContainer)