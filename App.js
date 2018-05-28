import React from 'react';
import { View } from 'react-native';
import styles, { version } from './styles/styles'
import strings from './strings/strings'
import MyTextArea from './componentsLiftState/MyTextArea'
import RandomizeButton from './componentsLiftState/RandomizeButton';

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
      <View style={styles.masterContainer}>
        <MyTextArea text="Qualquer coisa ao que nós fizemos!!!!!"/>
        <RandomizeButton onMyPress={this.handleRandomization}/>
        <RandomizeButton onMyPress={this.handleButtonRandomClick}/>
        <RandomizeButton/>
      </View>
    );
  }
}



