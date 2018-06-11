import React from 'react';
import { View, ScrollView } from 'react-native';
import styles, { version } from './styles/styles'
import strings from './strings/strings'
import MyTextArea from './componentsLiftState/MyTextArea'
import RandomizeButton from './componentsLiftState/RandomizeButton';
import TodoPage from './components/Todo/Page'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ""
    }
    this.handleRandomization = this.handleRandomization.bind(this)
    this.handleButtonRandomClick = this.handleButtonRandomClick.bind(this)
  }
  handleRandomization () {
    console.log("handleRandomization")
  }
  handleButtonRandomClick () {
    console.log("handleButtonRandomClick")
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.masterContainer}>
        <TodoPage/>
      </ScrollView>
    );
  }
}



