import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Switch,
    KeyboardAvoidingView,
 } from 'react-native'
import styles from './../../styles/styles'

class AddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adding: false,
            data: {
                text: "",
                date: "",
                done: false,
            },
        }
        this.handleStartAdding = this.handleStartAdding.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleStartAdding () {
        this.setState({adding: true})
    }

    handleInputChange (name, val) {
        let data = Object.assign({}, this.state.data)
        data[name] = val
        this.setState({
            data
        })
    }

    handleSubmit () {
        // validate data and then send
        let data = Object.assign({}, this.state.data)
        data.date = new Date (data.date)
        this.setState({
            data: {
                text: "",
                date: "",
                done: false,
            },
            adding: false
        })
        !this.props.onSubmit || this.props.onSubmit(data)
    }

    handleCancel () {
        this.setState({adding: false})
    }

    render () {
        return <View>
            {
                this.state.adding
                ? <KeyboardAvoidingView 
                    style={styles.addFormWrapper}
                    behavior="padding"
                    >
                    <View>
                        <Text>Task: </Text>
                        <TextInput value={this.state.data.text} 
                            onChangeText={this.handleInputChange.bind(this, 'text')}
                        />
                    </View>
                    <View>
                        <Text>Date: </Text>
                        <TextInput value={this.state.data.date}
                            onChangeText={this.handleInputChange.bind(this, 'date')}
                        />
                    </View>
                    <View>
                        <Text>Estado: </Text>
                        <Switch value={this.state.data.done}
                                onValueChange={this.handleInputChange.bind(this, 'done')}
                            />
                    </View>
                    <TouchableOpacity onPress={this.handleSubmit}><Text>Submit</Text></TouchableOpacity>
                    <TouchableOpacity onPress={this.handleCancel}><Text>Cancel</Text></TouchableOpacity>
                </KeyboardAvoidingView>
                : <TouchableOpacity onPress={this.handleStartAdding} style={styles.FAB}><Text style={styles.FABText}>+</Text></TouchableOpacity>
            }
        </View>
    }
}
export default AddForm;