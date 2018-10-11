import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actionCreators from '../../store/actions';

class Shared extends Component {
  state = {
    inputText: '',
    shareId: ''
  };

  componentDidMount = () => {
    let pathname = window.location.pathname;
    let shareId = pathname.substring(pathname.lastIndexOf('/') + 1);
    if (!shareId) alert('Invalid URL!');
    else this.props.onShared(shareId);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAdd(this.state.inputText);
  };

  handleChange = event => {
    this.setState({ inputText: event.target.value });
  };

  render() {
    let content = '';
    content = this.props.content
      ? this.props.content.map(item => <h2 key={item}>{item}</h2>)
      : null;
    return (
      <div style={{ marginTop: '10rem' }}>
        {this.state.sharedId ? (
          <Redirect to={'/shared/' + this.props.shareId} />
        ) : null}
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
    content: state.share.content,
    shareId: state.share.sharedId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onShared: shareId => dispatch(actionCreators.shared(shareId)),
    onAdd: inputText => dispatch(actionCreators.addContent(inputText))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shared);
