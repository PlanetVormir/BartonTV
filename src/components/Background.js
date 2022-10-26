import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: '4%',
  },
});

const Background = props => {
  return (
    <LinearGradient
      style={styles.background}
      colors={['rgb(22,27,34)', 'rgb(13,17,23)']}
      locations={[0.3, 1]}>
      <View style={styles.container}>{props.children}</View>
    </LinearGradient>
  );
};

export default Background;
