import React, { Component } from 'react'
import {View, Text, FlatList} from 'react-native'
import TodoItem from './Item'
import styles from './../../styles/styles'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index_editing: -1
        }
    }
    handleItemUpdate (index, data) {
        !this.props.onUpdate || this.props.onUpdate (index, data)
        this.setState({index_editing: -1})
    }
    handleItemRemove (index) {
        !this.props.onRemove || this.props.onRemove (index)
    }
    handleSomeEditing (index) {
        console.log ("handleSomeEditing", index)
        //this.setState({index_editing: index})
        !this.props.onEdit || this.props.onEdit(index)
    }
    renderItem (item, index) {
        //console.log("List renderItem", index)
        return <TodoItem key={"item" + index} 
                         data={item}
                         _isEditing={index === this.state.index_editing}
                         cantRemove={this.state.index_editing !== -1}
                         onEditing={this.handleSomeEditing.bind(this, index)}
                         onUpdate={this.handleItemUpdate.bind(this, index)}
                         onRemove={this.handleItemRemove.bind(this, index)}
               />
    }
    render () {
        return <View style={styles.todoList}>
            <FlatList
                contentContainerStyle={styles.todoList__container}
                data={this.props.list}
                keyExtractor={(item, index) => "kapa" + index}
                renderItem={
                    ({item, index}) => !this.props.filter 
                    ? this.renderItem(item, index) 
                    : (
                        this.props.filter(item) 
                        ? this.renderItem(item, index) 
                        : null
                    )
                }
            />
        </View>
    }
}
export default List;