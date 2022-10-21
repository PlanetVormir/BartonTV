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
    height: Dimensions.get('window').width * 0.28,
    aspectRatio: 9 / 16,
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

const SearchCard = props => {
  const [hasFocus, setFocus] = useState(false);

  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const onPress = useCallback(() => {
    props.activeCardCallback(props.data);
  }, [props]);

  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

  return (
    <TouchableHighlight
      hasTVPreferredFocus={props.defaultFocus}
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

export default SearchCard;
