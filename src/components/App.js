import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Header } from './Header';
import { Nav } from './Nav';
import { getBoards } from '../apiCalls';
import BoardsScreen from './BoardsScreen';
import SearchScreen from './SearchScreen';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={{ marginTop: 20}}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 32}}>Welcome to Snowboard Sniper!</Text>
          <Text style={{color: 'white', textAlign: 'center'}}>Stay up to date with snowboard prices! Prices are taken from the-house</Text>
        </View>
        <Image style={{width: '90%', alignSelf: 'center'}} source={require('../images/maxresdefault.jpg')} />
        <Nav navigation={this.props.navigation} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  nav: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 100,
  },  
});

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Brands: BoardsScreen,
    Search: SearchScreen
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
