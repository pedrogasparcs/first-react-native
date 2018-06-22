import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Font } from 'expo';
import styles, { version } from './styles/styles'
import strings from './strings/strings'
import MyTextArea from './componentsLiftState/MyTextArea'
import RandomizeButton from './componentsLiftState/RandomizeButton';
import TodoPage from './components/Todo/Page'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fontLoaded: false
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('./assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
      'open-sans': require('./assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.masterContainer}>
      {
        !!this.state.fontLoaded
        ? <TodoPage/>
        : <Text>Loading...</Text>
      }
      </View>
    );
  }
}