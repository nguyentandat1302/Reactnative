import { Text, View } from "react-native"

const Cat = (props)=>{
    return (
        <View>
            <Text>Hello, My name {props.name}</Text>
        </View>
    )
}

export default Cat