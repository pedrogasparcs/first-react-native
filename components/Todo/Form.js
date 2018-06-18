import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Switch,
    KeyboardAvoidingView,
    Modal,
 } from 'react-native'
import DatePicker from 'react-native-datepicker'
import styles from './../../styles/styles'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adding: false,
            itemEditingIndex: -1,
            modalVisible: false,
            data: {
                text: "",
                date: "",
                done: false,
            },
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    componentWillReceiveProps (newProps) {
        this.setState({
            itemEditingIndex: newProps.editingItemIndex,
            data: newProps.editingItem !== null 
            ? newProps.editingItem 
            : {
                text: "",
                date: "",
                done: false,
            },
            adding: newProps.adding,
            modalVisible: newProps.adding || (newProps.editingItemIndex !== -1 && newProps.editingItem !== null)
        })
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
        !this.props.onSubmit || this.props.onSubmit(data)
    }

    handleCancel () {
        !this.props.onCancel || this.props.onCancel()
    }

    render () {
        return <Modal 
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={this.handleCancel}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f00'}}>
            <KeyboardAvoidingView 
                style={[styles.addFormWrapper]}
                behavior="padding"
                >
                <View style={styles.addFormContainer}>
                    <View>
                        <TextInput value={this.state.data.text} 
                            onChangeText={this.handleInputChange.bind(this, 'text')}
                        />
                    </View>
                    <View>
                        <DatePicker
                            style={{width: 200}}
                            date={this.state.data.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="2016-05-01"
                            maxDate="2019-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                            }}
                            onDateChange={this.handleInputChange.bind(this, 'date')}
                        />
                    </View>
                    <View>
                        <Switch value={this.state.data.done}
                                onValueChange={this.handleInputChange.bind(this, 'done')}
                            />
                    </View>
                    <TouchableOpacity onPress={this.handleSubmit}><Text>Submit</Text></TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    }
}
export default Form;