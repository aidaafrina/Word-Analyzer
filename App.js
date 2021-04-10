import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {
  
  constructor(){
    super();

    this.state = {
    textInput: '',
    vowels: 0,
    consonants: 0,
    chars: 0,
    };

  }

  countVowels(){
    var vowels_letters = 'aeiouAEIOU';
    var vcount = 0;
    var string = this.state.textInput;
    
    for(var x = 0; x < string.length ; x++){
      if (vowels_letters.indexOf(string[x]) !== -1){
        vcount += 1;
      }
      this.setState({
          vowels: vcount
          });
    }
  }

  countConsonants(){
    var consonants_letters = 'bcdfgjklmnpqstvxzhrwy';
    var vcount = 0;
    var string = this.state.textInput;
    
    for(var x = 0; x < string.length ; x++){
      if (consonants_letters.indexOf(string[x]) !== -1){
        vcount += 1;
      }
      this.setState({
          consonants: vcount
          });
    } 
  }

  countChars(){
    // let chars = textInput.split(" ");
    // console.log(chars);
    let string=this.state.textInput;
    var total_character = string.length;

      this.setState({
          chars: total_character
      });
    
  }

  render() {
  return (
  <View style={styles.container}>
  <Text style={styles.header}>A Word Analyzer</Text>

  <TextInput
        style={styles.input}
        style={{ height: 30, borderColor: 'black', borderWidth: 1, fontSize: 14, textAlign: 'center' }}
        placeholder="Word / Text" 
        onChangeText={textInput => this.setState({textInput})}
        value={this.state.textinput}
  />
  <br></br>

  <Button
    onPress={() => {this.countVowels(), this.countConsonants(), this.countChars()}}
    title="Analyze"
    color="#008080"
    style={{ height: 25, fontSize: 12, textAlign: 'center'}}
  />
  <br></br>
  <Text style={styles.contents}>Word : {this.state.textInput}</Text>
  <Text style={styles.contents}>No of Consonants : {this.state.consonants}</Text>
  <Text style={styles.contents}>No of Vowels : {this.state.vowels}</Text>
  <Text style={styles.contents}>No of Characters : {this.state.chars}</Text>
 
  </View>
  );
  }

 }
 
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#C0C0C0',
    marginHorizontal: 16,
  },
 
  header: {
    marginTop: 60,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    marginBottom: 10,
  },
   
  contents: {
    textAlign: 'center',
    fontSize: 16,
    color: '#333333',
    marginBottom: 5,
  }


  
  
  })
   