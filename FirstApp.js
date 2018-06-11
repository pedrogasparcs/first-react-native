import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  ScrollView, 
  Image,
  Button,
  Alert,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  FlatList,
  SectionList,
} from 'react-native';
import Agradecimento from './components/Agradecimento'
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
        <View style={{flex: 5}}>
          <SectionList
            sections={[
              {title: 'D', data: [
                'Devin'
              ]},
              {title: 'F', data: [
                'Ferdinando',
                'Fernanda',
                'Fernando',
                'Ferodo',
                'Francisca',
                'Francisco',
                'Ferdinando',
                'Fernanda',
                'Fernando',
                'Ferodo',
                'Francisca',
                'Francisco',
                'Ferdinando',
                'Fernanda',
                'Fernando',
                'Ferodo',
                'Francisca',
                'Francisco',
                'Ferdinando',
                'Fernanda',
                'Fernando',
                'Ferodo',
                'Francisca',
                'Francisco',
              ]},
              {title: 'J', data: [
                'Jackson', 
                'James', 
                'Jillian', 
                'Jimmy', 
                'Joel', 
                'John', 
                'Julie'
              ]},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
        </View>
        <View style={{flex: 5, borderTopColor: "#000", borderTopWidth: 10}}>
          <FlatList
            data={[
              {name: 'Devin'},
              {name: 'Jackson'},
              {name: 'James'},
              {name: 'Joel'},
              {name: 'John'},
              {name: 'Jillian'},
              {name: 'Jimmy'},
              {name: 'Julie'},
            ]}
            keyExtractor={(item, index) => "k" + index}
            renderItem={({item}) => <Text style={styles.item}>{item.name}!!</Text>}
          />
        </View>
        <View style={{flex: 1}}>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            value={this.state.text}
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
          <View style={{width: 100}}>
            <Button
              onPress={() => {
                Alert.alert('You tapped the button!');
              }}
              title="Press Me"
            />
          </View>
          <View style={{width: 100}}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('You tapped the touchable!');
              }}
            >
              <Text>Press Me Touchable</Text>
            </TouchableOpacity>
          </View>

          <TouchableNativeFeedback onPress={() => {}}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                {Platform.OS === 'android' ? 'é um android' : 'não é um android'}
                {Platform.OS === 'ios' ? 'é um ios' : 'não é um ios'}
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={{flex: 2, backgroundColor: '#ddd'}}>
          <ScrollView>
            <View style={styles.container}>
              <Text style={styles.textStyle}>{version} Open up App.js to start working on your app!</Text>
              <Text style={[styles.textStyle, styles.textRed]}>Changes you make will automatically reload.</Text>
              <Text>Shake your phone to open the developer menu. asdfasdf</Text>
              <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}} 
                    style={{width: 100, height: 100}}/>
              <Agradecimento pessoa="Jorge"/>
              <Agradecimento pessoa="Tiago"/>
              <Agradecimento pessoa="Mariana"/>
              <Agradecimento pessoa="Xavier"/>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}



