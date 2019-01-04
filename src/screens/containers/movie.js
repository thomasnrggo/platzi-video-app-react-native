import React, { Component } from 'react';

import MovieLayout from '../components/movie';
import Header from '../../sections/components/header';
import Player from '../../player/containers/player';
import Close from '../../sections/components/close';
import {connect} from 'react-redux';

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
      </MovieLayout>
    );
  }
}

export default connect(null)(Movie);
