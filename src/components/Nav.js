import React from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

export const Nav = (props) => {
  return (
    <View style={styles.nav}>
        <View style={styles.button}>
          <Button
            title="Home"
            onPress={() => props.navigation.navigate('Home')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Boards"
            onPress={() => props.navigation.navigate('Brands')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Search"
            onPress={() => props.navigation.navigate('Search')}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    position: 'absolute',
    top: '94%',
    width: '100%',
  },
  button: {
    width: '33%',
  }
  
});