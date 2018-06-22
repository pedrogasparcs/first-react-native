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
                color: "",
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
        return <Modal animationType="slide"
                      transparent={true} 
                      visible={this.state.modalVisible}
                      onRequestClose={this.handleCancel}
                      style={styles.modal}>
            <View 
                style={[styles.addFormWrapper]}>
                <View style={styles.addFormContainer}>
                    <View style={{flexDirection: 'row', marginVertical: 10,}}>
                        <TextInput value={this.state.data.text} 
                                   onChangeText={this.handleInputChange.bind(this, 'text')}
                                   style={{flex: 1,}}/>
                    </View>
                    <View style={{flexDirection: 'row', marginVertical: 10,}}>
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
                        <Swatches value={this.state.data.color} onChange={this.handleInputChange.bind(this, 'color')}/>
                    </View>
                    <View style={{flexDirection: 'row', marginVertical: 10,}}>
                        <Text style={{fontFamily: 'open-sans', fontSize: 16}}>Is it done?</Text>
                        <Switch value={this.state.data.done}
                                onValueChange={this.handleInputChange.bind(this, 'done')}
                            />
                    </View>
                    <View style={[styles.modalBtnsWrapper, {marginVertical: 10,}]}>
                        <TouchableOpacity onPress={this.handleCancel} style={styles.modalBtn}><Text style={styles.modalBtnText}>CANCEL</Text></TouchableOpacity>
                        <TouchableOpacity onPress={this.handleSubmit} style={[styles.modalBtn, styles.modalBtnSubmit]}><Text style={[styles.modalBtnText, styles.modalBtnTextSubmit]}>SUBMIT</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    }
}

const Swatches = ({value, onChange}) => {
    const swatches = [
        '#f00', '#0f0', '#00f', '#000'
    ]
    return swatches.map ((color, index) => <Swatch key={"color" + index} color={color} isSelected={color === value} onSelect={() => !onChange || onChange(color)}/>)
}

const Swatch = ({color, isSelected, onSelect}) => {
    return <TouchableOpacity onPress={() => !onSelect || onSelect()}>
        <View style={{borderWidth: 4, borderColor: isSelected ? '#aaa' : '#fff', backgroundColor: color, width: 40, height: 40}}></View>
    </TouchableOpacity>
}

export default Form;