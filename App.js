import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableHighlight, ScrollView } from 'react-native';
import { Image } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://static1.squarespace.com/static/56698c6ca976af23a57893a2/t/582108bde58c62a163dbfe64/1500473726445/Rocky+Mountains?format=2500w'
    };

    let randomPic = {
      uri: 'https://picsum.photos/250/?random'
    }

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hello World</Text>
        <Image source={pic} style={{ width: 370, height: 180 }} />
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}
            title="CLICK HERE"
            color="black"
            style={styles.button}
          />
        </View>

        <ScrollView style={{ paddingTop: 40 }}>
          <Text style={styles.text}>Scroll me plz</Text>
          <Image source={randomPic} style={{ width: 370, height: 250, marginTop: 10 }} />
          <Image source={randomPic} style={{ width: 370, height: 250, marginTop: 10 }} />
          <Text style={styles.text}>If you like</Text>
          <Image source={randomPic} style={{ width: 370, height: 250, marginTop: 10 }} />
          <Image source={randomPic} style={{ width: 370, height: 250, marginTop: 10 }} />
          <Text style={styles.text}>Scrolling down</Text>
          <Image source={randomPic} style={{ width: 370, height: 250, marginTop: 10 }} />
          <Image source={randomPic} style={{ width: 370, height: 250, marginTop: 10 }} />
          <Text style={styles.text}>What's the best</Text>
          <Image source={randomPic} style={{ width: 370, height: 250, marginTop: 10 }} />
          <Image source={randomPic} style={{ width: 370, height: 250, marginTop: 10 }} />
          <Text style={styles.text}>Framework around?</Text>
          <Image source={randomPic} style={{ width: 370, height: 250, marginTop: 10 }} />
          <Image source={randomPic} style={{ width: 370, height: 250, marginTop: 10 }} />
        </ScrollView>

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
    paddingTop: 50,
  },
  header: {
    fontSize: 30,
    fontWeight: "300",
    paddingBottom: 30
  },
  buttonContainer: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "300",
    paddingBottom: 10,
    paddingTop: 10,
  }
});

