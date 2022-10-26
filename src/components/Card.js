import React, {useCallback, useState} from 'react';
import {
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  gradient: {
    width: Dimensions.get('window').width * 0.28,
    aspectRatio: 16 / 9,
    margin: 25,
    borderRadius: 20,
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#2E303A',
    overflow: 'hidden',
    borderRadius: 18,
    borderColor: 'rgba(0,0,0,0)',
  },
  wrapperFocused: {
    borderWidth: 6,
    borderRadius: 20,
  },
  image: {
    width: '105%',
    height: '105%',
    backgroundColor: 'rgba(0,0,0,0)',
  },
});

const Card = props => {
  styles.gradient.aspectRatio = props.vertical ? 9 / 16 : 16 / 9;

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

  return (
    <LinearGradient
      style={styles.gradient}
      start={{x: 1, y: 1}}
      end={{x: 0, y: 0}}
      locations={[0.12, 0.42, 0.84]}
      colors={['#d2a8ff', '#f778ba', '#ff7b72']}>
      <TouchableOpacity
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
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Card;
