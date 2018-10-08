import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions';

class Shared extends Component {
  state = {};
  componentDidMount = () => {
    this.props.onShared('From State');
  };
  render() {
    return (
      <div style={{ marginTop: '10rem' }}>
        Shared <h1>{this.props.content}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    content: state.share.content
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onShared: content => dispatch(actionCreators.shared(content))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shared);
