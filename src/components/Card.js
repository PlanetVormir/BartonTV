import React, {useCallback, useState} from 'react';
import {
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  View,
  StyleSheet,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const styleSheet = props =>
  StyleSheet.create({
    gradient: {
      width: props.vertical ? 'auto' : Dimensions.get('window').width * 0.28,
      height: props.vertical ? Dimensions.get('window').width * 0.28 : 'auto',
      aspectRatio: props.vertical ? 9 / 16 : 16 / 9,
      margin: 25,
      borderRadius: 20,
    },
    gradientFocused: {},
    wrapper: {
      flex: 1,
      backgroundColor: '#2E303A',
      overflow: 'hidden',
      borderRadius: 18,
      borderColor: 'rgba(0,0,0,0)',
      shadowColor: '#d2a8ff',
    },
    wrapperFocused: {
      borderWidth: 4,
      borderRadius: 20,
      elevation: 10,
    },
    image: {
      width: '105%',
      height: '105%',
      backgroundColor: 'rgba(0,0,0,0)',
    },
  });

const Card = props => {
  const styles = styleSheet(props);

  const [hasFocus, setFocus] = useState(false);

  const onFocus = useCallback(() => {
    setFocus(true);
    props.activeCardCallback ? props.activeCardCallback(props.data) : null;
  }, [props]);

  const onPress = useCallback(() => {
    props.activeCardPressCallback
      ? props.activeCardPressCallback(props.data)
      : null;
  }, [props]);

  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

  const Container = props.removeTouch ? View : TouchableOpacity;

  return (
    <LinearGradient
      style={[styles.gradient, hasFocus ? styles.gradientFocused : null]}
      start={{x: 1, y: 1}}
      end={{x: 0, y: 0}}
      locations={[0.12, 0.42, 0.84]}
      colors={['#d2a8ff', '#f778ba', '#ff7b72']}>
      <Container
        style={[styles.wrapper, hasFocus ? styles.wrapperFocused : null]}
        hasTVPreferredFocus={props.defaultFocus}
        onFocus={onFocus}
        onPress={onPress}
        onBlur={onBlur}
        activeOpacity={1}>
        <ImageBackground
          style={styles.image}
          source={{uri: props.data ? props.data.poster : null}}
        />
      </Container>
    </LinearGradient>
  );
};

export default Card;
