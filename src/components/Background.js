import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: '4%',
  },
});

const Background = props => {
  return (
    <View style={styles.body}>
      <LinearGradient
        style={styles.background}
        colors={['rgba(17,26,33, 0.6)', 'rgb(17,26,33)']}>
        <View style={styles.container}>{props.children}</View>
      </LinearGradient>
    </View>
  );
};

export default Background;
