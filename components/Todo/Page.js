import React, { Component } from 'react'
import {View, Text} from 'react-native'
import TodoList from './List'
import TodoAddForm from './AddForm'
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
    let list = this.state.list.slice()
    list[index] = data
    this.updateList(list)
  }

  handleRemoveListItem (index) {
    let list = this.state.list.slice()
    list.splice(index, 1)
    this.updateList(list)
  }

  handleAddListItem (data) {
    //console.log (data)
    let list = this.state.list.slice()
    list.push(data)
    this.updateList(list)
  }

  render() {
    console.log("App Render")
    return (
      <View style={{flex: 1}}>
        <View style={styles.listSection}>
          <Text style={styles.sectionHeading}>Tasks To be Done</Text>
          <TodoList list={this.state.list}
                    filter={item => !item.done}
                    onUpdate={this.handleUpdateListItem}
                    onRemove={this.handleRemoveListItem}
          />
        </View>

        <TodoAddForm onSubmit={this.handleAddListItem}/>

      </View>
    )
  }
}

export default Page;
