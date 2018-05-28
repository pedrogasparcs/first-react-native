import React from 'react'
import { Text } from 'react-native'

class MyTextArea extends React.Component {
    render () {
        return <Text>{this.props.text}</Text>
    }
}
export default MyTextArea