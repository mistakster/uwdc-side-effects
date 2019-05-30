import React from 'react';
import { connect } from 'react-redux';
import MarkerList from './MarkerList';

function mapStateToProps(state) {
  return state.markers;
}

function mapDispatchToProps(dispatch) {
  return {
    addMarker() {
      dispatch({
        type: 'LEAFLET_CREATE_RANDOM_MARKER'
      });
    }
  };
}

const enhance = connect(mapStateToProps, mapDispatchToProps);

const MarkerPanel = ({ addMarker, list }) => {
  return (
    <div>
      <div>
        <button onClick={addMarker} className="btn btn-success" type="button">
          Add marker
        </button>
      </div>
      <div>
        <MarkerList list={list}/>
      </div>
    </div>
  );
};

export default enhance(MarkerPanel);
