import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getApiAction } from '../container/actionTypes/action';
import * as _ from 'lodash';

class SampleComponent extends Component {
  
  render() {
    return (
      <div className="counter">
        <button onClick={this.props.getApi}>get users</button>
    { _.isArray(this.props.list) ? 
      this.props.list.map((data,index) =>{
        return <li key = {index.toString()}>{data.firstName}</li>
      }) : null
    }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.reducer_1
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getApi : () => {dispatch(getApiAction())}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SampleComponent);
