import React, {useState, useCallback, useRef} from 'react';
import {
  TouchableHighlight,
  TextInput,
  StyleSheet,
  Dimensions,
  Keyboard,
} from 'react-native';

// https://stackoverflow.com/a/54159564/15007549
const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textBox: {
    minWidth: Dimensions.get('window').width * 0.7,
    minHeight: Dimensions.get('window').width * 0.7 * 0.08,
    padding: 20,
    borderRadius: 8,
    borderColor: 'hsl(230,12%,30%)',
    borderWidth: 1,
    backgroundColor: 'hsl(230,12%,20%)',
    elevation: 20,
    fontSize: 20,
    lineHeight: 20,
  },
  textBoxFocus: {
    borderColor: '#FF7B72',
    borderWidth: 2,
    color: 'white',
    shadowColor: '#FF7B72',
    elevation: 15,
  },
});

const SearchBar = props => {
  const [hasFocus, setFocus] = useState(false);
  const [inputRef, setInputFocus] = useFocus();

  const onFocus = useCallback(() => {
    setFocus(true);
    setInputFocus(true);
  }, [setInputFocus]);

  const onBlur = useCallback(() => {
    setFocus(false);
    Keyboard.dismiss();
  }, []);

  const onSubmit = e => {
    props.searchCallback(e.nativeEvent.text);
  };

  return (
    <TouchableHighlight onFocus={onFocus} style={styles.container}>
      <TextInput
        ref={inputRef}
        blurOnSubmit={true}
        onBlur={onBlur}
        onSubmitEditing={onSubmit}
        style={[styles.textBox, hasFocus ? styles.textBoxFocus : null]}
        placeholder="Search"
        placeholderTextColor="#aaa"
      />
    </TouchableHighlight>
  );
};

export default SearchBar;
