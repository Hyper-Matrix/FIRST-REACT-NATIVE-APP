import React from 'react';
import { StyleSheet, Text, View , ScrollView, Image,TextInput,Button,StatusBar,ImageBackground} from 'react-native';


 class App extends React.Component {
   
  state ={
    number:"",
    name:""
  }
result =()=>
  { 
  if(this.state.number == "1801106017")
  {
this.setState({
  name:"ABHISHEK KUMAR"
})
  }
else{
  this.setState({
    name:"Name not found"
  })
}

  }

  
render(){
   return (
    
    
  <View style = {styles.container}>
  <ImageBackground style= {styles.image} source= {{uri:"https://www.setaswall.com/wp-content/uploads/2017/06/Material-Backgrounds-07-2048-x-1197.png"}}>
  <ScrollView>
    
  <Image style ={{height:200,width:380,marginTop:30,alignSelf:"center"}}  source = {require="C:\Users\dell\Desktop\react native\registrationApp\assets\logo.png"}/>
  <Text style ={styles.text}>WELCOME TO REACT NATIVE REGISTRATION APP</Text>
  <Text style = {styles.text}>ENTERED REGISTRATION NUMBER IS:</Text>
  <Text style = {styles.text1}>{this.state.number}</Text>
  <TextInput  style = {{height:60,textAlign:"center",borderWidth:5,margin:10,borderRadius:10}} placeholder = "Enter Registration Number" onChangeText = {(text)=>this.setState({number:text})}/>
  <View style= {{margin:10 , borderRadius:20}}>
    <Button title ="SHOW NAME" 
    onPress = {this.result}/>
  </View>
  <Text style={styles.text}>{this.state.name}</Text>
  <StatusBar
  backgroundColor="#0288D1"
  />
  
  
  </ScrollView>
  </ImageBackground>
  </View>
    
  );
}
  
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03A9F4',
    alignItems: 'center',
    justifyContent: 'center',
    
    
    
  },
  text :{
    flex:1,
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center",
    marginTop:20
  },
  text1 :{
    flex:1,
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center",
    marginTop:20,
    color:"#03A9F4"
  },
  image:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});

