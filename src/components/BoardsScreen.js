import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  Linking, 
  Button, 
  TouchableOpacity, 
  Image, 
  Modal, 
  TouchableHighlight, 
  TextInput, 
  Alert, 
  ActivityIndicator,
 } from 'react-native';
import { getBoards } from '../apiCalls';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  }
})

class BoardsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      boards: [],
      isLoading: true,
      showSearch: false,
      search: '',
    }
  }

  componentDidMount = () => {
    getBoards()
      .then((boards) => {
        this.setState({ boards, isLoading: false });

      })
      .catch((err) => console.log(err));
  }

  returnBoardElements = () => {
    if(this.state.boards.length) {
      const boardElements = this.state.boards.map((board, i) => {
        return (
          <View key={i} style={styles.container}>
            <Text style={styles.text}>{board.name}</Text>
            <Text style={styles.text}>${board.price}</Text>
            <Button title="View" onPress={ ()=>{ Linking.openURL(board.url)}} />
          </View>
        );
      });
      return boardElements;
    }
  }

  returnBoardSearch = () => {
    const boardName = this.state.search;
    const results = this.state.boards.filter((board) => board.name.toLowerCase().includes(boardName.toLowerCase()));
    if(boardName !== '') {
      return results.map((board, i) => {
        return (
          <View key={i} style={styles.container}>
            <Text style={styles.text}>{board.name}</Text>
            <Text style={styles.text}>${board.price}</Text>
            <Button title="View" onPress={ ()=>{ Linking.openURL(board.url)}} />
          </View>
        )
      })
    }
  }

  render() {
    const boards = this.returnBoardElements();
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.showSearch}
          onRequestClose={() => {
            this.setState({ showSearch: false })
            Alert.alert('Search has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Search For Boards By Name</Text>
              <TextInput placeholder="name" onChangeText={(search) => {
                this.setState({ search });
              }}/>
              <TouchableHighlight
                onPress={() => {
                  this.setState({ showSearch: false });
                }}>
                <Text>Close Search</Text>
              </TouchableHighlight>
              <ScrollView>
                {this.returnBoardSearch()}
              </ScrollView>
            </View>
          </View>
        </Modal>
        <ScrollView>
          {!this.state.isLoading && boards}
        </ScrollView>
        <TouchableOpacity style={{backgroundColor: 'white', position: 'absolute', bottom: 5, right: 15, borderRadius: 5}} onPress={() => this.setState({ showSearch: true })}>
          <Image style={{width: 64, height: 64}} source={require('../images/search.png')} />
        </TouchableOpacity>
        <ActivityIndicator animating={this.state.isLoading} size="large" color="#0000ff" />
      </View>
    );
  }
}

export default BoardsScreen;