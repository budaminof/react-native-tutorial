import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, Animated, Dimensions } from 'react-native';
import { Image } from 'react-native';

const HEADER_EXPANDED_HEIGHT = 300;
const HEADER_COLLAPSED_HEIGHT = 60;
const { width: SCREEN_WIDTH } = Dimensions.get("screen");

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      scrollY: new Animated.Value(0)
    }
  }

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
      extrapolate: 'clamp'
    });

    const headerTitleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });

    const heroTitleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });

    const pic = {
      uri: 'https://static1.squarespace.com/static/56698c6ca976af23a57893a2/t/582108bde58c62a163dbfe64/1500473726445/Rocky+Mountains?format=2500w'
    };

    const randomPic = {
      uri: 'https://picsum.photos/250/?random'
    }

    return (

      <View style={styles.container}>
        <Animated.View style={[styles.header, { height: headerHeight }]}>
          <Animated.Text style={[styles.titleTextFirst, { opacity: headerTitleOpacity }]}>Hello World</Animated.Text>
          <Animated.Text style={[styles.titleTextSecond, { opacity: heroTitleOpacity }]}>Hello World, built with React Native. So easy. So fun.</Animated.Text>
        </Animated.View>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          onScroll={Animated.event(
            [{
              nativeEvent: {
                contentOffset: {
                  y: this.state.scrollY
                }
              }
            }])
          }
          scrollEventThrottle={16}>
          <Text style={styles.title}>This is a title</Text>
          <Text style={styles.content}>And this is some information.</Text>
          <Image source={randomPic} style={{ width: 350, height: 250, marginTop: 10 }} />
          <Image source={randomPic} style={{ width: 350, height: 250, marginTop: 10 }} />
          <Image source={randomPic} style={{ width: 350, height: 250, marginTop: 10 }} />
          <Image source={randomPic} style={{ width: 350, height: 250, marginTop: 10 }} />
          <Image source={randomPic} style={{ width: 350, height: 250, marginTop: 10 }} />
          <Image source={randomPic} style={{ width: 350, height: 250, marginTop: 10 }} />
          <Image source={randomPic} style={{ width: 350, height: 250, marginTop: 10 }} />
          <Image source={randomPic} style={{ width: 350, height: 250, marginTop: 10 }} />
          <Image source={randomPic} style={{ width: 350, height: 250, marginTop: 10 }} />
          <Image source={randomPic} style={{ width: 350, height: 250, marginTop: 10 }} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  scrollContainer: {
    padding: 14,
    paddingTop: HEADER_EXPANDED_HEIGHT
  },
  header: {
    backgroundColor: '#39CCCC',
    position: 'absolute',
    width: SCREEN_WIDTH,
    top: 0,
    left: 0,
    zIndex: 9999
  },
  title: {
    marginVertical: 16,
    color: "black",
    fontWeight: "bold",
    fontSize: 24
  },
  titleTextFirst: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    marginTop: 28,
  },
  titleTextSecond: {
    textAlign: 'left',
    fontSize: 32,
    color: 'black',
    position: 'absolute',
    bottom: 16,
  },
});
