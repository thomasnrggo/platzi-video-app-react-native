import React, { Component } from 'react';
import {connect} from 'react-redux';

import MovieLayout from '../components/movie';
import Header from '../../sections/components/header';
import Player from '../../player/containers/player';
import Close from '../../sections/components/close';
import Detail from '../../videos/components/detail'


class Movie extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Header>
          <Close
            onPress={()=>{navigation.goBack()}}
          />
        </Header>
      )
    }
  }
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
        <Detail {...this.props.movie} />
      </MovieLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.video.selectedMovie,
  };
}

export default connect(mapStateToProps)(Movie);
