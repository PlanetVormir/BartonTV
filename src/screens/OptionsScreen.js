import React from 'react';
import {StyleSheet, FlatList, View, DeviceEventEmitter} from 'react-native';
import Background from '../components/Background';
import Button from '../components/Button';

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  optionContainer: {
    padding: '2%',
  },
  option: {
    minWidth: '50%',
    alignSelf: 'center',
    elevation: 10,
  },
});

const OptionsScreen = props => {
  console.log(props.navigation);
  const route = props.route;
  const data = route.params.data;

  const pressCallback = activeKey => {
    props.navigation.goBack();
    DeviceEventEmitter.emit('event.optionSelected', {option: activeKey});
  };

  let i = 0;
  const renderOption = ({item}) => {
    return (
      <View style={styles.optionContainer}>
        <Button
          defaultFocus={i === 0 ? (i++, true) : false}
          style={styles.option}
          text={item}
          pressValue={item}
          pressCallback={pressCallback}
        />
      </View>
    );
  };

  return (
    <Background>
      <FlatList
        style={styles.body}
        data={data}
        renderItem={renderOption}
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />
    </Background>
  );
};

export default OptionsScreen;
