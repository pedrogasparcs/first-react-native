import React, { Component } from 'react'
import {View, Text, TouchableOpacity, FlatList} from 'react-native'
import TodoList from './List'
import TodoForm from './Form'
import styles from './../../styles/styles'

/* ideia da Teresa, uma task pode ter N categorias e as categorias podem ter uma cor atribuída */
var estado_geral = {
  nextid_categoria: 2,
  categorias: [
    {
      id: 0,
      nome: "xpto",
      cor: "#fff"
    },
    {
      id: 1,
      nome: "xpti",
      cor: "#f00"
    }
  ],
  nextid_estado: 2,
  estados: [
    {
      id: 0,
      designacao: "feito",
      prepend: "v",
    },
    {
      id: 1,
      designacao: "urgente",
      prepend: "!!!",
    },
  ],
  tasks: [
    {
      descricao: "comer amendoins",
      data: "2017/08/03",
      estado: [0],
      categorias: [0, 1]
    }
  ],
}

class Page extends Component {
  constructor (props) {
    super(props)
    this.state = {
      item_to_edit: -1,
      adding: false,
      list: [
        {
          text: "teste",
          date: new Date(),
          done: false,
        },
        {
          text: "teste",
          date: new Date(),
          done: false,
        },
        {
          text: "teste",
          date: new Date(),
          done: false,
        },
        {
          text: "teste",
          date: new Date(),
          done: false,
        },
        {
          text: "teste",
          date: new Date(),
          done: false,
        },
        {
          text: "teste",
          date: new Date(),
          done: false,
        },
        {
          text: "teste",
          date: new Date(),
          done: false,
        },
        {
          text: "teste",
          date: new Date(),
          done: false,
        },
      ],
      statusMessage: '',
    }
    this.handleUpdateListItem = this.handleUpdateListItem.bind(this)
    this.handleRemoveListItem = this.handleRemoveListItem.bind(this)
    this.handleAddListItem = this.handleAddListItem.bind(this)
    this.handleEditListItem = this.handleEditListItem.bind(this)
    this.handleStartAdding = this.handleStartAdding.bind(this)
    this.handleCancelForm = this.handleCancelForm.bind(this)
  }

  componentWillMount () {
    
    // https://facebook.github.io/react-native/docs/asyncstorage.html

    //localStorage.setItem("list", JSON.stringify([]))
    this.getLocalList()
  }

  updateList (list) {
    this.setState({list})
    this.setLocalList(list)
  }

  getLocalList () {
    /*
    let list = localStorage.getItem("list")
    if(list === null) {
      list = [];
    }
    else {
      list = JSON.parse(list)
    }
    list = list.map (item => {
      item.date = new Date(item.date)
      return item
    })
    this.setState({list})
    */
  }

  setLocalList (list) {
    /*
    this.setState({statusMessage: "A gravar dados localmente..."})
    localStorage.setItem("list", JSON.stringify(list))
    setTimeout(() => {
      this.setState({update_state_message: ""})
    }, 1000)
    */
  }

  handleUpdateListItem (index, data) {
    console.log ("handleUpdateListItem", index, data)
    let list = this.state.list.slice()
    list[index] = data
    this.updateList(list)
  }

  handleRemoveListItem (index) {
    console.log ("handleRemoveListItem", index)
    let list = this.state.list.slice()
    list.splice(index, 1)
    this.updateList(list)
  }

  handleAddListItem (data) {
    console.log ("handleAddListItem", data)
    //console.log (data)
    let list = this.state.list.slice()
    list.push(data)
    this.updateList(list)
  }

  handleEditListItem (index) {
    this.setState({item_to_edit: index, adding: false})
  }

  handleStartAdding () {
    this.setState({item_to_edit: -1, adding: true})
  }

  handleCancelForm () {
    this.setState({item_to_edit: -1, adding: false})
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.listSection}>

          <Text style={styles.sectionHeading}>Tasks To be Done</Text>
          <TodoList list={this.state.list}
                    filter={item => true/*!item.done*/}
                    onUpdate={this.handleUpdateListItem}
                    onRemove={this.handleRemoveListItem}
                    onEdit={this.handleEditListItem}
          />
          
        </View>
        <TodoForm editingItemIndex={this.state.item_to_edit}
                  editingItem={this.state.item_to_edit !== -1 ? this.state.list[this.state.item_to_edit] : null}
                  adding={this.state.adding}
                  onSubmit={this.handleAddListItem}
                  onCancel={this.handleCancelForm}/>

        <TouchableOpacity onPress={this.handleStartAdding} style={styles.FAB}>
          <Text style={styles.FABText}>+</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

export default Page;
