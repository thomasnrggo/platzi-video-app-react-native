import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';
import Layout from '../../videos/components/suggestion-list-layout';
import Empty from '../../videos/components/empty';
import Separator from '../../sections/components/vertical-separator';
import Suggestion from '../../videos/components/suggestion';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Header from '../../sections/components/header'
import Close from '../../sections/components/close'
import { HeaderBackButton } from'react-navigation'

function mapStateToProps(state) {
  return {
    list: state.video.searchList
  }
}

class Search extends Component {
  static navigationOptions = ({navigation}) => {
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
  keyExtractor = item => item.id.toString()
  renderEmtpy = () => <Empty text="No hay sugerencias :(" />
  itemSeparator = () => <Separator />
  viewMovie = (item) => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item,
      }
    })
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Movie',
      })
    )
  }
  renderItem = ({item}) => {
    return (
      <Suggestion
        {...item}
        onPress={()=> { this.viewMovie(item) }}
      />
    )
  }
  render() {

    return (
      <Layout
        title='Resultados de busqueda'
        >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

export default connect(mapStateToProps)(Search)
