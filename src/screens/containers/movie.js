import React, { Component } from 'react';
import {connect} from 'react-redux';

import MovieLayout from '../components/movie';
import Header from '../../sections/components/header';
import Player from '../../player/containers/player';
import Close from '../../sections/components/close';
import Detail from '../../videos/components/detail'


class Movie extends Component {
  closeMovie = (props) => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null,
      }
    })
  }
  render() {
    return (
      <MovieLayout>
        <Header>
          <Close
            onPress={this.closeMovie}
          />
        </Header>
        <Player />
        <Detail {...this.props.movie} />
      </MovieLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.selectedMovie,
  };
}

export default connect(mapStateToProps)(Movie);
