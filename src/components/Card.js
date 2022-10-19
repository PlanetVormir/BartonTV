import React, {useCallback, useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'slategray',
    width: Dimensions.get('window').width * 0.28,
    aspectRatio: 16 / 9,
    margin: 25,
    borderRadius: 20,
    overflow: 'hidden',
  },
  wrapperFocused: {
    borderWidth: 5,
    borderColor: 'lavender',
    elevation: 70,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0)',
  },
});

const Card = props => {
  const [hasFocus, setFocus] = useState(false);

  const onFocus = useCallback(() => {
    setFocus(true);
    props.activeCardCallback ? props.activeCardCallback(props.data) : null;
  }, [props]);

  const onPress = useCallback(() => {
    console.log(`${props.title} was pressed`);
  }, [props]);

  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

  return (
    <TouchableHighlight
      onFocus={onFocus}
      onPress={onPress}
      onBlur={onBlur}
      style={[styles.wrapper, hasFocus ? styles.wrapperFocused : null]}>
      <ImageBackground
        style={styles.image}
        source={{uri: props.data ? props.data.poster : null}}
      />
    </TouchableHighlight>
  );
};

export default Card;
