import React, {useState} from 'react';
import {StyleSheet, View, ImageBackground, Text} from 'react-native';
import TrendingBar from './TrendingBar';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'rgb(17,26,33)',
  },
  trendingBar: {
    bottom: 0,
  },
  vignette: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  heading: {
    flex: 10,
    fontWeight: 'bold',
    fontSize: 40,
    margin: 40,
    color: 'white',
  },
});

const HomeScreen = () => {
  const [activeElement, setActiveElement] = useState({});

  const activeCardCallback = data => {
    setActiveElement(data);
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={styles.body}
        source={{
          uri: activeElement.poster,
        }}
        blurRadius={90}>
        <LinearGradient
          style={styles.vignette}
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.4)']}>
          <View style={styles.container}>
            <Text style={styles.heading}>{activeElement.title}</Text>
            <TrendingBar
              style={styles.trendingBar}
              activeCardCallback={activeCardCallback}
            />
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
