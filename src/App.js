import React from 'react';
import { connect } from 'react-redux';

const Page = (props) => {
  return (
    <div> Estamos no ar...</div>
  );
}

const mapStateToProps = (state) => {
  return {
    user:state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default connect(mapDispatchToProps, mapStateToProps)(Page);