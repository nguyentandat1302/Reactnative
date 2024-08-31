import { StyleSheet, Text, View } from "react-native"


    const Project1 = () =>{
        return(
            <View style={myStyle.box}>
                <Text>
                    Hello World 
                </Text>
            </View>
        )
    }

    export default Project1

    const myStyle = StyleSheet.create({
        box: {
            height:100,
            width:100,
            backgroundColor: "#61dafb",
            alignItems: 'center',
            justifyContent: 'center',
        }
    })