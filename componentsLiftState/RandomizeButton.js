import React from 'react'
import { 
    TouchableHighlight, 
    Text, 
} from 'react-native'

class RandomizeButton extends React.Component {
    constructor (props) {
        super(props)
        this.handlePress = this.handlePress.bind(this)
    }
    handlePress () {
        console.log("handlePress pre")
        !this.props.onMyPress || this.props.onMyPress()
        console.log("handlePress pos")
    }
    render () {
        return <TouchableHighlight onPress={this.handlePress}>
            <Text>Touch Me!!!!</Text>
        </TouchableHighlight>
    }
}

export default RandomizeButton