import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native'
import Swipeout from 'react-native-swipeout';
import {formatDate} from './../../helpers'
import styles from './../../styles/styles'

class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            editing: false,
        }
        this.handleEdit = this.handleEdit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleStateChange = this.handleStateChange.bind(this)
        this.waitForClose = this.waitForClose.bind(this)
    }

    componentWillReceiveProps (newProps) {
        this.setState({data: newProps.data})
    }

    handleEdit () {
        if(this.props.isEditing) {
            this.handleSubmit ()
        }
        else {
            !this.props.onEditing || this.props.onEditing()
        }
    }

    handleInputChange (name, value) {
        let data = Object.assign({}, this.state.data)
        data[name] = value
        this.setState({
            data
        })
    }

    handleSubmit () {
        // validate data and then send
        let data = Object.assign({}, this.state.data)
        data.date = new Date (data.date)
        !this.props.onUpdate || this.props.onUpdate(data)
    }

    handleStateChange () {
        let data = Object.assign({}, this.state.data)
        data.done = !data.done
        this.setState({
            data
        })
        !this.props.onUpdate || this.props.onUpdate(data)
    }

    waitForClose (fn) {
        return () => {
            setTimeout(fn, 400)
        }
    }

    render () {
        //console.log("Render Item", this.props)
        const {text, date, done} = this.state.data

        var swipeLeftBtns = [
            {
              component: <SwipeButton text="Edit" textStyle={styles.swipeBtn__text}/>,
              type: 'secondary',
              onPress: this.waitForClose(this.handleEdit),
            },
            {
              component: <SwipeButton text="Remove" textStyle={styles.swipeBtn__text}/>,
              type: 'delete',
              onPress: this.waitForClose(this.props.onRemove),
            },
          ]
          var swipeRightBtns = [
              {
                component: <SwipeButton text="Mark as Done" textStyle={styles.swipeBtn__text}/>,
                type: 'primary',
                onPress: this.waitForClose(this.handleStateChange),
              }
            ]
        return <Swipeout autoClose={true} 
                         backgroundColor="#fff" 
                         right={swipeLeftBtns}
                         left={swipeRightBtns}
                         sensitivity={10}>
            <View style={styles.item__wrapper}>
                <View style={{paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.item__text}>{text}</Text>
                    <Text>{formatDate(date)}</Text>
                </View>
            </View>
        </Swipeout>
    }
}
export default Item;


const SwipeButton = ({text}) => <View style={styles.swipeBtn__wrapper}>
    <Text style={styles.swipeBtn__text}>{text}</Text>
</View>