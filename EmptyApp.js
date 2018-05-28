import React from 'react';
import { 
  View, 
} from 'react-native';
import styles, { version } from './styles/styles'
import strings from './strings/strings'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ""
    }
  }
  render() {
    return (
      <View style={styles.masterContainer}>
      </View>
    );
  }
}



