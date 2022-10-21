import React, {useState, useCallback} from 'react';
import {StyleSheet, Dimensions, TouchableHighlight, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.15,
    minHeight: Dimensions.get('window').width * 0.15 * 0.1,
    padding: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'hsl(207,10%,25%)',
    backgroundColor: 'hsl(207,10%,18%)',
  },
  containerFocused: {
    borderWidth: 2,
    borderColor: 'lavender',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

const PickerCard = props => {
  const [hasFocus, setFocus] = useState(false);

  const onFocus = useCallback(() => {
    setFocus(true);
    props.activeCardCallback ? props.activeCardCallback(props.activeKey) : null;
  }, [props]);

  const onPress = useCallback(() => {
    setFocus(true);
    props.activeCardPressCallback
      ? props.activeCardPressCallback(props.activeKey)
      : null;
  }, [props]);

  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

  return (
    <TouchableHighlight
      style={[styles.container, hasFocus ? styles.containerFocused : null]}
      onFocus={onFocus}
      onPress={onPress}
      onBlur={onBlur}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableHighlight>
  );
};

export default PickerCard;
