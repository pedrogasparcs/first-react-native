import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native'
import {formatDate} from './../../helpers'

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

    render () {
        console.log("Render Item", this.props)
        const {text, date, done} = this.state.data
        return <View style={{marginBottom: 10, paddingVertical: 20,}}>
            <View style={{paddingHorizontal: 20, flexDirection: 'row'}}>
                <View style={{marginRight: 10}}>
                    <Text>{text}</Text>
                </View>
                <View>
                    <Text>{formatDate(date)}</Text>
                </View>
            </View>
            <View style={{paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={this.handleStateChange}><Text>Toggle State</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.handleEdit}><Text>Edit</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.props.onRemove} disabled={this.props.cantRemove}><Text>Remove</Text></TouchableOpacity>
            </View>
        </View>
    }
}
export default Item;