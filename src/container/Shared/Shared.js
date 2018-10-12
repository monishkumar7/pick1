import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions';

class Shared extends Component {
  state = {
    inputText: '',
    sharedId: ''
  };

  componentDidMount = () => {
    let pathname = window.location.pathname;
    let sharedId = pathname.substring(pathname.lastIndexOf('/') + 1);
    if (!sharedId) alert('Invalid URL!');
    else {
      this.setState({ sharedId: sharedId });
      this.props.onFetchShared(sharedId);
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAddChoice(this.state.sharedId, this.state.inputText);
  };

  handleChange = event => {
    this.setState({ inputText: event.target.value });
  };

  render() {
    let content = '';
    content = this.props.choices
      ? this.props.choices.map(item => <h2 key={item}>{item}</h2>)
      : null;
    return (
      <div style={{ marginTop: '10rem' }}>
        Shared <br />
        {content}
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
        </form>
        {this.state.shareId}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    choices: state.share.choices,
    sharedId: state.share.sharedId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchShared: sharedId => dispatch(actionCreators.fetchShared(sharedId)),
    onAddChoice: (sharedId, inputText) =>
      dispatch(actionCreators.addChoice(sharedId, inputText))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shared);
