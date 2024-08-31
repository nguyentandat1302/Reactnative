import { StyleSheet, Text, View } from "react-native"
import Cat from "./components/Cat"
import Project1 from "./components/Project1"
import Project2 from "./components/Project2"
import Project3 from "./components/Project3"
import Project4 from "./components/Project4"
import Project5 from "./components/Project5"
import Project6 from "./components/Project6"
import Project7 from "./components/Project7"
import Project8 from "./components/Project8"


const App = ()=>
{
  return(
    <View style = {myStyle.container}>
      {/* <Project1/> */}
      {/* <Project2/> */}
      {/* <Project3/> */}
      {/* <Project4/> */}
      {/* <Project5/> */}
      {/* <Project6/> */}
      {/* <Project7/>  */}
      {/* <Project8/>  */}
    </View>
  )
}


export  default App
const myStyle = StyleSheet.create(
  {
    container: {
      flex:1,
    }
  }
)