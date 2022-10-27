import React, {useState, useCallback} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'flex-start',
    elevation: 20,
  },
  containerFocused: {
    elevation: 10,
    shadowColor: '#d2a8ff',
  },
  border: {
    borderRadius: 11,
    overflow: 'hidden',
  },
  borderFocused: {
    padding: 5,
    borderRadius: 10,
  },
  background: {
    backgroundColor: 'rgb(27, 31, 35)',
    padding: 15,
    paddingHorizontal: 25,
  },
  backgroundFocused: {
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
  },
});

const Button = props => {
  const [hasFocus, setFocus] = useState(false);

  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const onPress = useCallback(() => {
    props.pressCallback(props.pressValue);
  }, [props]);

  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

  return (
    <TouchableOpacity
      hasTVPreferredFocus={props.defaultFocus}
      onFocus={onFocus}
      onPress={onPress}
      onBlur={onBlur}
      style={[
        styles.container,
        hasFocus ? styles.containerFocused : null,
        props.style,
      ]}
      activeOpacity={1}>
      <LinearGradient
        style={[styles.border, hasFocus ? styles.borderFocused : null]}
        start={{x: 1, y: 1}}
        end={{x: 0, y: 0}}
        locations={[0.12, 0.42, 0.84]}
        colors={['#d2a8ff', '#f778ba', '#ff7b72']}>
        <LinearGradient
          colors={['rgba(255,255,255,0.15)', 'rgba(0,0,0,0)']}
          style={[
            styles.background,
            hasFocus ? styles.backgroundFocused : null,
          ]}>
          <Text style={styles.text}>{props.text ? props.text : 'Play'}</Text>
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
