import React, { Component } from 'react'
import {View, FlatList} from 'react-native'
import TodoItem from './Item'
//import './../css/List.css'

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
        this.setState({index_editing: index})
    }
    renderItem (item, index) {
        console.log("List renderItem", index)
        return <TodoItem key={"item" + index} 
                         data={item}
                         isEditing={index === this.state.index_editing}
                         cantRemove={this.state.index_editing !== -1}
                         onEditing={this.handleSomeEditing.bind(this, index)}
                         onUpdate={this.handleItemUpdate.bind(this, index)}
                         onRemove={this.handleItemRemove.bind(this, index)}
               />
    }
    render () {
        console.log ("Render List", this.state.index_editing)
        return <View className="todo-list">
            <FlatList
                data={this.props.list}
                keyExtractor={(item, index) => "k" + index}
                renderItem={
                    ({item, index}) => !this.props.filter 
                    ? this.renderItem(item, index) 
                    : (
                        this.props.filter(item) 
                        ? this.renderItem(item, index) 
                        : null
                    )
                }
            >
            </FlatList>
        </View>
    }
}
export default List;