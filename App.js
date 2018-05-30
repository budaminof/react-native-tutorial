import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, Animated, Dimensions, Button, VibrationIOS } from 'react-native';
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

    const randomPic = {
      uri: 'https://picsum.photos/250/?random'
    }

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.header, { height: headerHeight }]}>
          <Animated.Text style={[styles.titleTextFirst, { opacity: heroTitleOpacity }]}>Hello World, built with React Native. So easy. So fun.</Animated.Text>
          <Animated.Text style={[styles.titleTextSecond, { opacity: headerTitleOpacity }]}>Hello World</Animated.Text>
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
          <Text style={styles.title}>This is a spring day in Boulder</Text>
          <Text style={styles.content}>We are done with LP2, and my team just release beta so I have some time to learn new things and play around. </Text>
          <View style={styles.buttonWrapper}>
            <Button
              onPress={() => {
                VibrationIOS.vibrate();
              }}
              title="CLICK ME"
              color="white"
            />
          </View>
          <Image source={randomPic} style={styles.image} />
          <Image source={randomPic} style={styles.image} />
          <Image source={randomPic} style={styles.image} />
          <Image source={randomPic} style={styles.image} />
          <Image source={randomPic} style={styles.image} />
          <Image source={randomPic} style={styles.image} />
          <Image source={randomPic} style={styles.image} />
          <Image source={randomPic} style={styles.image} />
          <Image source={randomPic} style={styles.image} />
          <Image source={randomPic} style={styles.image} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eaeaea',
  },
  scrollContainer: {
    padding: 14,
    paddingTop: HEADER_EXPANDED_HEIGHT,
  },
  header: {
    backgroundColor: '#39CCCC',
    position: 'absolute',
    width: SCREEN_WIDTH,
    top: 0,
    left: 0,
    zIndex: 9999,
  },
  title: {
    marginVertical: 16,
    color: "#2d2d2d",
    fontWeight: "bold",
    fontSize: 24
  },
  titleTextSecond: {
    textAlign: 'center',
    fontSize: 18,
    color: '#2d2d2d',
    marginTop: 28,
  },
  titleTextFirst: {
    textAlign: 'left',
    fontSize: 32,
    color: '#2d2d2d',
    position: 'absolute',
    bottom: 16,
    paddingLeft: 10
  },
  buttonWrapper: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#2d2d2d',
  },
  image: {
    marginTop: 10,
    width: 350,
    height: 270,
  },
});