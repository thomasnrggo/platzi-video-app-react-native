import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux'
import API from '../../../utils/api'
import { NavigationActions } from 'react-navigation'

 class Search extends Component {
  state = {
    text: ''
  }
  handleSubmit = async () => {
    const movies = await API.searchMovie(this.state.text)
    console.log(movies);
    this.props.dispatch({
      type: 'SEARCH_LIST',
      payload: {
        // suggestionList: movies
        searchList: movies
      }
    })
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Search',
      })
    )
  }
  handleChangeText = (text) => {
    this.setState({
      text
    })
  }
  render() {
    return (
      <TextInput
        placeholder="Buscas tu pelicula favorita"
        autoCorrect={false}
        autoCapitalize="none"
        underlineColorAndroid="transparent"
        onSubmitEditing={this.handleSubmit}
        onChangeText={this.handleChangeText}
        style={styles.input}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea'
  }
})

export default connect(null)(Search)
