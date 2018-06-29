import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, StyleSheet, Text, View } from 'react-native';

//learn about props
class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

//learn about state
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text style={styles.bigblue}>{display}</Text>
    );
  }
}


export default class HelloWorldApp extends Component {
  render() {
    
    let pic = {
      uri: 'https://foxvalleygirlscodingclub.files.wordpress.com/2017/09/cropped-cropped-img_63161.jpg'
    };

    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
        <View style={{height: 220}}>
          <View style={{flex: 2, backgroundColor: "#B03283"}} />
          <View style={{flex: 1, backgroundColor: '#D0509B'}} />
          <View style={{height: 150}}>
            <Image source={pic} style={{height: 150}} />
          </View >
          <View style={{flex: 1, backgroundColor: "#B03283"}} />
          <View style={{flex: 1, backgroundColor: '#D0509B'}} />
          <View style={{flex: 1, backgroundColor: '#312057'}} />
        </View>
        <ScrollView style={{padding: 20}}>
          
          <Text style={styles.title} >Hello Fox Valley Girls Coding Club!</Text>

          <View style={{height: 150}}>
            <Greeting name='Paige' />
            <Greeting name='Nikki' />
            <Greeting name='Dottie' />
            <Greeting name='Alli' />
            <Greeting name='Isabella' />
            <Greeting name='Rosie' />
          </View>
          <View style={{height: 100}}>
            <Blink text='I love to blink' />
            <Blink text='Yes blinking is so great' />
            <Blink text='Why did they ever take this out of HTML' />
            <Blink text='Look at me - look at me - look at me' />
          </View>
        </ScrollView>
        <View style={{height: 40}}>
          <View style={{flex: 2, backgroundColor: '#D0509B'}} />
          <View style={{flex: 1, backgroundColor: "#B03283"}} />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 18,
  },
  title: {
    color: '#D0509B',
    alignItems: 'center'
  },
});
